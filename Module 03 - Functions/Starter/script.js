//****************************************MODULE 3 STARTING SCRIPT****************************************//
//#region File Setup
// ! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS REGION ! \\
let mode = "count";
let txt = document.getElementById("text");
let streetLight = document.getElementById("light");
let startBtn = document.getElementById("start");
let midBtn = document.getElementById("mid");
let finalBtn = document.getElementById("final");
let square = document.getElementById("player");

function changeLightTo(colorToChangeTo) {
  let validate = colorToChangeTo.toLowerCase();
  if (validate == light) {
    alert("The light is already this color.");
    return;
  } else {
    let check = confirm(`The light is currently '${light}'.\n Are you sure you'd like to change it?`)
    if (check == true) {
      let test = prompt("Please enter the color of the current light.").trim();
      if (test == "off" || test == "Off" || test == "OFF") {
        console.log(`Turning on light...`);
        light = "red";
        streetLight.style.backgroundColor = light;
      } else {
        switch (colorToChangeTo) {
          case "off":
          case "OFF":
          case "Off":
          case "green":
          case "GREEN":
          case "Green":
            console.log(`Changing light from ${test} to ${colorToChangeTo}...`);
            light = "green";
            streetLight.style.backgroundColor = light;
            break;
          case "red":
          case "RED":
          case "Red":
            console.log(`Changing light from ${test} to ${colorToChangeTo}...`);
            light = "red";
            streetLight.style.backgroundColor = light;
            break;
          case null:
            alert("No value was entered. Please try again.");
            break;
          default:
            alert("That is not one of the color options. Please try again");
            break;
        };
        console.log(colorToChangeTo);
      };
    };
  };
};

function changeMode(mode) {
  switch (mode) {
    case "count":
      txt.innerText = "Let's do it!";

      streetLight.classList.remove("hidden");
      square.classList.remove("hidden");

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

/*
ToDo: Create a variable with an integer value.
  > age
ToDo: Create a function to display the age of an individual. 
  > displayAge
ToDo: Create a function that logs to the console.
  > Logs with a specific message based on the clicked button
ToDo: Create a function to add 1 to the age, and display the result. 
  > raiseAge()
ToDo: Create a function to remove 1 from the age, then display that new result.
  > lowerAge()
*/
