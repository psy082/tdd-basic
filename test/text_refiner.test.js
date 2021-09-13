import { lorem } from 'faker'
import sut from "../src/text_refiner";

describe('sut', () => {
    it.each`
        source | expected
        ${"hello  world"} | ${"hello world"}
        ${"hello   world"} | ${"hello world"}
        ${"hello    world"} | ${"hello world"}
        ${"hello     world"} | ${"hello world"}        
        ${"hello      world"} | ${"hello world"}
        ${"hello       world"} | ${"hello world"}
    `('transforms "$source" to "$expected"', ({ source, expected }) => {
        const actual = sut(source);
        expect(actual).toBe(expected);
    });

    it.each`
        source | expected
        ${"hello\t world"} | ${"hello world"}
        ${"hello \tworld"} | ${"hello world"}
    `('transforms "$source" that contains tab character to "$expected"', ({ source, expected }) => {
        const actual = sut(source);
        expect(actual).toBe(expected);
    });

    describe('given banned word', () => {
        const bannedWord = lorem.word();
        const source = "hello " + bannedWord;
        const expected = "hello " + "*".repeat(bannedWord.length);

        it(`${bannedWord} when invoke sut then it returns ${expected}`, () => {
            const actual = sut(source, { bannedWords: [bannedWord] });
            expect(actual).toBe(expected);
        });
    });
});