import "./js/mode";
import { getdata } from "./js/request";
import { updateUI } from "./js/updateUI";
import "./style.css";

let url = "all?fields=name,capital,region,population,flags";
// const template = document.getElementById("template");

getdata(url)
  .then((data) => {
    updateUI(data);
  })
  .catch((error) => {
    console.log(error);
  });
