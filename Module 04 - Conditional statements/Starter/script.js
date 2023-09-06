//********* Module 4 Starting Script ***********/
//#region File Setup
// ! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS REGION ! \\
import { mode, txt, streetLight, square, changeMode } from "./assistive_script.js";
// ! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS REGION ! \\
//#endregion

//Avaliable animationName(s): "upper", "downer", "dizzy", "stutterstep", "superslow"

let light = "off";

function redLight() {
  changeLightTo();
  square.style.animationPlayState = "paused";
};

function changeLight() {
  changeLightTo();
  square.style.animationPlayState = "running";
};

function changeLightTo() {
  let check = confirm(`The light is currently '${currLight}'.\n Are you sure you'd like to change it?`)
  if (check == true) {
    light = prompt("Please enter the color you'd like to change the light to.").trim();
    light = light.toLowerCase();
    switch (light) {
      case currLight:
        alert("The light is already this color.");
        break;
      case "off":
        streetLight.style.backgroundColor = "black";
        currLight = light;
        square.style.animationPlayState = "paused";
        break;
      case "blue":
        streetLight.style.backgroundColor = light;
        currLight = light;
        square.style.animationDirection = "reverse";
        break;
      case "green":
        console.log(`Changing light from ${currLight} to ${light}...`);
        currLight = light;
        streetLight.style.backgroundColor = light;
        break;
      case "red":
        console.log(`Changing light from ${currLight} to ${light}...`);
        currLight = light;
        streetLight.style.backgroundColor = light;
        break;
      case null:
        alert("No color was entered. Please try again.");
        break;
      default:
        alert("That is not one of the color options. Please try again");
        break;
    };
    console.log(currLight);
  };
};

