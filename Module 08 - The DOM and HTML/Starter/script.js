/************************** Module 8 Script - The Document Object Model**************/
//#region Setting up the File
//! DO NOT MODIFY THE CODE IN THIS SEGMENT !//
let result = document.getElementById("results");

// > Deck of cards Setup < \\
let countArr = [...Array(11).keys()];
countArr.splice(0, 2);

//Properties of a deck of cards
const DECK = {
    noCards: 52,
    colors: ["Red", "Black"],
    suits: ["Clubs", "Hearts", "Spades", "Diamonds"],
    shortSuit: ["C", "H", "S", "D"],
    faces: ["Ace", "Jack", "Queen", "King"],
    shortFaces: ["A", "J", "Q", "K"],
    values: [],
    numConv: ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
};

// (?) Once the deck is initialized, update the 'values' property. 
DECK.values = countArr.concat(DECK.shortFaces);

// Create a traditional deck of cards as a reference and then copies to another array
const CARDS = DECK.shortSuit.flatMap(createCards);

/**
 * Inserts a grey backed card, and "???" within the dealer area of the web page. 
 * Used to indicate the presence of a card that has no value yet. 
 */
function insertMysteryCard() {
    let card = document.createElement("img");
    card.id = "greyBacking";
    card.src = "./cards/gray_back.png";
    document.getElementById("dealerCards").appendChild(card);
    let newCard = document.getElementById("dCardNames");
    newCard.textContent += "???" + " ● ";
};

/**
 * Removes a grey backed card, and "???" within the dealer area of the web page. 
 */
function removeMysteryCard() {
    // > Remove the unknown card and the ??? from the list of cards
    let greyBacked = document.getElementById("greyBacking");
    greyBacked.remove();
    let oldText = document.getElementById("dCardNames").innerText;
    let newText = oldText.slice(0, (oldText.length - 6));
    document.getElementById("dCardNames").textContent = newText;
};

/**
 * Convers an array item containing a card to a string containing the full name of the item
 * @param {String} item A single array item which is passed to the function to be converted.
 * @returns - A string containing the full name of the card 
 */
function getCardName(item) {            // - Card is [10D]
    let name = item.toString();         // > "10D"
    let cardValue = "";                 // > Create the variable for later
    let cardSuit;
    console.log(parseInt(name));
    if (isNaN(parseInt(name))) {        // > If card is [AD] instead of [10D]
        cardValue = name.slice(0, 1);   // > Return the first letter 
        cardSuit = faceCard(cardValue);
        console.log([cardValue, cardSuit]);
    }
    else {
        cardValue = parseInt(name);     // > "10"
        cardSuit = DECK.numConv[(cardValue - 2)];
        console.log([cardValue, cardSuit] + " Number");
    };
    let cardName = name.slice(-1);      // > "D"
    console.log(cardSuit);
    let cardSecond = suitName(cardName);

    //Get the name of the Face card
    function faceCard(item) {
        let result;
        switch (item) {
            case "A":
                result = DECK.faces[0];
                break;
            case "J":
                result = DECK.faces[1];
                break;
            case "Q":
                result = DECK.faces[2];
                break;
            case "K":
                result = DECK.faces[3];
                break;
        };

        return result;
    };

    //Get the suit associated with the card
    function suitName(item) {
        let result = "";
        switch (item) {
            case "C":
                result = DECK.suits[0];
                break;
            case "H":
                result = DECK.suits[1];
                break;
            case "S":
                result = DECK.suits[2];
                break;
            case "D":
                result = DECK.suits[3];
                break;
        };

        return result;
    };
    let result = cardSuit + " of " + cardSecond;

    return result;
};

/**
 * Removes all the HTML elements specified within the array from the DOM
 * @param {Array<HTMLElement>} set An array of HTML Elements
 */
function resetCards(set) {
    for (let i = 0; i < set.length; i++) {
        set[i].remove();
    };
};
//! DO NOT MODIFY THE CODE IN THIS SEGMENT !//
//#endregion

//> Place your global variables under this comment

