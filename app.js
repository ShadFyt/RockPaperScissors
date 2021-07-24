const scoreboard = document.querySelector("#scoreboard");

const player = {
  name: "Ryan",
  score: parseInt(scoreboard.children[0].innerText),
  options: document.querySelector("#options"),
};

player.options.addEventListener("click", function (e) {
  if (e.target.id != "options") {
    console.log(e.target.id);
  }
});
