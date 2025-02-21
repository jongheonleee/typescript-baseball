import PlayerBalls from '../../../src/domain/PlayerBalls';
import GameService from '../../../src/service/GameService';
import Balls from '../../../src/domain/Balls';
import Computer from '../../../src/domain/Computer';
import { doesNotThrow } from 'assert';
import { error } from 'console';

describe('게임 운영에서의 비즈니스 로직을 담당하는 객체 단위 테스트', () => {
    
    let sut : GameService;

    beforeEach(() => {
        sut = new GameService(
            new Balls(1, 9),
            new PlayerBalls(),
            new Computer(1, 9)
        );
    })
    
    // 1. 성공적으로 인스턴스를 생성한다
    test('성공적으로 인스턴스를 생성한다', () => {
        doesNotThrow(() => new GameService(
            new Balls(1, 9),
            new PlayerBalls(),
            new Computer(1, 9)
        ));
    })

    // 2. 사용자의 입력값이 1~9 이내로 이루어진 3개의 숫자라면, 성공적으로 PlayerBalls를 생성한다.
    test('사용자의 입력값이 1~9 이내로 이루어진 3개의 숫자라면, 성공적으로 PlayerBalls를 생성한다.', () => {
        doesNotThrow(() => sut.createPlayerBalls('123'));
    })

    // 3. 사용자의 입력값이 유효하지 않다면, 예외가 발생한다.
    test('사용자의 입력값이 유효하지 않다면, 예외가 발생한다.', () => {
        expect(() => sut.createPlayerBalls('1#0')).toThrow(Error);
    })

    // 4. 성공적으로 Computer 인스턴스를 생성한다.
    test('성공적으로 Computer 인스턴스를 생성한다.', () => {
        doesNotThrow(() => sut.createComputerBalls());
    })
})