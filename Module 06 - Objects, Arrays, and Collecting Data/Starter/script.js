//#region Pre-made content
//! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS SECTION \\
var numWrong = 0;
const BOARD = document.getElementById("options");
const SPEAKER = document.getElementById("speaker");

const FEATURES = {
    SKIN_TONES: ["skin-light", "skin-beige", "skin-suede", "skin-tan", "skin-deep", "skin-earth"],
    EYE_COLORS: ["eyes-blue", "eyes-brown", "eyes-green", "eyes-amber", "eyes-heterochromatic", "eyes-grey"],
    HAIR_COLOR: ["bald", "blonde", "ginger", "brown", "blue", "black"],
    HAIR_LENGTH: ["short", "medium", "long", "afro"],
    EXPRESSIONS: ["angry", "happy", "neutral", "sad"]
};

FEATURES.ALL_HAIR = FEATURES.HAIR_LENGTH.flatMap(createHairOptions);
FEATURES.ALL_HAIR.push("bald");

//Get the colors that match the item
function getColorArray(value) {
    return value.includes(hairColor);
};

//Convert the sprite image to the actual image located in features
function getTrueImage(spriteImage) {
    console.log("Correcting image!");
    let correctImage = spriteImage.replace("sprites", "features");

    return correctImage;
};
//Start the process and show the buttons we need to rig up
function startProcedure(buttonID) {
    createButtons(3, 2, FEATURES.SKIN_TONES, layer);
    let div = document.getElementById("hideMe");
    div.classList.remove("hidden");
    let button = document.getElementById(buttonID);
    button.className = "hidden";
    getResponse("skin");
};

//Create all the possible hair options within the FEATURES object
function createHairOptions(value) {
    let hairOptions = [];
    for (let i = 1; i <= (FEATURES.HAIR_COLOR.length - 1); i++) {
        let color = FEATURES.HAIR_COLOR[i];
        const holder = value + "-" + color;
        hairOptions.push(holder);
    }

    return hairOptions;
};

//Remove any visible buttons
/**
 * Removes all of the appropriate on screen buttons. 
 */
function removeButtons() {
    console.log("Removing!");
    let set = document.querySelectorAll(".feature-row")
    if (set.length == 0) {
        return;

    } else {

        console.log(set);
        for (let i = 0; i < set.length; i++) {
            set[i].remove();
        };
    }
};

//Clear all the layers
function clearLayers() {
    console.log("Clearing!");
    let set = document.querySelectorAll(".feature")
    if (set.length == 0) {
        return;
    } else {
        for (let i = 0; i < set.length; i++) {
            set[i].removeAttribute("src");
        };
    }
    let baseLayer = document.getElementById("layer0");
    baseLayer.src = "./features/outline.png";
    if (layer == 3) {
        layer = 0;
        removeButtons();
        createButtons(3, 2, FEATURES.SKIN_TONES, layer);
    }
    let hair = document.getElementById("allHair");
    hair.classList.add("hidden");
    hairColor = "";
    skinColor = "";
};

/**Function Info 
 * Parses out the necessary information from a string of characters
 * @param {String} info A string containing a file path
 * @returns A string contaning the parsed information 
 */
function parseInfo(info) {
    console.log("Parsing!");
    if (info == null) {
        let result = "bald";
        return result;
    } else if (info == "") {
        let result = hairColor;
        return result;
    } else {
        info = info.split("features/");
        console.groupCollapsed("Parsed Information");
        console.log(info);
        info = info[1];
        console.log(info);
        info = info.split(".png");
        console.log(info);
        if (info[0].includes(hairColor)) {
            console.log("true")
            info = info[0].split("-");
            console.log(info);
        };
        let result = info[0];
        console.log(result);
        console.groupEnd();
        return result;
    };
};

const RESPONSES = [
    "They have a ",                     //[0]
    " skin tone.",                      //[1]
    "Their eyes are really cool and ",  //[2]
    "They've got ",                     //[3]
    " hair.",                           //[4]
    "They don't have any hair.",        //[5]
    "They looked pretty ",              //[6]
    " the last time I saw them.",       //[7]
    "They've got a "                    //[8]
];


function getResponse(featureID) {
    let skinColor = RANDOM_PERSON.skinColor.slice(5, RANDOM_PERSON.skinColor.length);
    let eyeColor = RANDOM_PERSON.eyeColor.slice(5, RANDOM_PERSON.eyeColor.length);
    switch (featureID) {
        case "skin":
            SPEAKER.innerText = RESPONSES[0] + skinColor + RESPONSES[1];
            break;
        case "eyes":
            SPEAKER.innerText = RESPONSES[2] + eyeColor;
            break;
        case "hColor":
        case "allHair":
            if (RANDOM_PERSON.hairC == "bald") {
                SPEAKER.innerText = RESPONSES[5];

                break;

            } else if (RANDOM_PERSON.hairL == "afro") {
                SPEAKER.innerText = RESPONSES[8] + RANDOM_PERSON.hairC + " " + RANDOM_PERSON.hairL;

                break;

            } else {
                SPEAKER.innerText = RESPONSES[3] + RANDOM_PERSON.hairC + " " + RANDOM_PERSON.hairL + RESPONSES[4];

                break;

            }
        case "express":
            SPEAKER.innerText = RESPONSES[6] + RANDOM_PERSON.emotion + RESPONSES[7];

            break;
    };

};

