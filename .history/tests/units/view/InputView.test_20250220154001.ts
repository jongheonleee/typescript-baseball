import InputView  from '../../../src/view/InputView';

describe('사용자로부터 입력값 처리하는 객체 단위 테스트', () => {

    // 1. 사용자로부터 입력값을 요구하는 요청 메시지를 반환함
    test('사용자로부터 입력값을 요구하는 요청 메시지를 콘솔에 반환한다.', () => {
        expect(InputView.printAskNumber()).toBe('숫자를 입력해주세요 :');
    })

    // 2. 게임 종료/재시작에 대한 입력값을 요구하는 요청 메시지를 반환함
    test('게임 종료/재시작에 대한 입력값을 요구하는 요청 메시지를 반환한다.', () => {
        expect(InputView.printAskGameEndOrRestart()).toBe('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    })

    // 3. 사용자가 숫자(문자열)를 입력하면 해당 정수형 숫자로 변환해서 반환한다.
    test('사용자가 "123"을 입력하면 정수 123을 반환한다.', () => {
        expect(InputView.getNumbers('123')).toBe(123);
    })

})

