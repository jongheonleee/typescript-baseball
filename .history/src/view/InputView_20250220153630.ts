
const InputView = {
    // 입력값 요청 메시지 출력 
    printAskNumber : () => {
        return '숫자를 입력해주세요 :';
    },

    // 게임 종료/재시작에 대한 입력값을 요구하는 요청 메시지 출력 
    printAskGameEndOrRestart: () => {
        return '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    }
}

export default InputView;