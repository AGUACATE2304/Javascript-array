/**
 * Given 'VOTERS' array, define function 'getTotalVoters' to return a count of how many people voted.
 *
 * expected: 7
 */

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

/**
 * Given a list of voters, check them and return a number of people that voted.
 * @param {array} VOTERS Given a string of people who can vote.
 * @returns {number} Number of people who voted.
 */

export const getTotalVoters = function (VOTERS) {
  return VOTERS.reduce((acc, voter) => {
    const trueVoter = voter.voted === true ? 1 : 0;
    return acc + trueVoter;
  }, 0);
};
