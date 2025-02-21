import Ball from './Ball';


// > 게임 운영에 필요한 모든 Ball 객체를 들고 있음
// 애플리케이션 운영에 쓰이는 객체 통합 관리, 메모리 효율적 사용 도모(Flyweight Pattern)
export default class Balls {
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

    public getBall(number: number) : Ball {
        if (!this.isValidRange(number)) {
            throw new Error(`${this.begin}과 ${this.end} 범위에 속한 숫자만 입력해야합니다.`);
        }
        
        return Balls.pool.get(number)!;
    }

    private isValidRange(number: number) {
        return this.begin <= number && number <= this.end;
    }
}
