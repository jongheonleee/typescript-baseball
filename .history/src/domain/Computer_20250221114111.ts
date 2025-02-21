
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
        this.commputerBalls.push(ball);
    }

    private isValidSize() {
        return this.commputerBalls.length < 3;
    }

}

export default Computer;