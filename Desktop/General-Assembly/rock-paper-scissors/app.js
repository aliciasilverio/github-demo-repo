// this function happens then the user chooses rock
// TODO: refactor these into one single function
// How do we know what button was clicked???
function respondToUserChoiceRock(){
    userChoice = "rock";
    console.log("User chose " + userChoice)
    computerChooses()
    compareChoices()
}
// this variable is the button you click to choose rock
const rockButton = document.querySelector('#rock')
// This connects the button to the function
rockButton.addEventListener("click", respondToUserChoiceRock)
​
function respondToUserChoicePaper(){
    userChoice = "paper";
    console.log("User chose " + userChoice)
    computerChooses()
    compareChoices()
}
const paperButton = document.querySelector('#paper')
paperButton.addEventListener("click", respondToUserChoicePaper)
​
function respondToUserChoiceScissors(){
    userChoice = "scissors";
    console.log("User chose " + userChoice)
    computerChooses()
    compareChoices()
}
const scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener("click", respondToUserChoiceScissors)
​
// 1. Store the user's choice of button in a variable
let userChoice = null;
// 2. Create a random choice for the computer
function computerChooses(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chose " + computerChoice)
}
let choices = ["rock", "paper", "scissors"]
let computerChoice = null;
// 3. Compare the two choices, see who wins or if its a tie
function compareChoices(){
    if(userChoice === "rock" && computerChoice == "rock"){
        // The user chose rock
        if(computerChoice === "rock"){
            tellUserTheResult("TIE GAME")
        }else if(computerChoice === "scissors"){
            tellUserTheResult("YOU WIN")
        }else{
            tellUserTheResult("YOU LOSE")
        }
    }else if(userChoice === "paper"){
        // The user chose paper
        if(computerChoice === "paper"){
            tellUserTheResult("TIE GAME")
        }else if(computerChoice === "rock"){
            tellUserTheResult("YOU WIN")
        }else{
            tellUserTheResult("YOU LOSE")
        }
    }else if(userChoice === "scissors"){
        // The user chose scissors
        if(computerChoice === "scissors"){
            tellUserTheResult("TIE GAME")
        }else if(computerChoice === "paper"){
            tellUserTheResult("YOU WIN")
        }else{
            tellUserTheResult("YOU LOSE")
        }
    }
}
// 4. Tell the user what happened
function tellUserTheResult(result){
    let message = "You chose " + userChoice + " and the computer chose " + computerChoice
    message = message + "\n\n" + result
    alert(message)
}