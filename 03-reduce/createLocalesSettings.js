/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "US": {id: 1, enabled: false},
 *  "EN": {id: 2, enabled: false},
 *  "EN": {id: 3, enabled: false},
 *  "EN": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

/**
 * Given an array, return an object withe the settings given on the function.
 * @param {array} locales given array to add the settings.
 * @returns {string} returns the array with the settings added.
 */

export const createLocalesSettings = (locales) => {
  const localesSettings = locales.reduce((accumulator, locale, index) => {
    return {
      ...accumulator,
      [locale]: {
        id: index,
        enabled: locale === "EN",
      },
    };
  }, {});

  return localesSettings;
};
