
//variable declaration
var targetNumber = 0;
var totalNumber = 0;
var crystalNumber1 = 0;
var crystalNumber2 = 0;
var crystalNumber3 = 0;
var crystalNumber4 = 0;
var winCounter = 0;
var lossCounter = 0;

//function for random target number generation and display
function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#random-number-holder").text(targetNumber);
    return targetNumber;
}

//function for randomCrystal Number
function randomCrystalNumber(arg) {
    arg = Math.floor(Math.random() * 12) + 1;
    console.log(arg);
    return arg;
}

//reset game function
function reset() {
    randomTargetNumber();
    crystalNumber1 = randomCrystalNumber(crystalNumber1);
    crystalNumber2 = randomCrystalNumber(crystalNumber2);
    crystalNumber3 = randomCrystalNumber(crystalNumber3);
    crystalNumber4 = randomCrystalNumber(crystalNumber4);
    totalNumber = 0;
    $("#total-score-holder").text(totalNumber);

}

//check win/loss condition
function winLossCheck() {
    if (totalNumber === targetNumber) {
        winCounter++;
        $("#win-count").text(winCounter);
        $("#win-loss-reveal").css("display", "inline");
        $("#win-loss-reveal").text("You won!");
        reset();
    }
    else if (totalNumber > targetNumber) {
        lossCounter++;
        $("#loss-count").text(lossCounter);
        $("#win-loss-reveal").css("display", "inline");
        $("#win-loss-reveal").text("You lost!");
        reset();
    }
}

//game start state
reset();

//on click event listener for each crystal and associating a value with each crystal
$(".crystal").on("click", function () {
    if ($(this).attr("value") === "red") {
        totalNumber += crystalNumber1;
        $("#total-score-holder").text(totalNumber);
        winLossCheck();
    }
    else if ($(this).attr("value") === "blue") {
        totalNumber += crystalNumber2;
        $("#total-score-holder").text(totalNumber);
        console.log("This is totalNumber: " + totalNumber);
        console.log("This is targetNumber: " + targetNumber);
        winLossCheck();
    }
    else if ($(this).attr("value") === "yellow") {
        totalNumber += crystalNumber3;
        $("#total-score-holder").text(totalNumber);
        console.log("This is totalNumber: " + totalNumber);
        console.log("This is targetNumber: " + targetNumber);
        winLossCheck();
    }
    else if ($(this).attr("value") === "green") {
        totalNumber += crystalNumber4;
        $("#total-score-holder").text(totalNumber);
        console.log("This is totalNumber: " + totalNumber);
        console.log("This is targetNumber: " + targetNumber);
        winLossCheck();
    }
});
