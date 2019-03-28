//Description: This is the main Javascript file for the Rock, Paper, Scissors project by Kristal Dow.
//
//            For a README containing full information and credits, you can clone from: 
//                https://github.com/KristalMDow/rockpaperscissors
//
//            Last Edited: 20190328 KMD


// Global variables. Multiple functions access these.
var options = ["ROCK", "PAPER", "SCISSORS"];
var uScore = 0;
var cScore = 0;

// Calling master function.
game();

// Master function, calls on all other functions.
function game() {
    for (var i = 1; i < 6; i++)
    {
        console.log ('Round #' + i);
        playRound();
        console.log ('Player score is: ' + uScore + 'Computer Score is: ' + cScore);
    }
    console.log('FINAL SCORES\nPlayer score: ' + uScore + '\nComputer Score: ' + cScore);
    if (uScore > cScore){
        console.log('You win! :)');
    } else if (uScore == cScore){
        console.log('It is a tie!');
    } else {
        console.log('The computer wins. :(');
    }
}

// Asks for input from user.
function userPlay() {
    let turn = prompt("Enter Rock, Paper, or Scissors.", "");
        if(turn != null) {
            console.log(`Player Choice: ${turn}`);
            return turn;
        } else {
            userPlay();
        }
}

// Generates random choice - rock, paper, or scissors from the computer.
function computerPlay () {
    var randomNum = Math.floor(Math.random() * (options.length));
    var compChoice = options[randomNum];
    console.log("Computer Chooses: " + compChoice);
    return compChoice;
}

// Compares user input with computer choice and changes score accordingly.
function playRound () {
    let uSelect = userPlay().toUpperCase();
    let cSelect = computerPlay().toUpperCase();
    if (uSelect === cSelect) {
        console.log("A tie! Try again.");
    } else if (uSelect == "ROCK" && cSelect == "PAPER"){
        console.log("Paper covers rock. The computer wins.");
        cScore++;
    } else if (uSelect == "ROCK" && cSelect == "SCISSORS"){
        console.log("Rock beats scissors. You win!");
        uScore++;
    } else if (uSelect == "PAPER" && cSelect == "ROCK"){
        console.log("Paper covers rock. You win!");
        uScore++;
    } else if (uSelect == "PAPER" && cSelect == "SCISSORS"){
        console.log("Scissors cut paper. The computer wins.");
        cScore++;
    } else if (uSelect == "SCISSORS" && cSelect == " PAPER"){
        console.log("Scissors cut paper. You win!");
        uScore++;
    } else if (uSelect == "SCISSORS" && cSelect == "ROCK"){
        console.log("Rock beats scissors. The computer wins.");
        cScore++;
    }
}