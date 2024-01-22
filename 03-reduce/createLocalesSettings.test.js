import { createLocalesSettings } from "./createLocalesSettings.js";

describe("Given function createLocalesSettings...", () => {
  test("When array of locales is entered. Then expected result should be returned", () => {
    //Arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const EXPECTED_RESULT = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    //Act
    const result = createLocalesSettings(LOCALES);

    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
