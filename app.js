let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScorePara = document.getElementById('user-score');
const computerScorePara = document.getElementById('computer-score');

const generateComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = 'It is a draw. Play again!';
  msg.style.backgroundColor = '#081b31';
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = 'green';
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `Computer wins! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = 'red';
  }
};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
    return;
  }

  let userWin = false;
  if (userChoice === 'rock') {
    userWin = computerChoice === 'scissors';
  } else if (userChoice === 'paper') {
    userWin = computerChoice === 'rock';
  } else if (userChoice === 'scissors') {
    userWin = computerChoice === 'paper';
  }

  showWinner(userWin, userChoice, computerChoice);
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const choiceId = choice.getAttribute('id');
    playGame(choiceId);
  });
});