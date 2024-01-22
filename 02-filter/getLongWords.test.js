import { BEATLES, LANGUAGES, getLongWords } from "./getLongWords.js";

describe("Given a words", () => {
  test("When words are longer or equal to 5 characters lentgh", () => {
    //arrange
    const EXPECTED_RESULT_LANGUAGES = ["JavaScript", "TypeScript"];
    const EXPECTED_RESULT_BEATLES = ["George", "Ringo"];

    //act
    const resultLanguages = getLongWords(LANGUAGES);
    const resultBeatles = getLongWords(BEATLES);

    //assert
    expect(resultLanguages).toBeDefined();
    expect(resultBeatles).toBeDefined();

    expect(resultLanguages).toEqual(EXPECTED_RESULT_LANGUAGES);
    expect(resultBeatles).toEqual(EXPECTED_RESULT_BEATLES);
  });
});
