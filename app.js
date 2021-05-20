const selection = ["Rock", "Paper", "Scissors"];
const computerSelection = computerPlay(selection);
const playerSelection = String(prompt("Rock, Paper or Scissors?"));



alert(`You chose ${playerSelection}!`);


function computerPlay(choice){
        const randomIndex = Math.floor(Math.random() * choice.length);
        const item = choice[randomIndex];
        return item;
};


alert(`Computer chose: ${computerSelection}`); 



function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    } 
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return alert(`It's a tie! ${computerSelection} is canceling ${playerSelection}`);
    } else {
        return alert("An error has occured");
    }

}

playRound(playerSelection, computerSelection);

