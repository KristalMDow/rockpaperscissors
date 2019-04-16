//Description: This is the main Javascript file for the Rock, Paper, Scissors project by Kristal Dow.
//
//            For a README containing full information and credits, you can clone from: 
//                https://github.com/KristalMDow/rockpaperscissors
//
//            Last Edited: 20190416 KMD


// Global variables. Multiple functions access these.
var options = ["ROCK", "PAPER", "SCISSORS"];
var uScore = 0;
var cScore = 0;
let scoreDivString = "";

// Button listeners.
// Select all buttons and put into a node list.
const buttons = document.querySelectorAll('button');

// Cycle through each button and add a listener for a click event.
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Every time the button is pressed, play a round.
        playRound(button.id);
    });
});

// Compares user input with computer choice and changes score accordingly.
function playRound (uSelect) {
    let turnString = "";
    let scoreUpdate = "";

    // Find uSelect value. Translate button id into a choice that can be compared.
    if (uSelect == "rockButton"){
        uSelect = "ROCK";
    } else if (uSelect == 'paperButton'){
        uSelect = "PAPER";
    } else if (uSelect == 'scissorsButton'){
        uSelect = "SCISSORS";
    } else {
        alert('Fatal error: Unusable button choice.');
    }

    // Find cSelect value.
    let cSelect = computerPlay().toUpperCase();
    

    // Compare cSelect and uSelect values to determine the winner of the round.
    if (uSelect === cSelect) {
        turnString = "A tie! Try again.";
    } else if (uSelect == "ROCK" && cSelect == "PAPER"){
        turnString = "Paper covers rock. The computer wins.";
        cScore++;
    } else if (uSelect == "ROCK" && cSelect == "SCISSORS"){
        turnString = "Rock beats scissors. You win!";
        uScore++;
    } else if (uSelect == "PAPER" && cSelect == "ROCK"){
        turnString = "Paper covers rock. You win!";
        uScore++;
    } else if (uSelect == "PAPER" && cSelect == "SCISSORS"){
        turnString = "Scissors cut paper. The computer wins.";
        cScore++;
    } else if (uSelect == "SCISSORS" && cSelect == " PAPER"){
        turnString = "Scissors cut paper. You win!";
        uScore++;
    } else if (uSelect == "SCISSORS" && cSelect == "ROCK"){
        turnString = "Rock beats scissors. The computer wins.";
        cScore++;
    }

    // Report the scores.
    scoreUpdate = "\nPlayer score is: " + uScore + " Computer Score is: " + cScore + "\n";

    // Figure out what to push to the scoreDiv and if there is a winner.
    scoreDivString = turnString + scoreUpdate + determineWinner();

    // Create scoreDiv, and push to textDiv to display.
    const textDiv = document.querySelector('#textDiv');
    const scoreDiv = document.createElement('div');
    
    // Remove other content, if it's there.
    var divList = document.getElementById("textDiv");
    if (divList.hasChildNodes()){
        divList.removeChild(divList.firstChild);
    }
    
    // Place content.
    scoreDiv.classList.add("scoreDiv");
    scoreDiv.innerText= scoreDivString;
    textDiv.appendChild(scoreDiv);

}

// Determines if there is a win-state, and if so shows scoreboard.
function determineWinner () {
    let winnerString ="";
    
    if (cScore == 5 || uScore == 5){ // Win-state if someone gets 5.
        // Scoreboard.
        winnerString = "FINAL SCORES\nPlayer score: " + uScore + "\nComputer Score: " + cScore;
        if (uScore > cScore){
            winnerString = winnerString + "\nYou win! :)";
        } else if (uScore == cScore){
            winnerString = winnerString + "\nIt is a tie!";
        } else {
            winnerString = winnerString + "\nThe computer wins. :(";
        }

        //Reset score for new game.
        cScore = 0;
        uScore = 0;
    }

    return winnerString;
        
}

// Generates random choice - rock, paper, or scissors from the computer.
function computerPlay () {
    var randomNum = Math.floor(Math.random() * (options.length));
    var compChoice = options[randomNum];
    console.log("Computer Chooses: " + compChoice);
    return compChoice;
}

