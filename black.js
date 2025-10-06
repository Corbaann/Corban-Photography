let firstCard = parseFloat(document.getElementById("card1").value);
let secondCard = parseFloat(document.getElementById("card2").value);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message");

function startGame() {
    let message = "";
    if (sum === 21) {
        message = "black jack";
        hasBlackJack = true;
    } else if (sum < 21) {
        message = "do you want to draw a new card";
    } else if (sum > 21) {
        message = "your out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}
