/**
 * Author: Chandana
 * Local storage API: getUserData
 * Description: To check whether the user has logged in
 */
export const getUserData = () => {
  let localStorage = window.localStorage;
  let isLoggedin = localStorage.getItem("isLoggedin");
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  let emergencyContact = localStorage.getItem("emergencyContact");
  let email = localStorage.getItem("email");
  let bloodGroup = localStorage.getItem("bloodGroup");
  const data = {
    isLoggedin: isLoggedin === "true" ? true : false,
    username: username !== undefined ? username : " ",
    password: username !== undefined ? password : " ",
    emergencyContact: username !== undefined ? emergencyContact : " ",
    email: username !== undefined ? email : " ",
    bloodGroup: username !== undefined ? bloodGroup : " ",
  };
  return data;
};
