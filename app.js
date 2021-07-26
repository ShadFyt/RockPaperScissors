const scoreboard = document.querySelector("#scoreboard");
const numRounds = document.querySelector("#numRounds");
let rounds = numRounds.value;

const player = {
  name: "Ryan",
  score: scoreboard.children[0],
  options: document.querySelector("#options"),
};

const opponent = {
  name: "Opponent",
  score: scoreboard.children[1],
  options: ["rock", "paper", "scissor"],

  choice: function () {
    let randNum = Math.floor(Math.random() * 3);
    return this.options[randNum];
  },
};

player.options.addEventListener("click", function (e) {
  if (e.target.id != "options") {
    player.score.innerText++;
    console.log(e.target.id);
    console.log(opponent.choice());
  }
});

numRounds.addEventListener("change", function (e) {
  console.log(e);
  rounds = e.target.value;
});
