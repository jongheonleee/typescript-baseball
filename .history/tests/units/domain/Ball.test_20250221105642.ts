import Ball from '../../../src/domain/Ball';

describe('사용자가 입력한 숫자 한 개에 대한 볼 객체 단위 테스트', () => {

    // 1. 성공적으로 인스턴스를 생성한 경우
    test('사용자가 입력한 숫자가 1~9에 속한 경우, 성공적으로 Ball 인스턴스를 생성한다.', () => {
        const ball = new Ball(7);
        expect(ball).toBeInstanceOf(Ball);
    })
    
    // 2. 1~9 이외의 값이 입력된 경우, 예외가 발생한다.
    test('사용자가 입력한 숫자가 1~9 이외의 값이면 예외가 발생한다.', () => {
        expect(() => new Ball(0)).toThrow(Error);
        expect(() => new Ball(0)).toThrow('숫자 1~9까지의 범위에 속한 숫자만 허용됩니다.');
    })

    // 3. 전달받은 Ball 객체와 현재 Ball 객체가 일치하면 true를 반환한다.
    test('전달받은 Ball 객체와 현재 Ball 객체가 일치하면 true를 반환한다.', () => {
        const ball = new Ball(7);
        const other = ball;

        expect(ball.equals(other)).toBe(true);
    })

    // 4. 전달받은 Ball 객체와 현재 Ball 객체가 같은 타입임면서 값이 같은 경우에도 true를 반환한다.
    test('전달받은 Ball 객체와 현재 Ball 객체가 같은 타입임면서 값이 같은 경우에도 true를 반환한다.', () => {
        const ball = new Ball(7);
        const other = new Ball(7);

        expect(ball.equals(other)).toBe(true);
    })

    // 5. 전달받은 Ball 객체와 현재 Ball 객체가 같은 타입이지만 값이 다른 경우에는 false를 반환한다.
    test('전달받은 Ball 객체와 현재 Ball 객체가 같은 타입이지만 값이 다른 경우에는 false를 반환한다.', () => {
        const ball = new Ball(7);
        const other = new Ball(8);

        expect(ball.equals(other)).toBe(false);
    })

    // 6. 전달받은 Object 객체와 현재 Ball 객체가 서로 다른 타입인 경우 false를 반환한다.
    test('전달받은 Object 객체와 현재 Ball 객체가 서로 다른 타입인 경우 false를 반환한다.', () => {
        const ball = new Ball(7);
        const other = { number: 7 };

        expect(ball.equals(other)).toBe(false);
    })
})