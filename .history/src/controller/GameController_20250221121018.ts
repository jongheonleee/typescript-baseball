import InputView from "../view/InputView";
import OutputView from "../view/OutputView";

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
    }
}

export default GameController;