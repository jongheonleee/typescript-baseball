import GameController from "./controller/GameController";

// 애플리케이션 
export default class App {
    run() {
        const controller = new GameController();
        controller.play();
    }
}

const app = new App();
app.run();