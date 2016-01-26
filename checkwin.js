//this file is temporary, i (mikat) will be coding the CheckWinners() function here :)

winningScenarios = [
  ["1","2","3"], //left to right
  ["4","5","6"],
  ["7","8","9"],
  ["1","4","7"], //top to bottom
  ["2","5","8"],
  ["3","6","9"],
  ["1","5","9"], //diagonal
  ["3","5","7"]
];

function innertext(id) {
  return document.getElementById(id).innerText;
}

function CheckWinners() {
  for (a = 0; a < winningscenarios.length; a++) {
      if (innertext(ButtonsArray[winningScenarios[a][0]]) ==
      innertext(ButtonsArray[winningScenarios[a][1]]) &&
      innertext(ButtonsArray[winningScenarios[a][0]]) ==
      innertext(ButtonsArray[winningScenarios[a][2]])) {
        Win(innertext(ButtonsArray[winningScenarios[a][0]]))
      }
  }
}
