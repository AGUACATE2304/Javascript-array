/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

export const feedMonkeys = function (fruit) {
  const monkeys = [];
  const collectionLenth = MONKEYS.length;

  for (let index = 0; index < collectionLenth; index++) {
    const monkey = `${MONKEYS[index]} ${fruit}`;

    monkeys.push(monkey);
  }

  return monkeys;
};
