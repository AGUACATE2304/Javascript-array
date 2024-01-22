import { getWordFromValues } from "./getWordFromValues.js";
describe("Given getWordFromValues", () => {
  test("When VALUES array is given, then expected result should be given", () => {
    //Arragne
    const VALUES = [1, 2, 3];
    const EXPECTED_RESULT = "123";

    //Act
    const numbersWord = getWordFromValues(VALUES);

    //Assert
    expect(numbersWord).toBeDefined();
    expect(numbersWord).toEqual(EXPECTED_RESULT);
  });
});
