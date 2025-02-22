import OutputView  from '../../../src/view/OutputView';


describe('사용자에게 보여줄 출력값을 처리하는 객체 단위 테스트', () => {

    // 1. 사용자에게 게임 시작 문구를 출력한다
    test('사용자에게 게임 시작 문구를 출력한다.', () => {
        expect(OutputView.printGameStart()).toBe('숫자 야구 게임을 시작합니다.');
    })

    // 3. 정답을 맞출 경우 종료 문구를 출력한다. 
    test('정답을 맞출 경우 종료 문구를 출력한다.', () => {
        expect(OutputView.printGameOver()).toBe('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    })

})