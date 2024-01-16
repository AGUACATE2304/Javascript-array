import { extendUsersSettings } from "./extendUsersSettings.js";

describe("Given function extendUsersSettings...", () => {
  test(
    "When array of users has properties missing." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const EXPECTED_RESULT = [
        {
          email: "lindsay.ferguson@reqres.in",
          firstName: "Lindsay",
          lastName: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
          id: 0,
          isEnabled: true,
        },
        {
          email: "michael.lawson@reqres.in",
          firstName: "Michael",
          lastName: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
          id: 1,
          isEnabled: true,
        },
        {
          email: "tobias.funke@reqres.in",
          firstName: "Tobias",
          lastName: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
          id: 2,
          isEnabled: true,
        },
      ];
      //Act
      const result = extendUsersSettings();
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(EXPECTED_RESULT);
    },
  );
});
