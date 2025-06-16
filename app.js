// Buttons
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
const goButton = document.getElementById("goBtn");
const restartButton = document.getElementById("restartBtn");

// Images
const playerImage = document.getElementById("playerImage");
const cpuImage = document.getElementById("cpuImage");

// Texts
const resultText = document.getElementById("result");

playerImage.style.opacity = 0;
cpuImage.style.opacity = 0;

resultText.textContent = "";

let playerGesture = "";
const handgestures = ["rock", "paper", "scissor"];

rockButton.addEventListener("click", function () {
    playerImage.src = "images/RockGame.jpg";

    playerImage.style.opacity = 1;

    playerGesture = "rock";
});

paperButton.addEventListener("click", function () {
    playerImage.src = "images/PaperGame.jpg";

    playerImage.style.opacity = 1;

    playerGesture = "paper";
});

scissorButton.addEventListener("click", function () {
    playerImage.src = "images/ScissorGame.jpg";

    playerImage.style.opacity = 1;

    playerGesture = "scissor";
});

goButton.addEventListener("click", function () {
    let cpuGesture = handgestures[Math.floor(Math.random() * 3)];

    console.log(cpuGesture);

    if (cpuGesture === "rock") {
        cpuImage.src = "images/RockGame.jpg";
    }
    else if (cpuGesture === "paper") {
        cpuImage.src = "images/PaperGame.jpg";
    }
    else if (cpuGesture === "scissor") {
        cpuImage.src = "images/ScissorGame.jpg";
    }

    cpuImage.style.opacity = 1;

    function checkCondition() {
        if (playerGesture === cpuGesture) {
            console.log("It's a tie!");
            resultText.textContent = "It's a tie!";
        }
        else if (playerGesture === "rock" && cpuGesture === "scissor") {
            console.log("Player Win!");
            resultText.textContent = "Player Win!";
        }
        else if (playerGesture === "rock" && cpuGesture === "paper") {
            console.log("Player Lose!");
            resultText.textContent = "Player Lose!";
        }
        else if (playerGesture === "paper" && cpuGesture === "rock") {
            console.log("Player Win!");
            resultText.textContent = "Player Win!";
        }
        else if (playerGesture === "paper" && cpuGesture === "scissor") {
            console.log("Player Lose!");
            resultText.textContent = "Player Lose!";
        }
        else if (playerGesture === "scissor" && cpuGesture === "paper") {
            console.log("Player Win!");
            resultText.textContent = "Player Win!";
        }
        else if (playerGesture === "scissor" && cpuGesture === "rock") {
            console.log("Player Lose!");
            resultText.textContent = "Player Lose!";
        }
    }

    checkCondition();
});

restartButton.addEventListener("click", function () {
    playerImage.style.opacity = 0;
    cpuImage.style.opacity = 0;

    resultText.textContent = "";
})