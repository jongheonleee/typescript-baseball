import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import readline from 'readline';

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,  // 표준 입력 스트림
    output: process.stdout // 표준 출력 스트림
});

// 게임의 흐름 관장하는 객체 
class GameController {

    private running : boolean;

    constructor() {
        this.running = false;
    }

    // 게임 시작 문구 출력 
    start() {
        console.log(InputView.printGameStart());
    }

    // 게임 플레이 처리 
    play() {
        const running : boolean = true;

        while (running) {

        }
    }

    // 게임 종료 문구 
    end() {
        console.log(OutputView.printGameOver());
        this.getInput(InputView.printAskGameEndOrRestart());
    }

    private getInput(message: string) {
        rl.question(message, (answer) => {
            // 입력이 끝나면 인터페이스 종료
            rl.close();
            return answer;
        });
    }
}

export default GameController;