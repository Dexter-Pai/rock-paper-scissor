const prompt = require('prompt-sync')({sigint: true});

let choices = ['rock', 'paper', 'scissor'];
let scores = {
  player: 0,
  npc: 0
}

function main() {

  let playerChoice;

  let getNpcChoice = () => Math.floor(Math.random()*3);
  console.clear();


  do {
    playerChoice = prompt('Pick rock, paper, scissor: ').trim().toLowerCase();
  } while (!choices.includes(playerChoice));

  playerChoice = choices.indexOf(playerChoice);

  let npcChoice = getNpcChoice();
  
  // this is for debugging purposes
  // console.log(playerChoice);
  // console.log(npcChoice);

  console.log('\n');

  let template = `Player chooses ${choices[playerChoice]} and NPC choose ${choices[npcChoice]}`;

  if (playerChoice > npcChoice || (playerChoice === 3 && npcChoice === 0)) {
    console.log('Player Wins! ' + template);
    scores.player++;
  } else if (npcChoice > playerChoice || (npcChoice === 3 && playerChoice === 0)) {
    console.log('Player Loses! ' + template);
    scores.npc++;
  } else {
    console.log("It's a draw!")
  }
  // debug
  // console.log(scores.player);
  // console.log(scores.npc);

  switch(5) {
    case (scores.player):
      console.log('You win the game!');
      return 0;
      break;
    case (scores.npc):
      console.log('You lose!');
      return 0;
      break;
  }
  console.log('\n')
  let rematch;
  rematch = prompt('Do you want to play again?(y/n): ');
  console.clear();
  (rematch.trim().toLowerCase().includes('y') === true) ? main() : process.exit();
}

main();