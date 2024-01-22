import { getTotalVoters } from "./getTotalVoters.js";

describe("Given getTotalVoters", () => {
  test("When VOTERS array is provided as an argument, then expected number should be returned", () => {
    //Arrange
    const VOTERS = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];
    
    //Act
    const EXPECTED_RESULT = 7;
    const totalVoters = getTotalVoters(VOTERS);

    //Assert
    expect(totalVoters).toBeDefined();
    expect(totalVoters).toBe(EXPECTED_RESULT);
  });
});
