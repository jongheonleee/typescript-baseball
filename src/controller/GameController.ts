import * as readlineSync from 'readline-sync';
import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import Service from '../service/GameService'
import GameService from '../service/GameService';
import PlayerBalls from '../domain/PlayerBalls';
import Balls from '../domain/Balls'
import Computer from '../domain/Computer';

// 게임의 흐름 관장하는 객체 
export default class GameController {
    // 게임 진행 여부 기록
    constructor(
        private running : boolean = false,
        private service : Service = new GameService(
            new Balls(1, 9),
            new PlayerBalls(),
            new Computer(1, 9)
        )
    ){}

    // 게임 시작 문구 출력 
    private start() {
        console.log(InputView.printGameStart());
    }

    // 게임 플레이 처리 
    play() {
        // 게임 진행 
        this.start();
        this.running = true;
        // 컴퓨터 볼 생성 
        this.service.createComputerBalls();
        do {
            // 사용자로부터 입력값 받기 
            const numbers = readlineSync.question(InputView.printAskNumbers());

            // 사용자 볼 정보 업데이트
            this.service.createPlayerBalls(numbers);

            // 사용자 볼 정보와 컴퓨터 볼 정보 비교 
            const result = this.service.compare();

            // 피드백 출력 
            console.log(OutputView.printCurrentState(result.ball, result.strike));
        
            // 만약, 다 맞으면 게임 종료
                    // 종료할 건지, 재시작할 건지 되묻기 
            if (result.strike === 3) {
                // 게임 종료 
                this.end();
                const answer = readlineSync.question(InputView.printAskGameEndOrRestart());
                this.running = answer === '1' ? true : false;

                // 재시작하면 컴퓨터 볼 재생성 
                if (this.running) {
                    this.service.createComputerBalls();
                }
            }
        } while(this.running);
    }

    // 게임 종료  
    private end() {
        console.log(OutputView.printGameOver());
    }
}
