userInput();

//write function to accept user input
function userInput(){
    var userChoice = prompt("Choose rock,paper,scissor");
    window.confirm("Do you want to confirm " + userChoice + "?");
    playGame();
    return userChoice;
}

//write function for computer to play game
function playGame() {
    let computerInput =  Math.floor(Math.random() * 3);
        if(computerInput ===1){
            computerInput === 'Rock';
            alert("computer chose rock");
        }
        if(computerInput ===2){
            computerInput === 'Paper';
            alert("computer chose Paper");
        }
        if(computerInput ===3){
            computerInput === 'Scissor';
            alert("computer chose Scissor");
        }
        return computerInput;
}
var userChoice = userInput.userChoice;
var computerInput = playGame.computerInput;

evaluateGame(userChoice, computerInput);


//write a function for evaluating user and computer inputs
function evaluateGame(userChoice, computerInput) {
        if(userChoice === 'rock' && computerInput === 'paper') {
            alert ('You lose! Paper beats rock!'); 
        } if (userChoice === 'rock' && computerInput === 'rock') {
            alert ('Its a tie!');     
        } if (userChoice === 'rock' && computerInput === 'scissor') {
            alert ('You win! Rock beats scissor!');   
        // User Chooses Paper
        } else if(userChoice === "paper" && computerInput === 'rock') {
            alert ('You win! Rock beats paper!'); 
        } else if (userChoice === 'paper' && computerInput=== 'paper') {
            alert ('Its a tie!');     
        } else if (userChoice === 'paper' && computerInput === 'scissor') {
            alert ('You lose! Scissor beats paper!');   
        // User Chooses Scissors
        } else if(userChoice === "scissor" && computerInput === 'rock') {
            alert ('You lose! Rock beats scissors!');     
        } else if (userChoice === 'scissor' && computerInput === 'paper') {
            alert ('You win! Scissor beats paper!');    
        } else if(userChoice === 'scissor' && computerInput === 'scissor'){
            alert ('It"s a tie!');  
        }
 }
 
// var userChoice = prompt("Wanna Play again? Type yes or no");

//  //if user chooses to play again
// if(userChoice == "yes"){
//     userChoice();
// }else{
//     alert("Game ended!");
// }
    
    
    