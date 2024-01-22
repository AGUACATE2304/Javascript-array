/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

/**
 * Transform a given number to a string
 * @param {array} seconds given in type number
 * @returns {string} return seconds in type string
 */

export const transformSecondsToWords = () => {
  const secondAsWordArray = SECONDS.map((second) => {
    return second.toString();
  });
  return secondAsWordArray;
};
