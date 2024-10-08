"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

function opText(){
  texts[locale].texts.forEach(element => {
    console.log(element);
    document.querySelector(element.location).textContent=element.text
  });
}

opText();

let sprog =document.querySelector(".lang");

sprog.addEventListener("change",(event) =>{
  locale = event.target.value;
  opText();
});