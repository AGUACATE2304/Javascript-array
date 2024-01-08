import { feedMonkeys } from "./feedMonkeys";

describe("Given feedmonkeys", () => {
  test("When 🍌 is provided as argument then expected array should be returned ", () => {
    //arrange
    const fruit = "🍌";
    const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    //act
    const monkeys = feedMonkeys(fruit);

    //assert
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  });

  test("When 🍎 is provided as argument then expected array should be returned ", () => {
    //arrange
    const fruit = "🍎";
    const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    //act
    const monkeys = feedMonkeys(fruit);

    //assert
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  });
});
