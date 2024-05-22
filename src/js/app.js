(() => {
  let activeHole = 1,
    previouslyHole = activeHole,
    playing = true,
    getHole = (index) => document.getElementById(`hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) => (getHole(index).className = "hole hole_has-mole");

  const next = () => {
    if (!playing) {
      return;
    }
    deactivateHole(activeHole);
    while (activeHole === previouslyHole) {
      previouslyHole = Math.floor(1 + Math.random() * 16);
    }
    activeHole = previouslyHole;
    activateHole(activeHole);
  };

  setInterval(next, 800);
})();
