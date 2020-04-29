export const getHelpDetails = () => {
  let localStorage = window.localStorage;
  let location = localStorage.getItem("location");
  let incidentPhoto = localStorage.getItem("incidentPhoto");
  let isLocationSubmitted = localStorage.getItem("isLocationSubmitted");

  const data = {
    location: location !== undefined ? location : "",
    incidentPhoto,
    isLocationSubmitted: isLocationSubmitted === "true" ? true : false,
  };
  return data;
};
