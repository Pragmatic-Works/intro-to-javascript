//*****************Module 05 Starter Script*****************//
import { THE_GAME, answer, btn, lbl, guessButton, board, area, row, numGuesses } from "./assistive_file_module5.js"

//#region Module Setup
//! DO NOT CHANGE THE MATERIAL IN THIS SECTION//
const THE_GAME = {
    WORDS: ["try", "fix", "tie", "ram", "pit", "joy"],
};
    var numGuesses = 3;
    let answer = THE_GAME.WORDS[Math.floor(Math.random() * THE_GAME.WORDS.length)];
    console.log(answer);
    let btn = document.getElementById("myButton");
    let lbl = document.getElementById("myLabel");
    let guessButton = document.createElement("button");
    guessButton.setAttribute("id", "guessButton");
    guessButton.setAttribute("onClick", "checkPlayerGuess()");
    guessButton.innerHTML = "Submit Guess!";
//! DO NOT CHANGE THE MATERIAL IN THIS SECTION//    
//#endregion 

/* TASK LIST
ToDo: Create your variables
    - A variable to 
ToDo: Create functions
    - Create a Function we can link the game progress to when we're finished,
      and use to check that our code if functioning. 
    - Create a function to create the 3x3 board we'll play on
    - Create three functions to deal with:
        - The delete key
        - The enter key
        - Letter key presses
    - Create a function to check if the player's guess was right, close, or wrong
        - Create another function to return the result
ToDo: Plug Everything together
    - Plug the necessary functions into the event listener segment
    - Plug the necessary functions into the play button
*/

//! DO NOT MODIFY ANY EXISTING CODE IN THIS SEGMENT//
document.addEventListener("keyup", (e) => {
    let pressedKey = String(e.key);
    let foundKey = pressedKey.match(/[a-z]/gi);

    //ToDo: Create a condition to resolve if all boxes are filled

    if (pressedKey === "Backspace" || pressedKey === "Del") {
        //ToDo: Plug in the function to resolve the Backspace or Delete key press
        return;
    };

    if (pressedKey === "Enter") {
        //ToDo: Plug in the function to resolve when a player hits enter 
        return;
    };

    //If multiple keys are pressed at the same time, or the user pressed a number key, then ignore it 
    if (!foundKey || foundKey.length > 1) {
        return;
    }
    else {
        //ToDo: Plug in the function to resolve with more than one key, or a number key being pressed 
    };

});