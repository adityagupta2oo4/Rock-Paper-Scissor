//getting computer INput
function getComputerChoice(){

    let num = Math.floor(Math.random()*3 + 1);
    if(num == 1){
        return "rock";
    }
    else if(num == 2){
        return "paper";
    }
    return "scissors";

}


//setting the score
let humanScore = 0;
let computerScore = 0;

const result_div = document.createElement("div"); // display the scores
const container = document.querySelector("#container");
const lose_win = document.createElement("p");



function playRound(humanChoice,computerChoice){



    //possibility one
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            lose_win.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            lose_win.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else{
            lose_win.textContent =`It's a Tie! ${humanChoice} same ${computerChoice}`;

            
        }

    }

    //possibilty Two
    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            lose_win.textContent =`You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else if(computerChoice == "rock"){
            lose_win.textContent =`You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else{
            lose_win.textContent =`It's a Tie! ${humanChoice} same ${computerChoice}`;

            
        }

    }

    //possibilty Three
    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            lose_win.textContent =`You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else if(computerChoice == "paper"){
            lose_win.textContent =`You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else{
            lose_win.textContent =`It's a Tie! ${humanChoice} same ${computerChoice}`;
        }

    }

    //appending the lose_win

    container.appendChild(lose_win);

}







function display_result(){

    result_div.textContent = `Human score: ${humanScore} , Computer score: ${computerScore}`;

    // result_div.textContent = `The game ended with, Human score: ${humanScore} AND Computer score: ${computerScore}`;
    container.appendChild(result_div);
    
}

//this is where it all get started


const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");

let count = 5;

rock_btn.addEventListener("click", function () {

    if(count>0){
        //update
        lose_win.textContent = "";
        result_div.textContent = "";
        const humanChoice = "rock";
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        display_result();
        count--;
    }else{
        alert("Sorry You can only play Five Round ! Reload To play Again");

    }

});

paper_btn.addEventListener("click", function () {
    if(count>0){
        //update
        lose_win.textContent = "";
        result_div.textContent = "";
        const humanChoice = "paper";
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        display_result();
        count--;
    }else{
        alert("Sorry You can only play Five Round ! Reload to Play Again");

    }

});

scissors_btn.addEventListener("click", function () {
    if(count>0){
        //update
        lose_win.textContent = "";
        result_div.textContent = "";
        const humanChoice = "scissors";
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        display_result();
        count--;
    }else{
        alert("Sorry You can only play Five Round ! Reload to Play Again");

    }

});

