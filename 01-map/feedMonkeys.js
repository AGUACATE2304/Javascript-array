/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = function (fruit) {
  const mappedArray = MONKEYS.map((monkey) => {
    const feedMonkeys = `${monkey} ${fruit}`;
    return feedMonkeys;
  });

  return mappedArray;
};
