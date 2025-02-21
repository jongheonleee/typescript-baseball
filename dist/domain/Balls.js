"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ball_1 = __importDefault(require("./Ball"));
// > 게임 운영에 필요한 모든 Ball 객체를 들고 있음
// 애플리케이션 운영에 쓰이는 객체 통합 관리, 메모리 효율적 사용 도모(Flyweight Pattern)
class Balls {
    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
        for (let i = begin; i <= end; i++) {
            Balls.pool.set(i, new Ball_1.default(i));
        }
    }
    getBall(number) {
        if (!this.isValidRange(number)) {
            throw new Error(`${this.begin}과 ${this.end} 범위에 속한 숫자만 입력해야합니다.`);
        }
        return Balls.pool.get(number);
    }
    isValidRange(number) {
        return this.begin <= number && number <= this.end;
    }
}
Balls.pool = new Map();
exports.default = Balls;
