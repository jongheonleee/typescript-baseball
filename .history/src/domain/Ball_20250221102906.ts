class Ball {

    constructor(
        private number:number
    ) {}

    isValidRange(number:number) {
        return 1 <= number && number <= 9;
    }
}

export default Ball;