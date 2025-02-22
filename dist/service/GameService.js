"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = require("../domain/State");
// compare() 부분이 변동 될 가능성이 큼 
class GameService {
    constructor(balls, playerBalls, computer) {
        this.balls = balls;
        this.playerBalls = playerBalls;
        this.computer = computer;
    }
    createPlayerBalls(numbers) {
        this.playerBalls.clearBalls();
        for (let i = 0; i < 3; i++) {
            const ball = this.balls.getBall(parseInt(numbers[i]));
            this.playerBalls.addBall(ball);
        }
    }
    createComputerBalls() {
        this.computer.clearBalls();
        for (let i = 0; i < 3; i++) {
            const randomNumber = this.computer.getRandomNumber();
            const ball = this.balls.getBall(randomNumber);
            this.computer.addBall(ball);
        }
    }
    compare() {
        let countOfBall = 0, countOfStrike = 0;
        // 스트라이크 카운팅 
        for (let i = 0; i < 3; i++) {
            const computerBall = this.computer.getBall(i);
            const playerBall = this.playerBalls.getBall(i);
            if (computerBall.equals(playerBall)) {
                countOfStrike++;
            }
        }
        // 볼 카운팅 
        const computerBalls = this.computer.getBalls();
        const playerBalls = this.playerBalls.getBalls();
        for (let i = 0; i < 3; i++) {
            const computerBall = computerBalls[i];
            for (let j = 0; j < 3; j++) {
                const playerBall = playerBalls[j];
                if (computerBall.equals(playerBall)) {
                    countOfBall++;
                }
            }
        }
        countOfBall = countOfBall - countOfStrike;
        return (0, State_1.getInstance)(countOfBall, countOfStrike);
    }
}
exports.default = GameService;
