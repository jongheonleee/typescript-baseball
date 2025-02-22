import State, { getInstance } from "../../../src/domain/State";
import Nothing from '../../../src/domain/State';

describe('사용자 입력값에 대한 결과를 담고있는 객체 단위 테스트', () => {
    // 1. 사용자의 결과에 따른 알맞은 객체를 생성하며 피드백 문구를 반환한다.
    describe('사용자의 결과에 따른 알맞은 객체를 생성하며 피드백 문구를 반환한다.', () => {
        test.each([
            [0, 0, '낫싱'],
            [1, 0, '1볼'],
            [2, 0, '2볼'],
            [3, 0, '3볼'],
            [0, 1, '1스트라이크'],
            [1, 1, '1볼 1스트라이크'],
            [2, 1, '2볼 1스트라이크'],
            [0, 2, '2스트라이크'],
            [1, 2, '1볼 2스트라이크'],
            [0, 3, '3스트라이크']
        ]) ('ball : %i, strike : %i => %i}', (ball, strike, expected) => {
            const result = getInstance(ball, strike);
            expect(result.getCurrentState()).toBe(expected);
        })
    })
})