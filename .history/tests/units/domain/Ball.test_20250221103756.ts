import Ball from '../../../src/domain/Ball';

describe('사용자가 입력한 숫자 한 개에 대한 볼 객체 단위 테스트', () => {

    // 1. 성공적으로 인스턴스를 생성한 경우
    test('사용자가 입력한 숫자가 1~9에 속한 경우, 성공적으로 Ball 인스턴스를 생성한다.', () => {
        const ball = new Ball(7);
        expect(ball).toBeInstanceOf(Ball);
    })

    test('사용자가 입력한 숫자가 1~9 이외의 값이면 예외가 발생한다.', () => {
        expect(() => new Ball(0)).toThrow(Error);
        expect(() => new Ball(0)).toThrow('숫자 1~9까지의 범위에 속한 숫자만 허용됩니다.');
    })
})