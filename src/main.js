import "./js/mode";
import { getdata } from "./js/request";
import { updateUI } from "./js/updateUI";
import "./js/detail";
import "./style.css";

let url =
  "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";
// const template = document.getElementById("template");

getdata(url)
  .then((data) => {
    updateUI(data);
  })
  .catch((error) => {
    console.log(error);
  });
