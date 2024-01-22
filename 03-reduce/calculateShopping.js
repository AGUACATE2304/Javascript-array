/**
 * Given 'WISHES' array, define function 'calculateShopping' to return how much it would cost to just buy everything at once.
 *
 * expected: 227005
 */

const WISHES = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

/**
 * Return how much will be te cost of all the price from an array
 * @param {array} WISHES given collection with price
 * @returns {number} Return the sum of all the prices.
 */

export const calculateShopping = function (WISHES) {
  return WISHES.reduce((totalPrice, wish) => {
    const sumTotalPrice = totalPrice + wish.price;
    return sumTotalPrice;
  }, 0);
};
