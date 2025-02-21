"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameController_1 = __importDefault(require("./controller/GameController"));
// 애플리케이션 
class App {
    run() {
        const controller = new GameController_1.default();
        controller.play();
    }
}
exports.default = App;
const app = new App();
app.run();
