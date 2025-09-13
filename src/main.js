import "./js/mode";
import { getdata } from "./js/request";
import { updateUI } from "./js/updateUI";
import "./style.css";

let url = "all?fields=name,flags,capital";
const template = document.getElementById("template");
const containerEl = document.querySelector(".main-container");

getdata(url)
  .then((data) => {
    updateUI(data, template, containerEl);
  })
  .catch((error) => {
    console.log(error);
  });
