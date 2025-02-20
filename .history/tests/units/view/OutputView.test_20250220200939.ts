import OutputView  from '../../../src/view/OutputView';


describe('사용자에게 보여줄 출력값을 처리하는 객체 단위 테스트', () => {

    // 1. 사용자에게 게임 시작 문구를 출력한다
    test('사용자에게 게임 시작 문구를 출력한다.', () => {
        expect(OutputView.printGameStart()).toBe('숫자 야구 게임을 시작합니다.');
    })

    // 2. 사용자에게 'a볼 b스트라이크' 형식으로 피드백 문구를 출력한다.

    // 3. 정답을 맞출 경우 종료 문구를 출력한다. 
    
})