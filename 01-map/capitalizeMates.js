/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = function () {
  const mapedNames = MATES.map((name) => {
    const capitalizedName = `${name.charAt(0).toUpperCase()}${name
      .slice(1)
      .toLowerCase()}`;
    return capitalizedName;
  });
  return mapedNames;
};
