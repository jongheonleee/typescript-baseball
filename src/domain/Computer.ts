
import Ball from './Ball';

// 컴퓨터 역할, 난수를 생성하고 그에 맞는 Ball 객체들을 소지하고 있음
class Computer {

    private begin:number;
    private end:number;
    private commputerBalls:Array<Ball> = new Array<Ball>();

    constructor(begin:number, end:number) {
        this.begin = begin;
        this.end = end;
    }

    public getRandomNumber() {
        return Math.floor(Math.random() * this.end + this.begin);
    }

    public addBall(ball: Ball) {
        if (!this.isValidSize()) {
            throw new Error('볼을 이미 3개 등록하였습니다.');
        }

        this.commputerBalls.push(ball);
    }

    public clearBalls() {
        this.commputerBalls.length = 0;
    }

    private isValidSize() {
        return this.commputerBalls.length < 3;
    }

    public getBalls() {
        return Object.freeze([...this.commputerBalls]); // 배열을 복사한 후, 그 배열을 동결하여 변경 불가능하게 만든다
    }

}

export default Computer;