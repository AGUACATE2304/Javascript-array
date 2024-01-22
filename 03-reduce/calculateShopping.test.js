import { calculateShopping } from "./calculateShopping.js";

describe("Given calculateShopping", () => {
  test("When WISHES array is provided as an argument. Then expected number should be returned", () => {
    //Arrange
    const WISHES = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
    ];

    //Act
    const EXPECTED_RESULT = 227005;
    const totalPrice = calculateShopping(WISHES);

    //Assert
    expect(totalPrice).toBeDefined();
    expect(totalPrice).toBe(EXPECTED_RESULT);
  });
});
