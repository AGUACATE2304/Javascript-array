/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 *  Given an array, filter the words, return string 5 characters or fewer in length
 * @param {array} countries given string to check
 * @returns {string} return string fewer or equal number of characters 5
 */

export const extractCountriesWithFiveCharactersOrFewer = (countries) => {
  const filteredCountries = countries.filter((country) => country.length <= 5);

  return filteredCountries;
};
