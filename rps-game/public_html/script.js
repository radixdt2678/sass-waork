// declaration variables as well..

let userScore=0;
let compScore=0;
const userScore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

// Computer Choice

function covertToWord(letter){
    if(letter === "r") return "Rock[💎]";
    if(letter === "p") return "Paper[🧻]";
    return "Scissor[✂️]";
}

function Win(userChoice, computerchoice){
    userScore++;
    // console.log("User -> " + userScore);
    // console.log("User Wins..! 😁");
    userScore_span.innerHTML = userScore;
    computerscore_span.innerHTML = compScore;
    const smallUserword = "User".fontsize(5);
    const smallCompword = "Computer".fontsize(5);
    result_div.innerHTML = `${smallUserword} -> ${covertToWord(userChoice)}  Beat  ${smallCompword} -> ${covertToWord(computerchoice)}  || You Win! 🔥`;
    // window.location.reload();
}
function Lose(userChoice, computerchoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    computerscore_span.innerHTML = compScore;
    const smallUserword = "User".fontsize(5);
    const smallCompword = "Computer".fontsize(5);
    result_div.innerHTML = `${smallUserword} -> ${covertToWord(userChoice)}  Loses TO  ${smallCompword} -> ${covertToWord(computerchoice)}  || You Loser! 😥 `;
}
function Draw(userChoice, computerchoice){
    
    userScore_span.innerHTML = userScore;
    computerscore_span.innerHTML = compScore;
    const smallUserword = "User".fontsize(5);
    const smallCompword = "Computer".fontsize(5);
    result_div.innerHTML = `${smallUserword} -> ${covertToWord(userChoice)}  VS  ${smallCompword} -> ${covertToWord(computerchoice)}  || You Draw Game..!`;
}

function getcomputerChoice(){
    const choices =  ['r','p','s'];
    const randamNumber =  Math.floor( Math.random() * 3);
    return choices[randamNumber];
}
// console.log(getcomputerChoice());

// user Choice
function game(userChoice){
    // console.log("😁😁😁" + userChoice);
    const computerchoice = getcomputerChoice();
    console.log("user choice =>" + userChoice);
    console.log("Computer Choice =>" + computerchoice);
    switch(userChoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
                Win(userChoice , computerchoice);            
            break;
        case "rp":
        case "ps":
        case "sr":
                Lose(userChoice , computerchoice);    
            break;
        case "rr":
        case "pp":
        case "ss":
                Draw(userChoice , computerchoice);            
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissor_div.addEventListener('click', function(){
        game("s")
    })   
}
main();