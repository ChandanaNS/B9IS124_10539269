/**
 * Author: Chandana
 * Local storage API: setUserData
 * Description: To set values to local storage when the user is logged in
 */

export const setUserData = (
  isLoggedin: boolean,
  username: string,
  password: string,
  emergencyContact: string,
  email: string,
  bloodGroup: string
) => {
  let localStorage = window.localStorage;
  localStorage.setItem("isLoggedin", "" + isLoggedin);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("emergencyContact", emergencyContact);
  localStorage.setItem("email", email);
  localStorage.setItem("bloodGroup", bloodGroup);
};
