import { doesNotThrow } from "assert";
import PlayerBalls from "../../../src/domain/PlayerBalls";

describe('사용자가 입력한 숫자에 대한 ball들을 들고 있는 객체에 대한 단위 테스트', () => {
    // 1. 성공적으로 인스턴스를 생성한다.
    test('성공적으로 인스턴스를 생성한다.', () => {
        doesNotThrow(() => new PlayerBalls());
    })
})