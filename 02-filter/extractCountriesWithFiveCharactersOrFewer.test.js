import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given function extractCountriesWithFiveCharactersOrFewer...", () => {
  test("When array of countries is entered. Then expected result should be returned", () => {
    //Arrange
    const EXPECTED_RESULT = ["Italy"];

    //Act
    const result = extractCountriesWithFiveCharactersOrFewer(EXPECTED_RESULT);

    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
