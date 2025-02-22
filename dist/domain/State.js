"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = void 0;
// 낫싱 (0볼 0스트라이크)
class Nothing {
    constructor(ball = 0, strike = 0) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '낫싱';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 원볼 
class OneBall {
    constructor(ball = 1, strike = 0) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '1볼';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 투볼
class TwoBall {
    constructor(ball = 2, strike = 0) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '2볼';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 쓰리볼
class ThreeBall {
    constructor(ball = 3, strike = 0) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '3볼';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 원스트라이크(0볼 1스트라이크)
class OneStrike {
    constructor(ball = 0, strike = 1) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '1스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 원스트라이크원볼(1볼 1스트라이크)
class OneStrikeOneBall {
    constructor(ball = 1, strike = 1) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '1볼 1스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 원스트라이크투볼(2볼 1스트라이크)
class OneStrikeTwoBall {
    constructor(ball = 2, strike = 1) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '2볼 1스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 투스트라이크(0볼 2스트라이크)
class TwoStrike {
    constructor(ball = 0, strike = 2) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '2스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 투스트라이크원볼(1볼 2스트라이크)
class TwoStrikeOneBall {
    constructor(ball = 1, strike = 2) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '1볼 2스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return false;
    }
}
// 쓰리스트라이크
class ThreeStrike {
    constructor(ball = 0, strike = 3) {
        this.ball = ball;
        this.strike = strike;
    }
    getCurrentState() {
        return '3스트라이크';
    }
    isSame(ball, strike) {
        return this.ball === ball && this.strike === strike;
    }
    isThreeStrikeOut() {
        return true;
    }
}
// 전체 상태 등록 
const states = [
    new Nothing(),
    new OneBall(),
    new TwoBall(),
    new ThreeBall(),
    new OneStrike(),
    new OneStrikeOneBall(),
    new OneStrikeTwoBall(),
    new TwoStrike(),
    new TwoStrikeOneBall(),
    new ThreeStrike()
];
// 특정 상태 조회 
const getInstance = (ball, strike) => {
    return states.find((state) => state.isSame(ball, strike) === true);
};
exports.getInstance = getInstance;
