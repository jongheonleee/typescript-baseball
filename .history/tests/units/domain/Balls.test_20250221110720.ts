import Balls from '../../../src/domain/Balls';

describe('게임 운영에 필요한 모든 볼 객체를 저장하고 있는 객체 단위 테스트', () => {

    // 1. 성공적으로 인스턴스를 생성한 경우
    test('인스턴스 생성시 시작과 끝을 각각 1과 9로 지정하여 성공적으로 생성한다.', () => {
        const balls = new Balls(1, 9);
        expect(balls).toBeInstanceOf(Balls);
    })

})