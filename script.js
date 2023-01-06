let UserInput;
let ComputerChoice;
let playerScore = 0;
let computerScore = 0;

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

function capitilizeLetter(string){
    let str = string.split("!");
    str[0] = str[0].charAt(0).toUpperCase()+str[0].slice(1);
    str[1] = str[1].charAt(1).toUpperCase()+str[1].slice(2);
    let str2 = str.join("! ");
    return str2;
}

function winDisplay(UserInput, ComputerChoice){
    const messageArea = document.querySelector('.messageArea');
    const winSentence = document.createElement('div');
    winSentence.classList.add('message');
    winSentence.textContent = winMessage(UserInput, ComputerChoice);

    messageArea.appendChild(winSentence);
}

function loseDisplay(UserInput, ComputerChoice){
    const messageArea = document.querySelector('.messageArea');
    const loseSentence = document.createElement('div');
    loseSentence.classList.add('message');
    loseSentence.textContent = loseMessage(UserInput, ComputerChoice);

    messageArea.appendChild(loseSentence);
}

function drawDisplay(){
    const messageArea = document.querySelector('.messageArea');
    const drawSentence = document.createElement('div');
    drawSentence.classList.add('message');
    drawSentence.textContent = drawMessage();

    messageArea.appendChild(drawSentence);
}

function messageRemove(){
    const message = document.querySelector('.message');
    message.remove();
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

function lastWinDisplay(){
    const messageArea = document.querySelector('.messageArea');
    const lastWinMessage = document.createElement('div');
    lastWinMessage.classList.add('message');
    lastWinMessage.textContent = "You Win The Game!";

    messageArea.appendChild(lastWinMessage);
}

function lastLoseDisplay(){
    const messageArea = document.querySelector('.messageArea');
    const lastLoseMessage = document.createElement('div');
    lastLoseMessage.classList.add('message');
    lastLoseMessage.textContent = "You Lose The Game!";

    messageArea.appendChild(lastLoseMessage);
}

function playerScoreUpdate(playerScore){
    const playerScoreUI = document.querySelector('.playerScoreUI');
    playerScoreUI.textContent = playerScore;
}

function computerScoreUpdate(computerScore){
    const computerScoreUI = document.querySelector('.computerScoreUI');
    computerScoreUI.textContent = computerScore;
}

function addResetButton(){
    const message = document.querySelector('.message');
    const resetButton = document.createElement('button');
    resetButton.setAttribute('id','resetStyle');
    resetButton.textContent = "RESET";

    message.appendChild(resetButton);
}

function removeResetButton(){
    const resetStyle = document.querySelector('#resetStyle');
    resetStyle.remove();
}

function resetButtonClickEvent(){
    const resetStyle = document.querySelector('#resetStyle');
    resetStyle.addEventListener('click',function(e){
        playerScore = 0;
        computerScore = 0;
        playerScoreUpdate(playerScore);
        computerScoreUpdate(computerScore);
        removeResetButton();
    });
}

function gameRound(UserInput, ComputerChoice){
    messageRemove();
    ComputerChoice = getComputerChoice();
    if (UserInput=='rock'){
        if (ComputerChoice=='rock'){
            drawDisplay();
        }
        else if (ComputerChoice=='paper'){
            loseDisplay(UserInput, ComputerChoice);
            computerScore++;
            computerScoreUpdate(computerScore);
        }
        else {
            winDisplay(UserInput, ComputerChoice);
            playerScore++;
            playerScoreUpdate(playerScore);
        }
    }
    else if (UserInput=='paper'){
        if (ComputerChoice=='rock'){
            winDisplay(UserInput, ComputerChoice);
            playerScore++;
            playerScoreUpdate(playerScore);
        }
        else if (ComputerChoice=='paper'){
            drawDisplay();
        }
        else{
            loseDisplay(UserInput, ComputerChoice);
            computerScore++;
            computerScoreUpdate(computerScore);
        }
    }
    else if (UserInput=='scissors'){
        if (ComputerChoice=='rock'){
            loseDisplay(UserInput, ComputerChoice);
            computerScore++;
            computerScoreUpdate(computerScore);
        }
        else if (ComputerChoice=='paper'){
            winDisplay(UserInput, ComputerChoice);
            playerScore++;
            playerScoreUpdate(playerScore);
        }
        else {
            drawDisplay();
        }
    }

    if (playerScore==5){
        messageRemove();
        lastWinDisplay();
        addResetButton();
        resetButtonClickEvent();
    }
    else if (computerScore==5){
        messageRemove();
        lastLoseDisplay();
        addResetButton();
        resetButtonClickEvent();
    }
}


const buttons = document.querySelectorAll('button');

for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('mouseenter', function(e){
        this.classList.add('hoverAnimation');
    })
    buttons[i].addEventListener('mouseleave', function(e){
        setTimeout(function(){
            this.classList.remove('hoverAnimation');
        }.bind(this),100)
    })
}

for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        const sound = document.querySelector('.sound');
        sound.currentTime = 0;
        sound.play();
        const img = document.querySelectorAll('img');
        UserInput = img[i].alt;

        gameRound(UserInput, ComputerChoice);
    });
}


