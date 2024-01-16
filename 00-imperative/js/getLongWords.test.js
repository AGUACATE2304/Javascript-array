import { getLongWords } from "./getLongWords.js";

describe("Given function getLongWords...", () => {
  test("When array equals to: ['Java', 'C++', 'JavaScript', 'C#', 'TypeScript'] .Then expected value should be returned", () => {
    //Arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    //Act
    const result = getLongWords(LANGUAGES);

    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });

  test("When array equals to: ['John', 'George', 'Paul', 'Ringo'].Then expected value should be returned", () => {
    //Arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const EXPECTED_RESULT = ["George", "Ringo"];

    //Act
    const result = getLongWords(BEATLES);

    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
