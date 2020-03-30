const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SIRIUS = 'SIRIUS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SIRIUS}`, '').toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SIRIUS) {
        alert(`Choice another value! We chose ${DEFAULT_USER_CHOICE}`);
        return DEFAULT_USER_CHOICE;
    }

    return selection;
};

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.37) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SIRIUS;
    }
};

const getWinner = function(pChoice, cChoice) {};

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playerSelection);
    console.log(computerChoice);
});
