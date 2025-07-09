
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userwin , userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScoreP.innerText = userScore
        console.log("you win!");
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScoreP.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you Lose! ${compChoice} beats ${userChoice}  `;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log(" Comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"? false : true;
        } else if(userChoice==="paper"){
            userwin = compChoice === "scissors"? false : true;
        } else if(userChoice==="scissors"){
            userwin = compChoice === "rock"? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})