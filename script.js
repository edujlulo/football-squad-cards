const players = [
  {
    name: "Víctor Valdés",
    position: "goalkeeper",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "José Manuel Pinto",
    position: "goalkeeper",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Rubén Miño",
    position: "goalkeeper",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Oier Olazábal",
    position: "goalkeeper",
    isCaptain: false,
    country: "🇪🇸",
  },
  { name: "Dani Alves", position: "defender", isCaptain: false, country: "🇧🇷" },
  {
    name: "Gerard Piqué",
    position: "defender",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Carles Puyol",
    position: "defender",
    isCaptain: true,
    country: "🇪🇸",
  },
  {
    name: "Javier Mascherano",
    position: "midfielder",
    isCaptain: false,
    country: "🇦🇷",
  },
  {
    name: "Eric Abidal",
    position: "defender",
    isCaptain: false,
    country: "🇫🇷",
  },
  { name: "Maxwell", position: "defender", isCaptain: false, country: "🇧🇷" },
  {
    name: "Sergio Busquets",
    position: "midfielder",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Xavi Hernández",
    position: "midfielder",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Andrés Iniesta",
    position: "midfielder",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Seydou Keita",
    position: "midfielder",
    isCaptain: false,
    country: "🇲🇱",
  },
  {
    name: "Ibrahim Afellay",
    position: "forward",
    isCaptain: false,
    country: "🇳🇱",
  },
  { name: "David Villa", position: "forward", isCaptain: false, country: "🇪🇸" },
  {
    name: "Lionel Messi",
    position: "forward",
    isCaptain: false,
    country: "🇦🇷",
  },
  {
    name: "Pedro Rodríguez",
    position: "forward",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Jeffrén Suárez",
    position: "forward",
    isCaptain: false,
    country: "🇻🇪",
  },
  { name: "Bojan Krkić", position: "forward", isCaptain: false, country: "🇪🇸" },
  {
    name: "Thiago Alcántara",
    position: "midfielder",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Sergi Roberto",
    position: "midfielder",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Marc Bartra",
    position: "defender",
    isCaptain: false,
    country: "🇪🇸",
  },
  {
    name: "Jonathan dos Santos",
    position: "midfielder",
    isCaptain: false,
    country: "🇲🇽",
  },
];

const footballTeam = {
  team: "FC Barcelona",
  year: "2010 - 2011",
  headCoach: "Pep Guardiola 🇪🇸",
  players,
};

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
  playerCard.classList.add("player-card");

  const playerInfo = document.createElement("div");
  playerInfo.classList.add("player-info");

  const textContainer = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = `${player.name} ${captainMessage(player)}`;

  const positionMessage = document.createElement("p");
  positionMessage.textContent = `Position: ${player.position}`;

  textContainer.appendChild(name);
  textContainer.appendChild(positionMessage);

  const flag = document.createElement("span");
  flag.classList.add("flag");
  flag.textContent = player.country;

  playerInfo.appendChild(textContainer);
  playerInfo.appendChild(flag);

  playerCard.appendChild(playerInfo);
  playerCards.appendChild(playerCard);
}
