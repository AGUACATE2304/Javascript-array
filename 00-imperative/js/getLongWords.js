/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Return an array with only words greater than or equal to 5
 * @param {array} words words that will be provided to 'getLongWords'
 * @returns {string} array with only words that pass the condition
 */

export const getLongWords = (WORDS) => {
  const wordsList = [];

  const wordsLength = WORDS.length;

  for (let index = 0; index < wordsLength; index++) {
    const currentWord = WORDS[index];

    const currentWordLength = currentWord.length;

    if (currentWordLength >= 5) {
      wordsList.push(currentWord);
    }
  }

  return wordsList;
};
