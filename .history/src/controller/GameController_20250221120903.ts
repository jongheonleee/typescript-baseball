import InputView from "../view/InputView";
import OutputView from "../view/OutputView";

// 게임의 흐름 관장하는 객체 
class GameController {

    // 게임 시작 문구 출력 
    start() {
        console.log(InputView.printGameStart());
    }

    play() {
        const running : boolean = true;

        while (running) {
            
        }
    }

    end() {

    }
}

export default GameController;