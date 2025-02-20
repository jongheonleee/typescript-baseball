const OutputView = {

    // 사용자에게 게임 시작 문구를 출력함 
    printGameStart : () => {
        return '숫자 야구 게임을 시작합니다.';
    },


    // 정답을 맞춘 경우 종료 문구 출력함
    printGameOver : () => {
        return '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    }




}

export default OutputView;