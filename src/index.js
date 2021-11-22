import axios from "axios";
import './styles.scss';



const apiurl = "https://api.coindesk.com/v1/bpi/currentprice.json";

const loading = document.querySelector(".loading");
const errors = document.querySelector(".error");
const results = document.querySelector(".result-container");

const coinVal = document.querySelector(".coinVal");

// const searchForCountry = async () => {
//     loading.style.display = "block";
//     errors.textContent = "";
//     try {
//       const response = await axios.get(apiurl);
//       loading.style.display = "none";
//       console.log(response.data);
//       var bitCoinvalue = response.data["bpi"]["USD"]["rate"];
//       recovered.textContent = bitCoinvalue;
//       results.style.display = "block";
//     } catch (error) {
//       loading.style.display = "none";
//       results.style.display = "none";
//       errors.textContent = "We have no data!!.";
//     }
//   };

function getData() {
  loading.style.display = "block";
  //errors.appendChild(document.createTextNode("My new text!"));
  try {
    axios.get(apiurl).then((resp) => {
      console.log(resp.data);
      var bitCoinvalue = resp.data["bpi"]["EUR"]["rate"];
      coinVal.textContent = bitCoinvalue;
    });

    
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getData();
});
