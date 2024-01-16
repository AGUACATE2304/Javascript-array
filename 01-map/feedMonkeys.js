/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Feed all monkeys with the same fruit ( add same fruit to each monkey )
 * @param {string} fruit that will be probided to the monkey
 * @returns {string} string with the corresponding monkey withe his fruit
 */

export const feedMonkeys = function (fruit) {
  const mappedArray = MONKEYS.map((monkey) => {
    const feedMonkeys = `${monkey} ${fruit}`;

    return feedMonkeys;
  });

  return mappedArray;
};