/**
 * Provides a random feature from the a category, which is chosen by the parameter
 * @param {String} feature A string that defines the feature to be randomized
 * @returns A randomly chosen string based on the provided parameter. 
 */
function getRandomFeatures(feature) {
    let item = feature.toLowerCase();
    let result;
    switch (item) {
        case "skin":
        case "skin color":
            result = FEATURES.SKIN_TONES[Math.floor(Math.random() * FEATURES.SKIN_TONES.length)]
            break;
        case "hair color":
            result = FEATURES.HAIR_COLOR[Math.floor(Math.random() * FEATURES.HAIR_COLOR.length)]
            break;
        case "hair length":
            result = FEATURES.HAIR_LENGTH[Math.floor(Math.random() * FEATURES.HAIR_LENGTH.length)]
            break;
        case "eye color":
        case "eyes":
            result = FEATURES.EYE_COLORS[Math.floor(Math.random() * FEATURES.EYE_COLORS.length)];
            break;
        case "emotion":
        case "expression":
        case "feeling":
            result = FEATURES.EXPRESSIONS[Math.floor(Math.random() * FEATURES.EXPRESSIONS.length)];
            break;
    };
    return result
};

/** Function Info
* Result: This function is multi purpose:
* + Control how the buttons will be laid out
* + Create the buttons with a specified view and design. 
* + Add the entire thing to the page. 
* @param {number} numberOfRows 
* This is determines how many rows are created within the div (i.e, 2 or 3). 
* @param {number} maxButtonsPerRow
* This determines how many buttons can be created per row. Since there's not a limit, we're 
* dividing our buttons up based on the best format for your screen.
* @param {Object} featureToDisplay 
* This pulls the information from the FEATURES object's specific property to get the required array
* @param {number} inputLayer 
* This is the nubmer following the "layer" segment of the image stack from the DOM. Can only be a positive number
*/
function createButtons(numberOfRows, maxButtonsPerRow, featureToDisplay, inputLayer) {
    let sum = 0; //(?) Sum allows us to count the total number, instead of the number in the iteration

    ///// ToDo: Create the for loop that will control how many rows we can put buttons into
    for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement("div");        //> Build the row out 
        row.className = "feature-row";


        console.log(`Creating row: ${i}...`);           //* Log the information into the console 

        ///// ToDo: Create the for loop that will control what buttons are visible within those rows, adn their content
        for (let j = 0; j < maxButtonsPerRow; j++) {

            if (`./sprite/${featureToDisplay[sum]}.png` == "") {

                break;                                  //(?) If there aren't any more items to display, break out of this loop

            } else if (inputLayer == 2 && sum == 0) {   //(?)Otherwise, we evaluate for the bald option being chosen on the second layer
                console.log(sum);

                //> Create the boxes, and apply the className and the onclick function to them
                let box = document.createElement("button");
                box.className = "featureButton";
                box.setAttribute("onclick", `getSelected(${inputLayer}, this.id, this.innerHTML)`);
                box.id = `B${(sum += 1)}`;

                //> Create the image to attach to the button, this one linked to the bald options based on the chosen skin color
                let image = document.createElement("img");
                image.className = "buttonImage";
                image.id = `imageB${sum}`;
                image.src = `./sprites/bald-${skinColor}.png`;

                box.appendChild(image);                 //> Attach the image to the button
                row.appendChild(box);                   //> Attach the button to the row

                //* Log the information into the console to verify that the correct number of boxes were created within the row
                console.log(`Creating button B${sum}...`);


                /*
                Note:
                - We *could* delegate the required information processing to a function. 
                - This would speed up the process, but for the purposes of this example, it was left raw. 
                - Feel free to do so.
                */


            } else { //(?) This operates the same as the ones above, however it handles all other options. 
                let box = document.createElement("button");
                box.className = "featureButton";
                box.setAttribute("onclick", `getSelected(${inputLayer}, this.id, this.innerHTML)`);
                box.id = `B${(sum += 1)}`;

                //> Create the image to attach to the button, this one linked normally
                let image = document.createElement("img");
                image.className = "buttonImage"
                image.id = "imageB" + sum;
                image.src = `./sprites/${featureToDisplay[sum - 1]}.png`;

                box.appendChild(image);
                row.appendChild(box);

                //* Log the information into the console to verify that the correct number of boxes were created within the row
                console.log(`Creating button B${sum}...`);
            }
        }

        BOARD.appendChild(row);                         //(?) Add the row containing the buttons and images to the the BOARD

    };

};

