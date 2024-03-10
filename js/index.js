const game = document.querySelector(".game");
const res = document.querySelector(".res");
const btnGame = document.querySelector(".new-game");
const fields = document.querySelectorAll(".field");
let step = false;
const circle = '<svg class="circle"><circle r="100" cx="116" cy="116" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round"/></svg>';
const cross = '<svg class="cross"><line class="first" x1="15" y1="15" x2="220" y2="220" stroke="red" stroke-width="10" stroke-linecap="round"/> <line class="second" x1 = "220" y1 = "15" x2 = "15" y2 = "220" stroke = "red" stroke-width="10" stroke-linecap="round" /></svg>';

function stepCross(target) {
   target.innerHTML = cross;
   const crossAudio = new Audio("audio/cross.mp3");
   crossAudio.play();
}

function stepZero(target) {
    target.innerHTML = circle;
    const zeroAudio = new Audio("audio/zero.mp3");
    zeroAudio.play();
}

function init(e) {
    if (!step) stepCross(e.target);
    else stepZero(e.target);
    step = !step;
    win();
}

function newGame() {

}

function win() {

}

btnGame.addEventListener("click", newGame);
game.addEventListener("click", init);