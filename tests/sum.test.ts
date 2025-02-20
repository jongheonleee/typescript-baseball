import { sum } from '../src/sum';

test('1 + 2 should equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 + 7 should equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});