const ruleFrame = document.getElementById("ruleFrame");
const btnRule = document.getElementById("btnRule");
const cancelBtn = document.getElementById("cancelBtn");
const playAgain = document.getElementById("playAgain");
const userWinCircle = document.getElementById("userWinCircle");
const cpWinCircle = document.getElementById("cpWinCircle");
const btnWinnerPage = document.getElementById("Next");
const trophyWinnerPage = document.getElementById("torphyWinnerP");
const displayScoreDiv = document.getElementById("displayScoresDiv");
const playAgainButton = document.getElementById("playAgainButton");


const options = document.querySelectorAll(".option");
const mainPageContainer = document.getElementById("mianPageDiv");
const gamePlayContainer = document.getElementById("gamePlayDiv");
let computerScore = document.getElementById("compuScores");
let userScore = document.getElementById("yourScore");

let userChoise;
let computerChoise;
let userWins = localStorage.getItem('userWins') ? parseInt(localStorage.getItem('userWins')) : 0;
let computerWins = localStorage.getItem('computerWins') ? parseInt(localStorage.getItem('computerWins')) : 0;
let winner = null;

computerScore.textContent = computerWins;
userScore.textContent = userWins;

const userSelectOptions = {
    rock : "./images/rock.png", 
     paper : "./images/paper.png", 
      scissors : "./images/scissors.png"
}

options.forEach((x) => {
    x.addEventListener("click", (e) =>{
        userChoise = e.target.id;
        userChoice();
    })
})

const userChoice = () =>{
    mainPageContainer.style.display = "none";
    gamePlayContainer.style.display = "flex";

    document.getElementById("userPicked").src = userSelectOptions[userChoise];
    computerChoice();
    result(userChoise,computerChoise);
    
}

const computerChoice = () => {
    let computerOptions = ['rock', 'paper', 'scissors'];
    computerChoise = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    document.getElementById("computerPicked").src = userSelectOptions[computerChoise];
   
}

/* result funtion for gameplay choices*/
const result = (userChoise,computerChoise) => {
    winner = "";
    
    if(userChoise === "paper" && computerChoise === "scissors"){
        gameDecission('YOU LOOSE');
        computerWins += 1;
        winner = "computer";
    }
    else if(userChoise === "paper" && computerChoise === "rock"){
        gameDecission('YOU WIN');
        userWins += 1;
        winner = "user";
    }
    else if(userChoise === "rock" && computerChoise === "scissors"){
        gameDecission('YOU WIN');
        userWins += 1;
        winner = "user";
    }
    else if (userChoise === "paper" && computerChoise === "paper"){
        gameDecission('TIE UP');
        winner = "tie";
    }
    else if(userChoise === "scissors" && computerChoise === "paper"){
        gameDecission('YOU WIN');
        userWins += 1;
        winner = "user";
    }
    else if(userChoise === "scissors" && computerChoise === "scissors"){
        gameDecission('TIE UP');
        winner = "tie";
      
    }else if(userChoise === "rock" && computerChoise === "rock"){
        gameDecission('TIE UP');
        winner = "tie";
    }
    else if(userChoise === "rock" && computerChoise === "paper"){
        gameDecission('YOU LOOSE');
        computerWins += 1;
        winner = "computer";
    }
    else if(userChoise === "scissors" && computerChoise === "rock"){
        gameDecission('YOU LOOSE');
        computerWins += 1;
        winner = "computer";
    }
    else if(userChoise === "rock" && computerChoise === "scissors"){
        gameDecission('YOU LOOSE');
        computerWins += 1;
        winner = "computer";
    }

    if (winner) {
        displayWinnerCircle(winner);
    }
    
    computerScore.textContent = computerWins;
    userScore.textContent = userWins;

    localStorage.setItem('userWins', userWins);
    localStorage.setItem('computerWins', computerWins);

};


const gameDecission = (decission) =>{
    document.querySelector('.winningStatusDiv h1').textContent = decission;
} 

/* Event listener for Play Again*/
playAgain.addEventListener("click", () => {
    mainPageContainer.style.display = "flex";
    gamePlayContainer.style.display = "none";
    btnWinnerPage.style.display = "none";
})

const displayWinnerCircle = (winner) => {
    userWinCircle.style.display = "none";
    cpWinCircle.style.display = "none";

    if(winner === "user"){
        userWinCircle.style.display = "flex";
        btnWinnerPage.style.display = "flex";
    }
    else if(winner === "computer"){
        cpWinCircle.style.display = "flex";
    }
    else if(winner === "tie"){
        cpWinCircle.style.display = "none";
        userWinCircle.style.display = "none";
    }
    
}
/* Event listener for rule button*/
btnRule.addEventListener("click", (e) =>{
    ruleFrame.style.display = "flex";
    cancelBtn.style.display = "flex";

    cancelBtn.addEventListener("click", (a) =>{
        ruleFrame.style.display = "none";
        cancelBtn.style.display = "none";
    })
})

/* Event listener for trophy page*/
btnWinnerPage.addEventListener("click", () => {
    trophyWinnerPage.style.display = "flex";  
    mainPageContainer.style.display = "none";  
    gamePlayContainer.style.display = "none";  
    displayScoreDiv.style.display = "none";
    btnWinnerPage.style.display = "none";
});

/* Event listener for Play Again in winner Trophy Page*/
playAgainButton.addEventListener("click", () => {
    mainPageContainer.style.display = "flex";
    gamePlayContainer.style.display = "none";
    trophyWinnerPage.style.display = "none";  
    displayScoreDiv.style.display = "flex";
})

const winnerPageHidden = window.getComputedStyle(btnWinnerPage).display === "none";

if (winnerPageHidden) {

    btnRule.style.display = "block"; 
    btnRule.style.position = "absolute"; 
    btnRule.style.left = "150px"; 
}