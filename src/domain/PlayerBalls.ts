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

    public getBalls() {
        return Object.freeze([...this.balls]); // 배열을 복사한 후, 그 배열을 동결하여 변경 불가능하게 만든다
    }

    public clearBalls() {
        this.balls.length = 0;
    }
}

export default PlayerBalls;