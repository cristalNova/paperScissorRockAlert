let humanScore = 0;
let computerScore = 0;
let tied = 0;


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

function getHumanChoice(){
    let userAns = prompt("Rock,Paper or Scissor?");
    return userAns.toLowerCase();
}

function addHumanScore(){
    humanScore++;
}

function addComputerScore(){
    computerScore++;
}

function playRound(userAnswer,computerAnswer){
    let movements= "\nUser played "+userAnswer.toUpperCase()+"\nComputer played "+computerAnswer.toUpperCase();
    let systemWins = "System wins"+movements;
    let userWins = "User wins"+movements;

    if (userAnswer == computerAnswer){
        return "Tied\nBoth selected "+computerAnswer.toUpperCase();
        tied++;
    }

    switch(userAnswer){
        case "rock":
            if(computerAnswer == "paper"){
                addComputerScore();
                return systemWins;
            }
            if(computerAnswer == "scissor"){
                addHumanScore();
                return userWins;
            }
            break;
        case "paper":
            if(computerAnswer == "scissor"){
                addComputerScore();
                return systemWins;
            }
            if(computerAnswer == "rock"){
                addHumanScore();
                return userWins;
            }
            break;
        case "scissor":
            if(computerAnswer == "rock"){
                addComputerScore();
                return systemWins;
            }
            if(computerAnswer == "paper"){
                addHumanScore();
                return userWins;
            }
            break;
    }
}

function playGame (rounds){
    let userAnswer = "";
    let computerAnswer = "";
    let resultOfRound = "";

    for(let i = 1; i <= rounds; i++){
        userAnswer = getHumanChoice();
        computerAnswer = getComputerChoice();
        resultOfRound = playRound(userAnswer,computerAnswer);

        alert(resultOfRound);

    }

    let result = "\nUser: "+humanScore+"\nSystem: "+computerScore;

    if (humanScore > computerScore){
        alert("User wins"+result);
    } else if (humanScore < computerScore){
        alert("System wins"+result);
    } else if (humanScore == computerScore){
        alert("Theres a tied"+result);
    }
}

function main(){
    let rounds = prompt("How many rounds do you wanna play?\nPlease enter a number");
    playGame(rounds);
}

main();




