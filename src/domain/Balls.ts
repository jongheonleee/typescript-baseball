import Ball from './Ball';


// > 게임 운영에 필요한 모든 Ball 객체를 들고 있음
// - 플라이웨이트 패턴 적용 
class Balls {
    private begin: number;
    private end: number;
    private static pool: Map<number, Ball> = new Map();

    constructor(begin: number, end: number) {
        this.begin = begin;
        this.end = end;
        for (let i=begin; i<=end; i++) {
            Balls.pool.set(i, new Ball(i));
        }
    }

    public getBall(number: number) {
        if (!this.isValidRange(number)) {
            throw new Error(`${this.begin}과 ${this.end} 범위에 속한 숫자만 입력해야합니다.`);
        }
        
        return Balls.pool.get(number);
    }

    private isValidRange(number: number) {
        return this.begin <= number && number <= this.end;
    }
}

export default Balls;