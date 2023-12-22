const prompt = require('prompt-sync')({sigint: true});

let choices = ['rock', 'paper', 'scissor'];

function main() {

  let playerChoice;

  let getNpcChoice = () => Math.floor(Math.random()*3);


  do {
    playerChoice = prompt('Pick rock, paper, scissor: ').trim().toLowerCase();
  } while (!choices.includes(playerChoice));
  console.clear();

  playerChoice = choices.indexOf(playerChoice);

  let npcChoice = getNpcChoice();
  console.log(playerChoice);
  console.log(npcChoice);

  let template = `Player choose ${choices[playerChoice]} and NPC choose ${choices[npcChoice]}`;

  if (playerChoice > npcChoice || (playerChoice === 3 && npcChoice === 0)) {
    console.log('Player Wins! ' + template);
  } else if (npcChoice > playerChoice || (npcChoice === 3 && playerChoice === 0)) {
    console.log('Player Loses! ' + template);
  } else {
    console.log("It's a draw!")
  }
}

main();