console.log('script.js called')
$(document).ready(function(){
console.log('document loaded')
//Javascript for index.html
//If 'Turn' equal true, an X will be placed. Otherwise an O will be placed
var Turn = true;

//A variable that holds the name for the button that needs to be changed
var ButtonToChange;
//Holds the value of said Button
var ButtonValue;
//Boolean which makes sure after the game is over, you can't still play.
var InProgress = true;

//Array with all button ID's
var ButtonsArray = ["1.1Button", "1.2Button", "1.3Button",
					"2.1Button", "2.2Button", "2.3Button",
					"3.1Button", "3.2Button", "3.3Button"];

//Function that gets triggered on every button press. value being what button is pressed
function ChangeValue(value)
{
	//Makes sure you can't play/change buttons when the game is over
	if(InProgress)
	{
	ButtonToChange = value + "Button";

	//Fill ButtonValue with the value of the button so you can check it in the following if statement
	ButtonValue = document.getElementById(ButtonToChange).innerText;
	//Check if ButtonValue is "-" (thus not a filled button yet)
	if(ButtonValue == "-")
	{
		//If Turn equals true it's the X's turn
		if(Turn)
		{
			//Change the button value to X
			document.getElementById(ButtonToChange).innerText = "X";
		}
		//If Turn equals false it's the O's turn
		else
		{
			//Change the button value to O
			document.getElementById(ButtonToChange).innerText = "O";
		}
	}
	else
	{
		//Do nothing
		Turn = !Turn;
	}
	CheckWinners();
	}
	Turn = !Turn;
}

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


//If there is someone with three the same symbols in a row (decided in CheckWinners())
//this function will tell who is the winner
function Win(Winning)
{
	//Makes sure you can't change buttons if the game is ended
	InProgress = false;
	//Tells who is the winner (Winning being the value that gets passed to the function 'Win').
	document.getElementById("WinnerText").innerText = Winning + " Has won!";
}

//Function for the button to reset the game.
//Turns all button to their default ("-") and also makes it so you can play again
function Reset()
{
	//Loop that makes all the buttons reset
	for (i = 0; i < ButtonsArray.length; i++)
	{
		document.getElementById(ButtonsArray[i]).innerText = "-";
	}
	//Change the text that shows who won to nothing, so it gets removed.
	document.getElementById("WinnerText").innerText = "";
	InProgress = true;
}
});
