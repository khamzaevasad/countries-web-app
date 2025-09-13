import { getdata } from "./js/request";
import "./style.css";

let url = "all?fields=name,flags,capital";

getdata(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
