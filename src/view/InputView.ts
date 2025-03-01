
// > 사용자로부터 입력값을 전달받고 파싱처리를 한다. 
const InputView = {
    // 게임 시작 메시지 
    printGameStart : () => {
        return '숫자 야구 게임을 시작합니다.\n';
    }, 

    // 입력값 요청 메시지 출력 
    printAskNumbers : () => {
        return '숫자를 입력해주세요 : ';
    },

    // 게임 종료/재시작에 대한 입력값을 요구하는 요청 메시지 출력 
    printAskGameEndOrRestart: () => {
        return '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    },

    // 문자열 형태의 숫자를 정수형으로 변환해서 반환
    getNumbers : (input: string) => {
        // 입력값 유효성 검증 

        // 1. 숫자로 이루어져 있는지 확인 
        const patternForNumber = /^[1-9]\d*$/;
        if (!patternForNumber.test(input)) {
            throw new Error('숫자 이외의 값을 입력할 수 없습니다.');
        }

        // 2. 입력값의 길이가 3보다 크면 예외가 발생한다.
        if (input.length > 3) {
            throw new Error('3개보다 많은 숫자를 입력할 수 없습니다.');
        }

        // 3. 입력값의 길이ㅣ가 3보다 작으면 예외가 발생한다.
        if (input.length < 3) {
            throw new Error('3개보다 적은 숫자를 입력할 수 없습니다.');
        }


        

        const numbers = parseInt(input, 10);
        return numbers;
    },

    // 사용자로 부터 게임을 종료/재시작할 건지에 대한 입력값을 요구함
    getAnswer: (answer: string) => {
        const patternForAnswer = /^[01]+$/;
        if (!patternForAnswer.test(answer)) {
            throw new Error('0, 1 이외의 값을 입력할 수 없습니다.');
        }

        const mark = parseInt(answer, 10);
        return mark === 1 ? true : false;
    }
}

export default InputView;