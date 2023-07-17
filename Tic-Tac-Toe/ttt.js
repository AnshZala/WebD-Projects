console.log("Welcome to Tic-Tac-Toe!");

let turn = "X";
let gameOver = false;
const tadaa = new Audio('tadaa.mp3');
const resetAudio = new Audio('reset.mp3');
const error = new Audio('error.mp3');
const beep = new Audio('beep.mp3');

// Chnage turn after every move
const changeturn = ()=> {
    return turn === "X"? "O":"X";
}

// Check for win
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            tadaa.play();
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            gameOver = true;
            document.getElementById('img').style.width = '20vh';
        }
    });
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=> {
        if(gameOver) {
            return;
        }
        if(boxtext.innerText === '') {
            beep.play();
            boxtext.innerText = turn;
            turn = changeturn();
            checkWin();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            } 
        } else {
            error.play();
        }
    });
})

// Reset button
reset.addEventListener('click', ()=> {
    resetAudio.play();
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.getElementById('img').style.width = '0px';
})