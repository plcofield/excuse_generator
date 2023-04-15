/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
let pronoun = ["a", "the", "that"];
let subject = ["car","Jill","Billy","Cat"];
let action = [ "ran","skip","hop","dance"];
let item = ["pillow","jacket","hat","shoe"];
let place = ["the sun","the moon","the star"];

let proIndex = Math.floor(Math.random()) * pronoun.length;
let subjectIndex = Math.floor(Math.random()) * subject.length;
let actionIndex= Math.floor(Math.random()) * action.length;
let itemIndex = Math.floor(Math.random()) * item.length;
let placeIndex = Math.floor(Math.random()) * place.length;

return(
  pronoun[proIndex] + " " +
  subject[subjectIndex] + " " +
  action[actionIndex] + " " +
  item[itemIndex] + " " +
  place[placeIndex]

)

}