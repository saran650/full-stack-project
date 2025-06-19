const options = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: '🪨 Rock',
  paper: '📄 Paper',
  scissors: '✂️ Scissors'
};

let userScore = 0;
let computerScore = 0;
let totalRounds = 0;

function play(userChoice) {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  totalRounds++;

 
  document.getElementById('choices').innerHTML = `
    You chose: ${emojis[userChoice]} <br>
    Computer chose: ${emojis[computerChoice]}
  `;

  document.getElementById('result').innerHTML = `<strong>${result}</strong>`;


  document.getElementById('scoreboard').innerHTML = `
    Score — You: ${userScore} | Computer: ${computerScore} | Total Rounds: ${totalRounds}
  `;
}
