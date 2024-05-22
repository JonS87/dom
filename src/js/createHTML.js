const gameContainer = document.createElement("div");
gameContainer.classList.add("hole-game");

for (let i = 1; i <= 16; i++) {
  const hole = document.createElement("div");
  hole.classList.add("hole");
  hole.id = `hole${i}`;

  if (i === 1) {
    hole.classList.add("hole_has-mole");
  }
  gameContainer.appendChild(hole);
}

document.body.appendChild(gameContainer);
