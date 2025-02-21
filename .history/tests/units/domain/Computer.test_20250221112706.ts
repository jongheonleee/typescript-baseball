import Computer from "../../../src/domain/Computer";

describe('컴퓨터 역할을 담당하는 객체 단위 테스트', () => {
    // 1. 성공적으로 인스턴스를 생성한 경우
    test('인스턴스 생성시 begin, end를 1, 9로 지정하여 성공적으로 생성한다.', () => {
        const computer = new Computer(1, 9);
        expect(computer).toBeInstanceOf(Computer);
    })
})