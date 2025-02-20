
const InputView = {
    // 입력값 요청 메시지 출력 
    printAskNumber : () => {
        return '숫자를 입력해주세요 :';
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

        // 2. 길이가 3인지 확인
        if (input.length > 3) {
            throw new Error('3개보다 많은 숫자를 입력할 수 없습니다.');
        }


        

        const numbers = parseInt(input, 10);
        return numbers;
    }
}

export default InputView;