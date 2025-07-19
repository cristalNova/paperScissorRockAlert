let humanScore = 0;
let computerScore = 0;
let tied = 0;

//Selectors

let btnsContainer = document.querySelector(".buttons");
let resultTxt = document.querySelector(".result > p");
let score = document.querySelector(".scoreBoard p:first-child");
let winner = document.querySelector(".scoreBoard p:last-child")
let userImg = document.querySelector(".movement div:first-child img");
let systemImg = document.querySelector(".movement div:last-child img");

btnsContainer.addEventListener("click", (event) => {
    let btn = event.target.closest("button");
    let userAns = btn.getAttribute("id");
    playRound(userAns);

});

function getComputerChoice(){
    let min = 1; // inclusive
    let max = 3; // inclusive

    const systemResponse = Math.floor(Math.random() * (max - min + 1)) + min;

    switch (systemResponse) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

function addImages (user,system){
    userImg.setAttribute("src","resources/"+user+".png");
    systemImg.setAttribute("src","resources/"+system+".png");
}

function addHumanScore(){
    humanScore++;
}

function addComputerScore(){
    computerScore++;
}

function playRound(userAnswer){
    let computerAnswer = getComputerChoice();    
    let movements= "User played "+userAnswer.toUpperCase()+"\nComputer played "+computerAnswer.toUpperCase();
    let systemWins = "System won\n"+movements;
    let userWins = "User won\n"+movements;

    addImages(userAnswer,computerAnswer)

    if (userAnswer == computerAnswer){
        resultTxt.textContent = "Tied\nBoth selected "+computerAnswer.toUpperCase()+"\n  ";
        tied++;
    }

    switch(userAnswer){
        case "rock":
            if(computerAnswer == "paper"){
                addComputerScore();
                resultTxt.textContent = systemWins;
            }
            if(computerAnswer == "scissor"){
                addHumanScore();
                resultTxt.textContent = userWins;
            }
            break;
        case "paper":
            if(computerAnswer == "scissor"){
                addComputerScore();
                resultTxt.textContent = systemWins;
            }
            if(computerAnswer == "rock"){
                addHumanScore();
                resultTxt.textContent = userWins;
            }
            break;
        case "scissor":
            if(computerAnswer == "rock"){
                addComputerScore();
                resultTxt.textContent = systemWins;
            }
            if(computerAnswer == "paper"){
                addHumanScore();
                resultTxt.textContent = userWins;
            }
            break;
    }

    if (humanScore > computerScore){
        winner.textContent = "User is winning";
    } else if (humanScore < computerScore){
        winner.textContent = "System is winning";
    } else if (humanScore == computerScore){
        winner.textContent = "There's currently a tied";
    }

    score.textContent = "\nUser: "+humanScore+"\nSystem: "+computerScore+"\nTies: "+tied;
}




