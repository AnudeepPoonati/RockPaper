const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const ys = document.querySelector('#h2s1')
    const cs = document.querySelector('#h2s2')
    const yss = document.createElement('h2')
    const css = document.createElement('h2')

    ys.appendChild(yss)
    cs.appendChild(css)
button1.addEventListener('click',()=>{
    let playerSelection = "Rock";
    game(playerSelection);
})
button2.addEventListener('click',()=>{
    let playerSelection = "Paper";
    game(playerSelection);
})
button3.addEventListener('click',()=>{
    let playerSelection = "Scissors";
    game(playerSelection);
})

const nri = document.querySelector('.msg')
const nris = document.createElement('h2')
nri.appendChild(nris);
nris.textContent = 'Lets Start the Game'


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
        return "Its a draw"
    } 
}

var playerScore = 0;
var computerScore = 0;
function game(playerSelection){


        let check = RockPaperScissors(playerSelection);
        console.log(check)
        nris.textContent=check

        if(check=="You Lose! Paper beats Rock" || check =="You Lose! Scissor beats Paper" ||check=="You Lose! Rock beats Scissor"){
            computerScore++;
            css.textContent = computerScore;
        }
        else if(check=="Its a draw"){
            let temp=0;
        }
        else{
            playerScore++;
            yss.textContent = playerScore;
        }

        console.log(playerScore)
        console.log(computerScore)
        let checkScore = checkingScore(playerScore,computerScore);
        if(checkScore == "You Lost"){
            nris.textContent = "You Lost The Game"
            playerScore = 0;
            computerScore = 0;
            css.textContent = 0
            yss.textContent = 0


        }
        if(checkScore=="You Win"){
            nris.textContent = "Yay ! You Won The Game"
            playerScore = 0;
            computerScore = 0;
            css.textContent = 0
            yss.textContent = 0
        }
}


function checkingScore(playerScore,computerScore){
    if(computerScore==5){
        return "You Lost";
    }
    if(playerScore==5){
        return "You Win"
    }
}

// function game(playerSelection){
//     let playerScore = 0;
//     let computerScore =0;
//     while(playerScore<5 && computerScore<5){
//         let check = RockPaperScissors(playerSelection);
//         console.log(check)
//         if(check=="You Lose! Paper beats Rock" || check =="You Lose! Scissor beats Paper" ||check=="You Lose! Rock beats Scissor"){
//             computerScore++;
//         }
//         else if(check=="Its a draw"){
//             let temp=0;
//         }
//         else{
//             playerScore++;
//         }

//     }
//     if(computerScore==5){
//         return "You Lost";
//     }
//     else{
//         return "You Win"
//     }
// }

