// DOM elements
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');
const outcome = document.createElement('div');
const playerScore = document.createElement('div');
const npcScore = document.createElement('div');

// Scores

let choices = ['rock', 'paper', 'scissor'];
let scores = {
  player: 0,
  npc: 0
}

let winner; let playerChoice, npcChoice;

const title = (() => {
  // Header
  const header = document.createElement('div');
  document.body.appendChild(header);
  header.setAttribute('id', 'header');
  header.style.cssText = 'text-align: center; margin: 20px; border: 5px solid pink; font-size: 30px; border-radius: 25px; padding: 20px;';
  header.textContent = 'Rock, Paper and Scissor!'

  // Scoreboard
  const scoreBoard = document.createElement('div');
  scoreBoard.style.cssText = 'display:flex; gap: 30px; margin: 20px;';
  document.body.appendChild(scoreBoard);
  scoreBoard.appendChild(playerScore);
  scoreBoard.appendChild(npcScore);
  updateScores();
})();

// populate DOM
function populateDOM(button, name) {

  document.body.appendChild(button);

  button.setAttribute('id', name);
  button.style.cssText = 'margin: 20px;'

  if (name.includes('Btn')) {

    // remove Btn
    name = name.replace('Btn', '');
    // capitalize
    name = name.charAt(0).toUpperCase() + name.slice(1);
    button.textContent = name;
  }
};

  // for debugging
  // console.log(Object.keys({rockBtn})[0]);
  // console.log(Object.keys({paperBtn})[0].replace('Btn', ''));
populateDOM(rockBtn, Object.keys({rockBtn})[0]);
populateDOM(paperBtn, Object.keys({paperBtn})[0]);
populateDOM(scissorBtn, Object.keys({scissorBtn})[0]);
populateDOM(outcome, Object.keys({outcome})[0]);


// button functionalities
rockBtn.addEventListener('click', (e) => {

  playerChoice = 'rock';
  let result = playGame(playerChoice);
  updateScores();
})

paperBtn.addEventListener('click', (e) => {

  playerChoice = 'paper';
  let result = playGame(playerChoice);
  updateScores();
})

scissorBtn.addEventListener('click', (e) => {

  playerChoice = 'scissor';
  let result = playGame(playerChoice);
  updateScores();
})

// playing the game
function playGame(playerChoice) {
  playerChoice = choices.indexOf(playerChoice);
  npcChoice = (() => Math.floor(Math.random()*3))();

    // debug
    console.log(choices[playerChoice]);
    console.log(choices[npcChoice]);

  if ((playerChoice === 1 && npcChoice === 0) || (playerChoice === 2 && npcChoice === 1) || (playerChoice === 0 && npcChoice === 2)) {
    scores.player++;
    winner = 'player';
    console.log(playerChoice);
    outcome.textContent = `Player chooses ${choices[playerChoice]}. NPC chooses ${choices[npcChoice]}.\nThe winner is ${winner}!`;
    setTimeout(function () {
      outcome.textContent = ''
    }, 20000);

  } else if (playerChoice === npcChoice) {
    outcome.textContent = `It's a draw! Try again.`;
    setTimeout(function () {
      outcome.textContent = ''
    }, 20000);
    
  } else {
    scores.npc++;
    winner = 'NPC';
    console.log(playerChoice);
    outcome.textContent = `Player chooses ${choices[playerChoice]}. NPC chooses ${choices[npcChoice]}.\nThe winner is ${winner}!`;
    setTimeout(function () {
      outcome.textContent = ''
    }, 20000);
  }

  //check if player or npc has won 5 games
  switch(5) {
    case (Object.values(scores)[0]):
      outcome.textContent = `Player scored 5 in a row! You've won the game`;
      break;
    case (Object.values(scores)[1]):
      outcome.textContent = `NPC scored 5 in a row! You've lost the game`;
      break;
  };

}

// update scores
function updateScores() {
  playerScore.textContent = `Player Score : ${scores.player}`;
  npcScore.textContent = `NPC Score : ${scores.npc}`;
}