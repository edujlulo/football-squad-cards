const players = [
  { name: "Víctor Valdés", position: "goalkeeper", isCaptain: false },
  { name: "José Manuel Pinto", position: "goalkeeper", isCaptain: false },
  { name: "Rubén Miño", position: "goalkeeper", isCaptain: false },
  { name: "Oier Olazábal", position: "goalkeeper", isCaptain: false },
  { name: "Dani Alves", position: "defender", isCaptain: false },
  { name: "Gerard Piqué", position: "defender", isCaptain: false },
  { name: "Carles Puyol", position: "defender", isCaptain: true },
  { name: "Javier Mascherano", position: "midfielder", isCaptain: false },
  { name: "Eric Abidal", position: "defender", isCaptain: false },
  { name: "Maxwell", position: "defender", isCaptain: false },
  { name: "Sergio Busquets", position: "midfielder", isCaptain: false },
  { name: "Xavi Hernández", position: "midfielder", isCaptain: false },
  { name: "Andrés Iniesta", position: "midfielder", isCaptain: false },
  { name: "Seydou Keita", position: "midfielder", isCaptain: false },
  { name: "Ibrahim Afellay", position: "forward", isCaptain: false },
  { name: "David Villa", position: "forward", isCaptain: false },
  { name: "Lionel Messi", position: "forward", isCaptain: false },
  { name: "Pedro Rodríguez", position: "forward", isCaptain: false },
  { name: "Jeffrén Suárez", position: "forward", isCaptain: false },
  { name: "Bojan Krkić", position: "forward", isCaptain: false },
  { name: "Thiago Alcántara", position: "midfielder", isCaptain: false },
  { name: "Sergi Roberto", position: "midfielder", isCaptain: false },
  { name: "Marc Bartra", position: "defender", isCaptain: false },
  { name: "Jonathan dos Santos", position: "midfielder", isCaptain: false },
];

const footballTeam = {
  team: "Barcelona FC",
  year: 2010,
  headCoach: "Pep Guardiola",
  players,
};

const team = document.getElementById("team");
team.textContent = footballTeam.team;

const year = document.getElementById("year");
year.textContent = footballTeam.year;

const headCoach = document.getElementById("head-coach");
headCoach.textContent = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

const dropdownMenu = document.getElementById("players");

function captainMessage(player) {
  return player.isCaptain ? "(Captain)" : "";
}

dropdownMenu.addEventListener("change", filterPlayers);

document.addEventListener("DOMContentLoaded", () =>
  players.forEach(showPlayers)
);

function cleanHTML() {
  playerCards.innerHTML = "";
}

function filterPlayers(opt) {
  cleanHTML();

  if (opt.target.value === "all") {
    players.forEach(showPlayers);
  } else {
    const filteredPlayers = players.filter(
      (p) => p.position === opt.target.value
    );
    filteredPlayers.forEach(showPlayers);
  }
}

function showPlayers(player) {
  const playerCard = document.createElement("div");
  const name = document.createElement("h2");
  name.textContent = captainMessage(player) + " " + player.name;
  playerCard.classList.add("player-card");
  const positionMessage = document.createElement("p");
  positionMessage.innerText = "Position: " + `${player.position}`;
  playerCards.appendChild(playerCard);
  playerCard.appendChild(name);
  playerCard.appendChild(positionMessage);
}
