const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const winMessage = document.getElementById('win-message');
const restartButton = document.getElementById('restart-button');

let score = 0;
let gameInterval;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    winMessage.style.display = 'none';
    restartButton.style.display = 'none';

    gameInterval = setInterval(randomMole, 1000); 
}
function randomMole() {
    moles.forEach(mole => mole.classList.remove('active'));
    const index = Math.floor(Math.random() * moles.length);
    moles[index].classList.add('active');
}
moles.forEach(mole => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('active')) {
            score++;
            scoreDisplay.textContent = score;
            mole.classList.remove('active');
            if (score >= 5) stopGame();
        }
    });
});
function stopGame() {
    clearInterval(gameInterval);
    moles.forEach(mole => mole.classList.remove('active'));
    winMessage.style.display = 'block';
    restartButton.style.display = 'inline-block';
}
restartButton.addEventListener('click', () => {
    startGame();
});
startGame();