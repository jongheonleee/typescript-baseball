import { doesNotThrow } from 'assert';
import GameController from '../../../src/controller/GameController'

describe('게임 운영을 관장하는 객체 단위 테스트', () => {
    let sut : GameController;

    beforeEach(() => {
        sut = new GameController();
    })


    // 1. 인스턴스를 성공적으로 생성한다
    test('인스턴스를 성공적으로 생성한다.', () => {
        doesNotThrow(() => new GameController());
    })
})