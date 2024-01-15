import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given function sumNumbersFromInitialValue...", () => {
  test("When number parameter 0. Then expected value should be returned", () => {
    //Arrange
    const numberParameter = 0;
    const EXPECTED_RESULT = 15;
    //Act
    const result = sumNumbersFromInitialValue(numberParameter);
    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
  test("When number parameter 0. Then expected value should be returned", () => {
    //Arrange
    const numberParameter = 10;
    const EXPECTED_RESULT = 25;
    //Act
    const result = sumNumbersFromInitialValue(numberParameter);
    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
