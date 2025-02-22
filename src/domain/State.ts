// 상태 인터페이스
export default interface State {
    getCurrentState() : string,
    isSame(ball:number, strike:number) : boolean
    isThreeStrikeOut() : boolean;
}

// 낫싱 (0볼 0스트라이크)
class Nothing implements State {
    constructor(
        private ball = 0,
        private strike = 0,
    ){}

    public getCurrentState(): string {
        return '낫싱';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 원볼 
class OneBall implements State {
    constructor(
        private ball = 1,
        private strike = 0,
    ){}

    public getCurrentState(): string {
        return '1볼';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 투볼
class TwoBall implements State {
    constructor(
        private ball = 2,
        private strike = 0,
    ){}

    public getCurrentState(): string {
        return '2볼';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 쓰리볼
class ThreeBall implements State {
    constructor(
        private ball = 3,
        private strike = 0,
    ){}

    public getCurrentState(): string {
        return '3볼';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}


// 원스트라이크(0볼 1스트라이크)
class OneStrike implements State {
    constructor(
        private ball = 0,
        private strike = 1,
    ){}

    public getCurrentState(): string {
        return '1스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 원스트라이크원볼(1볼 1스트라이크)
class OneStrikeOneBall implements State {
    constructor(
        private ball = 1,
        private strike = 1,
    ){}

    public getCurrentState(): string {
        return '1볼 1스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 원스트라이크투볼(2볼 1스트라이크)
class OneStrikeTwoBall implements State {
    constructor(
        private ball = 2,
        private strike = 1,
    ){}

    public getCurrentState(): string {
        return '2볼 1스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 투스트라이크(0볼 2스트라이크)
class TwoStrike implements State {
    constructor(
        private ball = 0,
        private strike = 2,
    ){}

    public getCurrentState(): string {
        return '2스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 투스트라이크원볼(1볼 2스트라이크)
class TwoStrikeOneBall implements State {
    constructor(
        private ball = 1,
        private strike = 2,
    ){}

    public getCurrentState(): string {
        return '1볼 2스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return false;
    }
}

// 쓰리스트라이크
class ThreeStrike implements State {
    constructor(
        private ball = 0,
        private strike = 3,
    ){}

    public getCurrentState(): string {
        return '3스트라이크';
    }

    public isSame(ball:number, strike:number) : boolean {
        return this.ball === ball && this.strike === strike;
    }

    public isThreeStrikeOut(): boolean {
        return true;
    }
}


// 전체 상태 등록 
const states: Array<State> = [
    new Nothing(),
    new OneBall(),
    new TwoBall(),
    new ThreeBall(),
    new OneStrike(),
    new OneStrikeOneBall(),
    new OneStrikeTwoBall(),
    new TwoStrike(),
    new TwoStrikeOneBall(),
    new ThreeStrike()
];

// 특정 상태 조회 
export const getInstance = (ball:number, strike:number) : State => {
    return states.find((state) => state.isSame(ball, strike) === true)!;
}