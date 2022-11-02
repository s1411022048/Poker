const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king"
];

// empty array to contain cards
let deck = []; 

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        var card = { Point: x < 10 ? x + 1 : 10, Value: values[x], Suit: suits[i], File: values[x] + "_of_" + suits[i] + ".png" };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

var TotalPoint1 = 0; // player 1 total point count
var TotalPoint2 = 0; // player 2 total point count
var count = 0;


//p1 deal 2 cards
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
    var newcard1 = document.createElement("img");
    newcard1.width = 250;
    newcard1.src = "PNG-cards/" + deck[i].File;
    document.getElementById("Cards1").appendChild(newcard1);
    TotalPoint1 += deck[i].Point;
    count++;
}


//p2 deal 2 cards
for (let i = 5; i < 10; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
    var newcard2 = document.createElement("img");
    newcard2.width = 250;
    newcard2.src = "PNG-cards/" + deck[i].File;
    document.getElementById("Cards2").appendChild(newcard2);
    TotalPoint2 += deck[i].Point;
    count++;
}

document.getElementById("Point1").innerHTML = TotalPoint1;
document.getElementById("Point2").innerHTML = TotalPoint2;


function addcard1() {
    var newcard1 = document.createElement("img");
    newcard1.width = 250;
    newcard1.src = "PNG-cards/" + deck[count].File;
    TotalPoint1 += deck[count].Point;
    document.getElementById("Cards1").appendChild(newcard1);
    document.getElementById("Point1").innerHTML = TotalPoint1;
    count++;
}

function addcard2() {
    var newcard2 = document.createElement("img");
    newcard2.width = 250;
    newcard2.src = "PNG-cards/" + deck[count].File;
    TotalPoint2 += deck[count].Point;
    document.getElementById("Cards2").appendChild(newcard2);
    document.getElementById("Point2").innerHTML = TotalPoint2;
    count++;
}