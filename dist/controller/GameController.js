"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const InputView_1 = __importDefault(require("../view/InputView"));
const OutputView_1 = __importDefault(require("../view/OutputView"));
const GameService_1 = __importDefault(require("../service/GameService"));
const PlayerBalls_1 = __importDefault(require("../domain/PlayerBalls"));
const Balls_1 = __importDefault(require("../domain/Balls"));
const Computer_1 = __importDefault(require("../domain/Computer"));
// 게임의 흐름 관장하는 객체 
class GameController {
    // 게임 진행 여부 기록
    constructor(running = false, service = new GameService_1.default(new Balls_1.default(1, 9), new PlayerBalls_1.default(), new Computer_1.default(1, 9))) {
        this.running = running;
        this.service = service;
    }
    // 게임 시작 문구 출력 
    start() {
        console.log(InputView_1.default.printGameStart());
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
            const numbers = readlineSync.question(InputView_1.default.printAskNumbers());
            // 사용자 볼 정보 업데이트
            this.service.createPlayerBalls(numbers);
            // 사용자 볼 정보와 컴퓨터 볼 정보 비교 
            const result = this.service.compare();
            // 피드백 출력 
            console.log(result.getCurrentState());
            // 만약, 다 맞으면 게임 종료
            // 종료할 건지, 재시작할 건지 되묻기 
            if (result.isThreeStrikeOut()) {
                // 게임 종료 
                this.end();
                const answer = readlineSync.question(InputView_1.default.printAskGameEndOrRestart());
                this.running = answer === '1' ? true : false;
                // 재시작하면 컴퓨터 볼 재생성 
                if (this.running) {
                    this.service.createComputerBalls();
                }
            }
        } while (this.running);
    }
    // 게임 종료  
    end() {
        console.log(OutputView_1.default.printGameOver());
    }
}
exports.default = GameController;
