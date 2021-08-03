const scoreboard = document.querySelector("#scoreboard");
const numRounds = document.querySelector("#numRounds");
let rounds = parseInt(numRounds.value);

const selections = {
  rock: {
    paper: false,
    scissor: true,
    rock: "tie",
  },

  paper: {
    rock: true,
    scissor: false,
    paper: "tie",
  },

  scissor: {
    rock: false,
    paper: true,
    scissor: "tie",
  },

  compare: function (playerOption, opponentOption) {
    let matchUp = this[playerOption][opponentOption];
    if (matchUp === true) player.score.innerText++;
    else if (!matchUp) opponent.score.innerText++;
    console.log(playerOption);
    console.log(opponentOption);
  },
};

const player = {
  name: "Ryan",
  score: scoreboard.children[0],
  options: document.querySelector("#options"),
};

const opponent = {
  name: "Opponent",
  score: scoreboard.children[1],
  options: ["rock", "paper", "scissor"],
  option: "",
  choice: function () {
    let randNum = Math.floor(Math.random() * 3);
    this.option = this.options[randNum];
  },
};

player.options.addEventListener("click", function (e) {
  if (e.target.id != "options") {
    opponent.choice();
    selections.compare(e.target.id, opponent.option);
    if (
      parseInt(player.score.innerText) === rounds ||
      parseInt(opponent.score.innerText) === rounds
    ) {
      for (btn of player.options.children) {
        btn.disabled = true;
      }
    }
  }
});

numRounds.addEventListener("change", function (e) {
  console.log(e);
  rounds = parseInt(e.target.value);
});
