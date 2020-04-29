export const setHelpDetails = (
  location: object,
  incidentPhoto: string,
  isLocationSubmitted: boolean
) => {
  let localStorage = window.localStorage;
  localStorage.setItem("location", "" + location);
  localStorage.setItem("incidentPhoto", incidentPhoto);
  localStorage.setItem("isLocationSubmitted", "" + isLocationSubmitted);
};
