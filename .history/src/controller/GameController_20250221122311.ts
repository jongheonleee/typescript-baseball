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

    // 게임 진행 여부 기록
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
        // 게임 진행 여부 파악 
        const running:boolean = true;


        // 게임 진행 
        do {
            // 사용자로부터 입력값 받기 
            const numbersStr = this.getInput(InputView.printAskNumber());
        //    const numbers = InputView.getNumbers(numbersStr);

           // 사용자 볼 정보 업데이트

           // 사용자 볼 정보와 컴퓨터 볼 정보 비교 

           // 피드백 출력 
        
           // 만약, 다 맞으면 게임 종료
                // 종료할 건지, 재시작할 건지 되묻기 
        } while(running);
    }

    // 게임 종료  
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