import { getdata } from "./request";
import "../style.css";
import { updateDetail } from "./updateUI";
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const country = urlParams.get("country");

const countryUrl = `https://restcountries.com/v3.1/name/${country}`;
getdata(countryUrl)
  .then((data) => {
    updateDetail(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
