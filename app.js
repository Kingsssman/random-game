const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SIRIUS = 'SIRIUS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';
const RESULT_PlAYER_WIN = 'PLAYER_WIN';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SIRIUS}`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SIRIUS) {
    alert(`Choice another value! We chose ${DEFAULT_USER_CHOICE}`);
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.37) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SIRIUS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === SIRIUS) ||
    (pChoice === SIRIUS && cChoice === ROCK)
  ) {
    return RESULT_PlAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(playerChoice, computerChoice);

  let message = `You have ${playerChoice ||
    DEFAULT_USER_CHOICE} vs ${computerChoice} `;
  if (winner === RESULT_DRAW) {
    message += `draw`;
  } else if (winner === RESULT_COMPUTER_WIN) {
    message += `lost`;
  } else {
    message += `win`;
  }

  alert(message);
  gameIsRunning = false;
});

/**
 *  Test a new features
 * @param {*} resultHandler
 * @param  {...any} numbers
 */

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const el of numbers) {
    sum += validateNumber(el);
  }

  resultHandler(sum);
};

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const el of numbers) {
    sum -= el;
  }

  resultHandler(sum);
};

const showResult = (messageText, result) => {
  console.log(messageText + ' ' + result);
};

sumUp(showResult.bind(this, 'add:'), 1, 2, 3, 4, 5, 5);
subtractUp(showResult.bind(this, 'sub:'), 1, 2, 3, 4, 5, 5);
