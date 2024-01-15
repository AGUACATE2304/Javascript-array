/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

export const sumNumbersFromInitialValue = (initialNumber) => {
  const numbersLength = NUMBERS.length;

  let sumResult = initialNumber;

  for (let index = 0; index < numbersLength; index++) {
    sumResult += NUMBERS[index];
  }

  return sumResult;
};