// Buttons
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
const goButton = document.getElementById("goBtn");
const restartButton = document.getElementById("restartBtn");

// Images
const playerImage = document.getElementById("playerImage");
const cpuImage = document.getElementById("cpuImage");
const imagePaths = ["images/RockGame.jpg", "images/PaperGame.jpg", "images/ScissorGame.jpg"];

// Texts
const resultText = document.getElementById("result");
resultText.textContent = "Pick a hand gesture";

let playerGesture = "";
const handgestures = ["rock", "paper", "scissor"];

let num = 0;
let intervalID;

function startInterval() {
    intervalID = setInterval(function () {
        if (num < 3) {
            playerImage.src = imagePaths[num];
            cpuImage.src = imagePaths[num];
            num++;
        }
        else {
            num = 0;
        }
    }, 200);
}

startInterval();

function stopInterval() {
    clearInterval(intervalID);
}


rockButton.addEventListener("click", function () {
    stopInterval();

    playerImage.src = imagePaths[0];

    playerImage.style.opacity = 1;

    playerGesture = "rock";

    start();

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
});

paperButton.addEventListener("click", function () {
    stopInterval();

    playerImage.src = imagePaths[1];

    playerImage.style.opacity = 1;

    playerGesture = "paper";

    start();

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
});

scissorButton.addEventListener("click", function () {
    stopInterval();

    playerImage.src = imagePaths[2];

    playerImage.style.opacity = 1;

    playerGesture = "scissor";

    start();

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
});


function start() {
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

    setTimeout(() => {
        resultText.textContent = "Pick a hand gesture";

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorButton.disabled = false;

        startInterval();
    }, 1500);



    checkCondition();
}