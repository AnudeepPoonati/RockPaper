function getComputerChoice(){
    let arr = ['Rock', 'Paper','Scissors'];
    let rannum = Math.floor(Math.random()*arr.length)
    return arr[rannum]
}
function RockPaperScissors(playerSelection){
    let computerSelection = getComputerChoice();
    if(playerSelection=='Rock' && computerSelection=='Paper'){
        return "You Lose! Paper beats Rock"

    }
    else if(playerSelection=='Scissors' && computerSelection=='Paper'){
        return "You Win! Scissor beats Paper"

    }
    else if(playerSelection=='Paper' && computerSelection=='Scissors'){
        return "You Lose! Scissor beats Paper"
    }
    else if(playerSelection=='Rock' && computerSelection=='Scissors'){
        return "You Win! Rock beats Scissor"
        
    }
    else if(playerSelection=='Scissors' && computerSelection=='Rock'){
        return "You Lose! Rock beats Scissor" 
    }
    else{
        return "Its a draw buddy"
    } 
}

let playerSelection = "Rock";

function game(){
    let playerScore = 0;
    let computerScore =0;
    while(playerScore<5 && computerScore<5){
        let check = RockPaperScissors("Rock");
        console.log(check)
        if(check=="You Lose! Paper beats Rock" || check =="You Lose! Scissor beats Paper" ||check=="You Lose! Rock beats Scissor"){
            computerScore++;
        }
        else if(check=="Its a draw buddy"){
            let temp=0;
        }
        else{
            playerScore++;
        }

    }
    if(computerScore==5){
        return "You Lost";
    }
    else{
        return "You Win"
    }
}
console.log(game())

