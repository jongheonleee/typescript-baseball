import Balls from "../domain/Balls";
import Ball from "../domain/Ball";
import PlayerBalls from "../domain/PlayerBalls";
import Computer from "../domain/Computer";

// 게임 서비스 추상화
interface Service {
    createPlayerBalls(numbers:string) : void
    createComputerBalls() : void
    compare : Calculatable
}

// 계산 알고리즘 추상화(Strategy Pattern)
interface Calculatable { 
    () : {
        ball : number,
        strike : number
    }
}

// compare() 부분이 변동 될 가능성이 큼 
export default class GameService implements Service {

    constructor(
        private balls : Balls,
        private playerBalls : PlayerBalls,
        private computer : Computer
    ) {}

    public createPlayerBalls(numbers:string) : void {
        this.playerBalls.clearBalls();
        for (let i=0; i<3; i++) {
            const ball : Ball = this.balls.getBall(parseInt(numbers[i]));
            this. playerBalls.addBall(ball);
        }
    }

    public createComputerBalls() : void {
        this.computer.clearBalls();
        for (let i=0; i<3; i++) {
            const randomNumber = this.computer.getRandomNumber();
            const ball : Ball = this.balls.getBall(randomNumber);
            this.computer.addBall(ball);
        }
    }

    public compare() : { ball : number, strike : number} {
        let countOfBall = 0, countOfStrike = 0;
        // 스트라이크 카운팅 
        for (let i=0; i<3; i++) {
            const computerBall = this.computer.getBall(i);
            const playerBall = this.playerBalls.getBall(i);

            if (computerBall.equals(playerBall)) {
                countOfStrike++;
            }
        }

        // 3 스트라이크면 바로 반환
        if (countOfStrike === 3) {
            return {ball : 0, strike : countOfStrike};
        }

        // 볼 카운팅 
        const computerBalls = this.computer.getBalls();
        const playerBalls = this.playerBalls.getBalls();

        // - 집합 활용하기 -> 추후에 개발 예정 
        // const setComputerAndPlayerBalls : Set<string> = new Set([
        //     ...computerBalls.map((ball) => JSON.stringify(ball)),
        //     ...playerBalls.map((ball) => JSON.stringify(ball))
        // ])

        for (let i=0; i<3; i++) {
            const computerBall = computerBalls[i];
            
            for (let j=0; j<3; j++) {
                const playerBall = playerBalls[j];
                if (computerBall.equals(playerBall)) {
                    countOfBall++;
                }
            }
        }

        countOfBall = countOfBall - countOfStrike;

        return {
            ball : countOfBall,
            strike : countOfStrike
        };
    }
}
