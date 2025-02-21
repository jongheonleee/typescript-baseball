import Ball from '../../../src/domain/Ball';

describe('사용자가 입력한 숫자 한 개에 대한 볼 객체 단위 테스트', () => {

    test('사용자가 입력한 숫자가 1~9에 속한 경우, 성공적으로 Ball 인스턴스를 생성한다.', () => {
        const ball = new Ball(7);
        expect(ball).toBeInstanceOf(Ball);
    })
})