import Balls from '../../../src/domain/Balls';

describe('게임 운영에 필요한 모든 볼 객체를 저장하고 있는 객체 단위 테스트', () => {

    let sut : Balls;

    beforeAll(() => {
        sut = new Balls(1, 9);
    })

    // 1. 성공적으로 인스턴스를 생성한 경우
    test('인스턴스 생성시 시작과 끝을 각각 1과 9로 지정하여 성공적으로 생성한다.', () => {
        const balls = new Balls(1, 9);
        expect(balls).toBeInstanceOf(Balls);
    })


    // 2. 클라이언트가 begin과 end에 포함된 숫자에 대한 Ball 객체를 요구했을 때, 해당 Ball 객체를 반환해준다.
    test('클라이언트가 begin과 end에 포함된 숫자에 대한 Ball 객체를 요구했을 때, 해당 Ball 객체를 반환해준다.', () => {
        const ball = 
    })

})