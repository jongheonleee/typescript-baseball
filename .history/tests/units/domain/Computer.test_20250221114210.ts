import Computer from "../../../src/domain/Computer";
import Ball from "../../../src/domain/Ball";

describe('컴퓨터 역할을 담당하는 객체 단위 테스트', () => {

    let sut : Computer;

    beforeAll(() => {
        sut = new Computer(1, 9);
    })

    // 1. 성공적으로 인스턴스를 생성한다.
    test('인스턴스 생성시 begin, end를 1, 9로 지정하여 성공적으로 생성한다.', () => {
        const computer = new Computer(1, 9);
        expect(computer).toBeInstanceOf(Computer);
    })

    // 2. begin부터 end까지의 특정 난수를 생성한다.
    test('begin부터 end까지의 특정 난수를 생성한다.', () => {
        for (let i=0; i<10; i++) {
            const number = sut.getRandomNumber();
            expect(number).toBeGreaterThanOrEqual(1);
            expect(number).toBeLessThanOrEqual(9);
        }
    })

    // 3. 새로운 ball을 성공적으로 등록한다
    test('새로운 ball을 성공적으로 등록한다.', () => {
        const ball = new Ball(7);
        sut.addBall(ball);
    })

    // 4. 사이즈가 3이 넘어가버리면 예외를 발생시킨다.
    test('새로운 ball을 등록할 때, 사이즈가 3이 넘어가버리면 예외를 발생시킨다.', () => {
        const balls = new Array<Ball>();
        for (let i=0; i<3; i++) {
            balls.push(new Ball(i+1));
        }
        
        sut.clearBalls();
        for (let i=0; i<3; i++) {
            sut.addBall(balls[i]);
        }

        const ball = new Ball(4);
        expect(() => sut.addBall(ball)).toThrow(Error);
        expect(() => sut.addBall(ball)).toThrow('볼을 이미 3개 등록하였습니다.');
    })
})