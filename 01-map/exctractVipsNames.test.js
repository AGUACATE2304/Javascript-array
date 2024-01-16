import { extractVipsNames } from "./extractVipsNames.js";

describe("Given function extractVipsNames...", () => {
  test(
    "When array of vips has name property." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const EXPECTED_RESULT = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];
      //Act
      const result = extractVipsNames();
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(EXPECTED_RESULT);
    },
  );
});
