// > 특정 숫자에 대한 볼 객체 
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

    public equals(other:Object) {
        // 참조값이 동일한 경우 true
        if (this === other) return true;

        // 참조값은 동일하지 않지만, 같은 타입이면서 필드값이 동일하면 true
        if (other instanceof Ball) {
            return this.number === other.number;
        }
        
        // 위에 경우에 속하지 않으면 false
        return false;
    }
}

export default Ball;