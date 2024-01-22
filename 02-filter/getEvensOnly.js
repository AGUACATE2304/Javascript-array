/**
 * Given COUNTERS array, define function 'getEvensOnly' to return a new array that only includes the even numbers.
 *
 * expected: [ 2, 12, 42, 28 ]
 */

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

/**
 * Giveen number array, return a new array that only includes the even numbers.
 * @param {array} counters Given numbers to check.
 * @returns {number} Returns even numbers.
 */
export const getEvensOnly = (counters) => {
  const evenNumbers = counters.filter((counter) => counter % 2 == 0);

  return evenNumbers;
};
