const buttons = document.querySelectorAll("#btn");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");

const darkMode = document.querySelector("#dark-mode");

const reset = document.querySelector(".reset");
const winText = document.querySelector("#win-text");
const turnText = document.querySelector("#turn-text");

//Audio
const xSound = document.getElementById("X-sound");
const oSound = document.getElementById("O-sound");
const winSound = document.getElementById("win-sound");

//Scoreboard
const xScoreText = document.getElementById("X-score");
const oScoreText = document.getElementById("O-score");

let xScore = 0;
let oScore = 0;

let isDarkMode = true;

let turn = "X";

turnText.innerHTML = "Turn: " + turn;

function highlightWinningCombo(buttons) {
    buttons.forEach(button => {
        button.classList.add('winning-effect');
        button.style.backgroundColor = '#90EE90'; // Light green background
        button.style.color = '#000'; // Black text
    });
}

function handleTurn() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.innerHTML === "") {
                button.innerHTML = turn;

                if (turn === "X") {
                    turn = "O";
                    turnText.innerHTML = "Turn: " + turn;
                    xSound.play();
                } else {
                    turn = "X";
                    turnText.innerHTML = "Turn: " + turn;
                    oSound.play();
                }
            }

            
            if (
                (btn1.innerHTML === "X" && btn2.innerHTML === "X" && btn3.innerHTML === "X") ||
                (btn4.innerHTML === "X" && btn5.innerHTML === "X" && btn6.innerHTML === "X") ||
                (btn7.innerHTML === "X" && btn8.innerHTML === "X" && btn9.innerHTML === "X") ||
                (btn1.innerHTML === "X" && btn4.innerHTML === "X" && btn7.innerHTML === "X") ||
                (btn2.innerHTML === "X" && btn5.innerHTML === "X" && btn8.innerHTML === "X") ||
                (btn3.innerHTML === "X" && btn6.innerHTML === "X" && btn9.innerHTML === "X") ||
                (btn1.innerHTML === "X" && btn5.innerHTML === "X" && btn9.innerHTML === "X") ||
                (btn3.innerHTML === "X" && btn5.innerHTML === "X" && btn7.innerHTML === "X")
            ) {
                winText.innerHTML = "X wins!";
                winSound.volume = 0.8;
                winSound.play();
                xScore++;
                xScoreText.innerHTML = "X: " + xScore;
                turnText.innerHTML = "";
                buttons.forEach((button) => (button.disabled = true));

                // Add highlighting logic
                if (btn1.innerHTML === "X" && btn2.innerHTML === "X" && btn3.innerHTML === "X") {
                    highlightWinningCombo([btn1, btn2, btn3]);
                    [btn4, btn5, btn6, btn7, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn4.innerHTML === "X" && btn5.innerHTML === "X" && btn6.innerHTML === "X") {
                    highlightWinningCombo([btn4, btn5, btn6]);
                    [btn1, btn2, btn3, btn7, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn7.innerHTML === "X" && btn8.innerHTML === "X" && btn9.innerHTML === "X") {
                    highlightWinningCombo([btn7, btn8, btn9]);
                    [btn1, btn2, btn3, btn4, btn5, btn6].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn1.innerHTML === "X" && btn4.innerHTML === "X" && btn7.innerHTML === "X") {
                    highlightWinningCombo([btn1, btn4, btn7]);
                    [btn2, btn3, btn5, btn6, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn2.innerHTML === "X" && btn5.innerHTML === "X" && btn8.innerHTML === "X") {
                    highlightWinningCombo([btn2, btn5, btn8]);
                    [btn1, btn3, btn4, btn6, btn7, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn3.innerHTML === "X" && btn6.innerHTML === "X" && btn9.innerHTML === "X") {
                    highlightWinningCombo([btn3, btn6, btn9]);
                    [btn1, btn2, btn4, btn5, btn7, btn8].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn1.innerHTML === "X" && btn5.innerHTML === "X" && btn9.innerHTML === "X") {
                    highlightWinningCombo([btn1, btn5, btn9]);
                    [btn2, btn3, btn4, btn6, btn7, btn8].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn3.innerHTML === "X" && btn5.innerHTML === "X" && btn7.innerHTML === "X") {
                    highlightWinningCombo([btn3, btn5, btn7]);
                    [btn1, btn2, btn4, btn6, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                }
            } else if (
                (btn1.innerHTML === "O" && btn2.innerHTML === "O" && btn3.innerHTML === "O") ||
                (btn4.innerHTML === "O" && btn5.innerHTML === "O" && btn6.innerHTML === "O") ||
                (btn7.innerHTML === "O" && btn8.innerHTML === "O" && btn9.innerHTML === "O") ||
                (btn1.innerHTML === "O" && btn4.innerHTML === "O" && btn7.innerHTML === "O") ||
                (btn2.innerHTML === "O" && btn5.innerHTML === "O" && btn8.innerHTML === "O") ||
                (btn3.innerHTML === "O" && btn6.innerHTML === "O" && btn9.innerHTML === "O") ||
                (btn1.innerHTML === "O" && btn5.innerHTML === "O" && btn9.innerHTML === "O") ||
                (btn3.innerHTML === "O" && btn5.innerHTML === "O" && btn7.innerHTML === "O")
            ) {
                winText.innerHTML = "O wins!";
                winSound.volume = 0.8;
                winSound.play();
                oScore++;
                oScoreText.innerHTML = "O: " + oScore;
                turnText.innerHTML = "";
                buttons.forEach((button) => (button.disabled = true)); 

                // Add highlighting logic
                if (btn1.innerHTML === "O" && btn2.innerHTML === "O" && btn3.innerHTML === "O") {
                    highlightWinningCombo([btn1, btn2, btn3]);
                    [btn4, btn5, btn6, btn7, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn4.innerHTML === "O" && btn5.innerHTML === "O" && btn6.innerHTML === "O") {
                    highlightWinningCombo([btn4, btn5, btn6]);
                    [btn1, btn2, btn3, btn7, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn7.innerHTML === "O" && btn8.innerHTML === "O" && btn9.innerHTML === "O") {
                    highlightWinningCombo([btn7, btn8, btn9]);
                    [btn1, btn2, btn3, btn4, btn5, btn6].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn1.innerHTML === "O" && btn4.innerHTML === "O" && btn7.innerHTML === "O") {
                    highlightWinningCombo([btn1, btn4, btn7]);
                    [btn2, btn3, btn5, btn6, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn2.innerHTML === "O" && btn5.innerHTML === "O" && btn8.innerHTML === "O") {
                    highlightWinningCombo([btn2, btn5, btn8]);
                    [btn1, btn3, btn4, btn6, btn7, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn3.innerHTML === "O" && btn6.innerHTML === "O" && btn9.innerHTML === "O") {
                    highlightWinningCombo([btn3, btn6, btn9]);
                    [btn1, btn2, btn4, btn5, btn7, btn8].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn1.innerHTML === "O" && btn5.innerHTML === "O" && btn9.innerHTML === "O") {
                    highlightWinningCombo([btn1, btn5, btn9]);
                    [btn2, btn3, btn4, btn6, btn7, btn8].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                } else if (btn3.innerHTML === "O" && btn5.innerHTML === "O" && btn7.innerHTML === "O") {
                    highlightWinningCombo([btn3, btn5, btn7]);
                    [btn1, btn2, btn4, btn6, btn8, btn9].forEach(btn => btn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)');
                }
                
            } else if ([...buttons].every(button => button.innerHTML === "X" || button.innerHTML === "O")) {
                winText.innerHTML = "Draw!";
                turnText.innerHTML = "";
                buttons.forEach((button) => (button.disabled = true));
            }
        });
    });

}

function darkModeToggle() {
    darkMode.addEventListener("click", () => {
        document.body.style.backgroundColor = isDarkMode ? 'rgb(204, 204, 204)' : 'rgb(53, 53, 53)';
        winText.style.color = isDarkMode ? 'black' : 'white';
        turnText.style.color = isDarkMode ? 'black' : 'white';
        xScoreText.style.color = isDarkMode ? 'black' : 'white';
        oScoreText.style.color = isDarkMode ? 'black' : 'white';
        document.getElementById("scoreboard-title").style.color = isDarkMode ? 'black' : 'white';
        darkMode.style.filter = isDarkMode ? 'invert(0%)' : 'invert(100%)';
        isDarkMode = !isDarkMode;
    });
}



function toggleMouseHover() {
    darkMode.addEventListener("mouseover", () => {
        if (isDarkMode) { 
            darkMode.style.filter = 'invert(80%)';
        } else  {
            darkMode.style.filter = 'invert(20%)';
        }
    })

    darkMode.addEventListener("mouseout", () => {
        if (isDarkMode) {
            darkMode.style.filter = 'invert(100%)';
        } else {
            darkMode.style.filter = 'invert(0%)';
        }
    })
}

reset.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
        winText.innerHTML = "";
        turn = "X";
        turnText.innerHTML = "Turn: " + turn;
        button.style.backgroundColor = 'white';
        button.classList.remove('winning-effect');
    });
});

handleTurn();
toggleMouseHover();
darkModeToggle();

