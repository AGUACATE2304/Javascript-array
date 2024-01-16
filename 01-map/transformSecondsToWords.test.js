import { transformSecondsToWords } from "./transformSecondsToWords.js";

describe("Given function transformSecondsToWords...", () => {
  test(
    "When array of seconds is entered." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const EXPECTED_RESULT = ["2", "5", "100"];
      //Act
      const result = transformSecondsToWords();
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(EXPECTED_RESULT);
    },
  );
});
