/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

/**
 * Return a number that is the sum of all the numbers from an initial value.
 * @param {array} numbers given array of numbers to sum up from initial value.
 * @param {number} initialValue given initial value to sum up.
 * @returns Return a number that is the sum of all the numbers.
 */

export const sumNumbersFromInitialValue = function (numbers, initialValue) {
  const sumResult = numbers.reduce((total, number) => {
    return total + number;
  }, initialValue);

  return sumResult;
};