/** Function Info
* Result: Create a function to help us get the information from the button pressed, and proceed with the next steps
* @param {string} optionID
* This gets the ID of the selected button, which makes it easier to retrieve the button itself
* @param {string} innerHTML 
* This retrieves the HTML of the image itself, which can be transferred over the final image 
* @param {number} inputLayer 
* This is the nubmer following the "layer" segment of the image stack from the DOM. Can only be a positive number
*/
function getSelected(inputLayer, optionID, innerHTML) {
    //(?) We call all these variables outside of the switch to make them easier to reference later
    let baldLayer = document.getElementById("layer2");
    let hairLayer = document.getElementById("layer3");
    let oldImage = document.getElementById("layer" + inputLayer);
    let newImage = document.getElementById("image" + optionID);


    /*
    Note:
    - Here we use nested conditions. This makes it easier to both read and process for both the programmer and the computer
    */


    switch (inputLayer) { //(?) Switch what we're doing based on the layer we're being called from 
        case 0:

            let html = innerHTML;                                       //> extract the useful information. 
            let splitArray = html.split("skin-");
            let fileName = splitArray[1];                                //> 0 = [localhost:300/skin-], 1 = [color.png]
            let color = fileName.split(".");
            skinColor = color[0];                                       //> 0 = [color], 1 = [.png]

            //(?) Set the source of the old image to the new image, and set the image in the right place
            oldImage.src = getTrueImage(newImage.src);
            oldImage.style.zIndex = inputLayer;

            //(?) Once a color is chosen, then we can reveal the other buttons, thus preventing an error
            let hairColorButton = document.getElementById("hColor");
            hairColorButton.classList.remove("hidden");

            break;
        //(?) This pulls out the specific word we need from the inner HTML (image) of the button,
        //(?) then displays the Hair Color option

        case 2:
            if (optionID == "B1") {

                //(?) This will also prevent the user from trying to pick something that doesn't apply
                //Retrieve the correct layer and set the source to the bald oprion
                oldImage.src = "./features/bald.png";
                oldImage.style.zIndex = inputLayer;

                //If they already had a hair option selected, take it off
                hairLayer.removeAttribute("src");
                hairColor = "bald";
                console.log(`No color selected.`);

                //Hide the button for the other hair options
                let lengthButton = document.getElementById("allHair");
                lengthButton.classList.add("hidden");

            } else if (oldImage.src !== null) {

                //(?) This process works the same for case 0, but takes care of all the oher options

                oldImage.removeAttribute("src");                        //> Remove the image
                let html = innerHTML;
                let splitArray = html.split("sprites/");
                let fileName = splitArray[1];                            //> 0 = [localhost:300/sprites/], 1 = [sprite-name.png]
                let color = fileName.split(".");
                hairColor = color[0];                                   //> 0 = [sprite-name], 1 = [.png]

                console.log(`Color selected: ${hairColor}`);            //*Log the information for later debugging 

                let lengthButton = document.getElementById("allHair");  //*Reveal button
                lengthButton.classList.remove("hidden");

                return;
            }
            break;
        /*
        (?) If the chosen option is bald, we need to make sure we set the correct image
        (?) Otherwise, if the old image isn't blank, then, 
        (?) remove it and replace it with the correct one (i.e., the one selected)
        */

        case 3:
            if (baldLayer.src !== null) { //(?) If the bald visual is visible, remove it and replace it with the correct visual
                baldLayer.src = "";
                oldImage.src = getTrueImage(newImage.src);
                oldImage.style.zIndex = inputLayer;

            } else {
                //(?) Set the source of the old image to the new image using the 'getTrueImage' function
                oldImage.src = getTrueImage(newImage.src);
                oldImage.style.zIndex = inputLayer;
            };
            break;
        //(?) Now, if the user goes back and chooses the bald option, then a hair color option, the bald layer clear itself out

        case 1:
        case 4:
            //> Set the source of the old image to the new image

            oldImage.src = getTrueImage(newImage.src);
            oldImage.style.zIndex = inputLayer;
            break;
        //(?) The image is set once it's clicked on, removing the previous option
    }
};

//! DO NOT MODIFY ANY OF THE CONTENT WITHIN THIS SECTION \\
//#endregion

//ToDo: Create the required variables, the layer we're working on, and the skin and hair colors

//ToDo: Create the randomized variables, which will get a random feature

//ToDo: Finish the baseline constructor that will allow us to build out a random person

//* Output the generated person to the console for debugging

//ToDo: Create a function that controls the creation and action of a button

//ToDo: Create a function that controls the creation and action of a button

//ToDo: Create a fuction that will retrieve and apply the correct steps.

//ToDo: Create a function that calls another to help check if the person is the one being described
