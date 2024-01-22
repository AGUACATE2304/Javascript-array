/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

/**
 * Capitalize a string from a given string array and return to an array
 * @param {array} name name to capitalize
 * @returns {string} capitalized name
 */

export const capitalizeMates = function () {
  const mapedNames = MATES.map((name) => {
    const firstLetterWord = `${name.charAt(0).toUpperCase()}`;
    const restWord = `${name.slice(1).toLowerCase()}`;

    const capitalizedName = `${firstLetterWord}${restWord}`;

    return capitalizedName;
  });

  return mapedNames;
};
