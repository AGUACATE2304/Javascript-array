const USERS = [
  {
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];

/**
 * Define 'extendUsersSettings' to extend users properties
 * Add property 'id' with index value
 * Add property 'isEnabled' as true
 */

/**
 * Given USERS array, define function 'extendUsersSettings' to extend users properties
 *
 * expected: 
 * [{
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    id: 0,
    isEnabled: true
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    id: 1,
    isEnabled: true
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    id: 2,
    isEnabled: true
  },];
 */

/**
 * extend the users settings, given the current settings, adding an id and is enabled propperty
 * @param {array} user name to capitalize
 * @param {number} index from the values array's possition
 * @returns {string} extended users settings
 */

export const extendUsersSettings = () => {
  const mapedUsers = USERS.map((user, index) => {
    return {
      ...user,
      id: index,
      isEnabled: true,
    };
  });

  return mapedUsers;
};
