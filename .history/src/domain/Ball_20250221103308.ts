class Ball {

    private number: number;

    constructor(number: number) {
        if (!Ball.isValidRange(number)) {
            throw new Error('숫자 1~9까지의 범위에 속한 숫자만 허용됩니다.');
        }
        this.number = number;
    }

    private static isValidRange(number:number) {
        return 1 <= number && number <= 9;
    }
}

export default Ball;