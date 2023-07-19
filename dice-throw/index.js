document.getElementById("throwButton").addEventListener("click", function() {
var diceCount = parseInt(document.getElementById("diceCount").value);
var faceCount = 6;
var diceValues = [];
var diceContainer = document.getElementById("DiceContainer");
diceContainer.innerHTML = ""; // Clear previous dice elements if any

console.log(diceCount);
var title = document.createElement("h1");
title.innerHTML = "Keliron Darthang Presents";
diceContainer.appendChild(title);

for (var i = 1; i <= diceCount; i++)
{
    var diceDiv = document.createElement("div");
    diceDiv.className = "dice";

    var diceText = document.createElement("p");
    diceText.className = "DiceText";
    diceText.textContent = "Dice " + i;
    diceDiv.appendChild(diceText);

    var diceImage = document.createElement("img");
    diceImage.className = "img" + i;
    diceImage.src = "";
    diceImage.alt = "Picture of a Dice";
    diceDiv.appendChild(diceImage);

    diceContainer.appendChild(diceDiv);
}

var totalCount = 0;
for (var i = 1; i <= diceCount; i++)
{
    var randomNumber = Math.round(Math.random() * (faceCount - 1)) + 1;
    totalCount += randomNumber;
    diceValues.push(randomNumber);
    document.getElementsByClassName("img" + i)[0].src = "images/dice" + randomNumber + ".png";
}
var scoreDiv = document.createElement("div");
scoreDiv.className = "container";
var finalScore = document.createElement("p");
finalScore.className="DiceText";
scoreDiv.appendChild(finalScore);
finalScore.innerHTML = "Final Score: "+totalCount.toString();

// Append the scoreDiv to the diceContainer
diceContainer.appendChild(scoreDiv);

});