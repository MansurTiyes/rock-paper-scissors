function getRandomNumber(min, max){
    let res = Math.floor(Math.random()*(max-min+1))+min;
    return res;
}

function getComputerChoice(){
    let selectedChoice = '';
    let value = getRandomNumber(1,3);
    switch(value){
        case 1: 
            selectedChoice = "rock";
            break;
        case 2:
            selectedChoice = "paper";
            break;
        case 3:
            selectedChoice = "scissors";        
    }
    return selectedChoice;
}

function getUserInput() {
    let input = prompt("Enter your choice: ");
    input = input.toLowerCase();
    return input;
}

function capitilizeLetter(string){
    let str = string.split("!");
    str[0] = str[0].charAt(0).toUpperCase()+str[0].slice(1);
    str[1] = str[1].charAt(1).toUpperCase()+str[1].slice(2);
    let str2 = str.join("! ");
    return str2;
}

function winMessage(getUserInput, getComputerChoice){
    let message = `You win! ${getUserInput} beats ${getComputerChoice}`;
    message = capitilizeLetter(message);
    return message;
}

function loseMessage(getUserInput, getComputerChoice){
    let message = `You lose! ${getComputerChoice} beats ${getUserInput}`;
    message = capitilizeLetter(message);
    return message;
}

function drawMessage(){
    message = "You draw!";
    return message;
}

function gameRound(){
    let win = false;
    let UserInput = getUserInput();
    let ComputerChoice = getComputerChoice();
    if (UserInput=='rock'){
        if (ComputerChoice=='rock'){
            console.log(drawMessage());
        }
        else if (ComputerChoice=='paper'){
            win = false;
            console.log(loseMessage(UserInput, ComputerChoice));
        }
        else {
            win = true;
            console.log(winMessage(UserInput, ComputerChoice));
        }
    }
    else if (UserInput=='paper'){
        if (ComputerChoice=='rock'){
            win = true;
            console.log(winMessage(UserInput, ComputerChoice));
        }
        else if (ComputerChoice=='paper'){
            console.log(drawMessage());
        }
        else{
            win = false;
            console.log(loseMessage(UserInput, ComputerChoice));
        }
    }
    else if (UserInput=='scissors'){
        if (ComputerChoice=='rock'){
            win = false;
            console.log(loseMessage(UserInput, ComputerChoice));
        }
        else if (ComputerChoice=='paper'){
            win = true;
            console.log(winMessage(UserInput, ComputerChoice));
        }
        else {
            console.log(drawMessage());
        }
    }
    else {
        win = undefined;
        //IF win = undefined print to try again
    }
    return win;
}

function game(){
    let userWinScore = 0;
    let compWinScore = 0;
    for(let i = 0; i<5; i++){
        let flag = gameRound();
        if (flag==true){
            userWinScore++;
        }
        else if (flag==undefined){
            console.log("Please enter the existing option: ");
            i--;
        }
        else{
            compWinScore++;
        }
    }
    if (userWinScore>compWinScore){
        console.log("You won!");
    }
    else {
        console.log("You lost!");
    }
    console.log(`Your Score is ${userWinScore}`);
    console.log(`Opponent Score is ${compWinScore}`);
}

game();

