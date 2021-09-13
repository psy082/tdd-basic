import sut from "../src/text_refiner";

describe('sut', () => {
    it.each`
        source | expected
        ${"hello  world"} | ${"hello world"}
        ${"hello   world"} | ${"hello world"}
        ${"hello    world"} | ${"hello world"}
    `('transforms "$source to $expected', ({ source, expected }) => {
        const actual = sut(source);
        expect(actual).toBe(expected);
    });
});