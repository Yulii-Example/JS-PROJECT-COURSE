const game = document.querySelector(".game");
const res = document.querySelector(".res");
const btnGame = document.querySelector(".new-game");
const fields = document.querySelectorAll(".field");
let count = 0;
let step = false;
const circle = '<svg class="circle"><circle r="100" cx="116" cy="116" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round"/></svg>';
const cross = '<svg class="cross"><line class="first" x1="15" y1="15" x2="220" y2="220" stroke="red" stroke-width="10" stroke-linecap="round"/> <line class="second" x1 = "220" y1 = "15" x2 = "15" y2 = "220" stroke = "red" stroke-width="10" stroke-linecap="round" /></svg>';

function stepCross(target) {
    target.innerHTML = cross;
    target.classList.add("x");
    const crossAudio = new Audio("audio/cross.mp3");
    crossAudio.play();
    count++;
}

function stepZero(target) {
    target.innerHTML = circle;
    target.classList.add("o");
    const zeroAudio = new Audio("audio/zero.mp3");
    zeroAudio.play();
    count++;
}

function init(e) {
    if (!step) stepCross(e.target);
    else stepZero(e.target);
    step = !step;
    win();
}

function newGame() {
step = false;
count = 0
res.innerText = "";
fields.forEach(item => {
    item.innerHTML = "";
    item.classList.remove("x", "o", "active");
});
game.addEventListener("click", init)
};

function win() {
    const comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    for (let i = 0; i < comb.length; i++) {
        if (fields[comb[i][0]].classList.contains("x") &&
            fields[comb[i][1]].classList.contains("x") &&
            fields[comb[i][2]].classList.contains("x")) {
            setTimeout(() => {
                fields[comb[i][0]].classList.add("active");
                fields[comb[i][1]].classList.add("active");
                fields[comb[i][2]].classList.add("active");
                res.innerText = "X WON!"
            }, 1500);
            game.removeEventListener("click", init);
        }

        else if (fields[comb[i][0]].classList.contains("o") &&
            fields[comb[i][1]].classList.contains("o") &&
            fields[comb[i][2]].classList.contains("o")) {
            setTimeout(() => {
                fields[comb[i][0]].classList.add("active");
                fields[comb[i][1]].classList.add("active");
                fields[comb[i][2]].classList.add("active");
                res.innerText = "O WON!"
            }, 1500);
            game.removeEventListener("click", init);
        }
        else if(count == 9) {
            res.innerText = "DEAD HEAT";
            game.removeEventListener("click", init);
        }
    }

}

btnGame.addEventListener("click", newGame);
game.addEventListener("click", init);