var options = ["Rock", "Paper", "Scissors"];
var userSelection = userPlay();
var computerSelection = computerPlay();

playRound(userSelection, computerSelection);

function userPlay () {
    console.log("Hello. Please input your choice: rock, paper, or scissors.");
    var uChoice = readline();
    return uChoice;
}

function computerPlay () {
    var randomNum = Math.floor(Math.random() * (options.length));
    var compChoice = options[randomNum];
    console.log("Computer Chooses: " + compChoice);
    return compChoice;
}

function playRound (uSelect, cSelect) {
    console.log("userSelection: " + userSelection + " computerSelection: " + computerSelection)
    if (uSelect === cSelect) {
        console.log("A tie! Try again.");
    } else if (uSelect == "Rock" && cSelect == "Paper"){
        console.log("Paper covers rock. The computer wins.");
    } else if (uSelect == "Rock" && cSelect == "Scissors"){
        console.log("Rock beats paper. You win!");
    } else if (uSelect == "Paper" && cSelect == "Rock"){
        console.log("Paper covers rock. You win!");
    } else if (uSelect == "Paper" && cSelect == "Scissors"){
        console.log("Scissors cut paper. The computer wins.");
    } else if (uSelect == "Scissors" && cSelect == " Paper"){
        console.log("Scissors cut paper. You win!");
    } else if (uSelect == "Scissors" && cSelect == "Rock"){
        console.log("Rock beats paper. The computer wins.");
    }
}