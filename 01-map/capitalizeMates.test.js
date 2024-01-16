import { capitalizeMates } from "./capitalizeMates";

describe("Given names", () => {
  test("When returned array expected to be capitalized ", () => {
    const EXPECTED_RESULT = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const capitalized = capitalizeMates();

    expect(capitalized).toBeDefined();
    expect(capitalized).toEqual(EXPECTED_RESULT);
  });
});
