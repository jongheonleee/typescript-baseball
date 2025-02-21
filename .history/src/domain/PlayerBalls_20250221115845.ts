import Ball from './Ball';

// 사용자가 입력한 숫자에 대한 ball들을 들고 있는 객체 
class PlayerBalls {

    private balls: Array<Ball> = new Array<Ball>();

    constructor() {
    }

    public addBall(ball: Ball) {
        if (!this.isValidSize()) {
            throw new Error('볼을 이미 3개 등록하였습니다.');
        }
        this.balls.push(ball);
    }

    private isValidSize() {
        return this.balls.length < 3;
    }
}

export default PlayerBalls;