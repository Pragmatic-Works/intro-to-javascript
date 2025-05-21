//********* Module 4 Starting Script ***********/
//#region File Setup
// ! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS REGION ! \\

let mode = "count";
let txt = document.getElementById("starter");
let streetLight = document.getElementById("light");
let startBtn = document.getElementById("start");
let midBtn = document.getElementById("mid");
let finalBtn = document.getElementById("final");
let square = document.getElementById("square");

function changeMode(mode) {
  switch (mode) {
    case "count":
      txt.innerText = "Let's do it!";

      streetLight.classList.remove("hidden");
      square.classList.remove("hidden");
      square.style.animationPlayState = "paused";

      startBtn.setAttribute("onClick", "changeMode('move')");
      startBtn.innerText = "Change it back!";

      midBtn.setAttribute("onClick", "redLight()");
      midBtn.innerText = "Red Light!";

      finalBtn.setAttribute("onClick", "greenLight()");
      finalBtn.innerText = "Green Light!";

      mode = "move";
      break;
    case "move":
      txt.innerText = "Change me!";

      streetLight.classList.add("hidden");
      square.classList.add("hidden");

      startBtn.setAttribute("onClick", "displayAge()");
      startBtn.innerText = "Click Me!";

      midBtn.setAttribute("onClick", "raiseAge()");
      midBtn.innerText = "Click Me to Add More!";

      finalBtn.setAttribute("onClick", "lowerAge()");
      finalBtn.innerText = "Click Me to Add Less!";

      mode = "count";
      break;
  };
  return mode;
};

// ! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS REGION ! \\
//#endregion
changeMode(mode);
//Avaliable animationName(s): "upper", "downer", "dizzy", "stutterstep", "superslow"

let light = "off";
let currLight = "off";

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

