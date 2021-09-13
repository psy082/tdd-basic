import { calculateSumOfSquares, calculateAverage, calculateSum } from '../src/variance';

describe('variance', () => {
    describe('calculateSumOfSquares', () => {
        it.each`
            source | expected
            ${[1, 2]} | ${0.5}
            ${[1, 2, 3]} | ${2}
            ${[1, 2, 3, 4]} | ${5}
        `('returns $expected as a variance of $source', ({ source, expected }) => {
            const actual = calculateSumOfSquares(source);
            expect(actual).toBe(expected);
        })
    })

    describe('calculateAverage', () => {
        it.each`
            source | expected
            ${[1, 2]} | ${1.5}
            ${[1, 2, 3]} | ${2}
            ${[1, 2, 3, 4]} | ${2.5}
        `('returns $expected as a average of $source', ({ source, expected }) => {
            const actual = calculateAverage(source);
            expect(actual).toBe(expected);
        })
    })

    describe('calculateSum', () => {
        it.each`
            source | expected
            ${[1, 2]} | ${3}
            ${[1, 2, 3]} | ${6}
            ${[1, 2, 3, 4]} | ${10}
        `('returns $expected as a sum of $source', ({ source, expected }) => {
            const actual = calculateSum(source);
            expect(actual).toBe(expected);
        })
    })
})
