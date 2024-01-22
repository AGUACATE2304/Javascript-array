/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

export const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
export const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given a string collection return the greter or equal 5 characters string length
 * @param {array} words given words to check.
 * @returns {string} return the words that pass the condition.
 */

export const getLongWords = (words) => {
  const longWords = words.filter((words) => {
    return words.length >= 5;
  });

  return longWords;
};
