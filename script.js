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

function getHumanChoice(){

    let choice = prompt("Choose Rock-Paper-Scissors!");
    choice = choice.toLowerCase();
    //verifing the input
    while(!(choice == "rock" || choice == "paper" || choice == "scissors")){

       choice =  prompt(" Invalid Input!, Choose Rock-Paper-Scissors Again");
       choice.toLowerCase();
    }
    return choice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

    //possibility one
    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`It's a Tie! ${humanChoice} same ${computerChoice}`);

            
        }

    }

    //possibilty Two
    if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if(computerChoice == "paper"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`It's a Tie! ${humanChoice} same ${computerChoice}`);

            
        }

    }

    //possibilty Three
    if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if(computerChoice == "paper"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`It's a Tie! ${humanChoice} same ${computerChoice}`);
        }

    }

}





function playGame(){

    let round = 5;
    for(let i = 0 ; i<round ; i++){

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log(`Human score: ${humanScore} , Computer score: ${computerScore}`);
    }

    console.log(`The game ended with, Human score: ${humanScore} AND Computer score: ${computerScore}`);
}

//this is where it all get started
playGame();
