import Ball from './Ball';


// > 게임 운영에 필요한 모든 Ball 객체를 들고 있음
// - 플라이웨이트 패턴 적용 
class Balls {
    private static pool: Map<number, Ball> = new Map();

    constructor(begin: number, end: number) {
        for (let i=begin; i<=end; i++) {
            Balls.pool.set(i, new Ball(i));
        }
    }

    public getBall(number: number) {
        return Balls.pool.get(number);
    }
}

export default Balls;