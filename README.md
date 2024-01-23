My Connect Four Game
About the Project
This project is a web application that allows players to play the "Connect Four" strategy game, where two players take turns dropping their colored discs into a vertically suspended grid with the objective of connecting four of their own discs consecutively, either horizontally, vertically, or diagonally.

Project Structure
The project was developed using Visual Studio Code. Below is a structural description of the project files:

src
components
GameCreationScreen.js: Screen where players enter game information and start the game.
GameScreen.js: Main screen where the actual game takes place.
ListOfGamesScreen.js: Screen displaying game scores.
css
GameScreen.css: Style file for the game screen.
App.js: Main application file.
Game Flow
Game Creation Screen:

Players enter information such as name, game name, disc colors, and background color.
If the player name is not entered, the game does not start.
Clicking the "Start Game" button redirects to the game screen.
Game Screen:

Player-entered information is applied here.
A welcome message for the named player is displayed at the top.
Clicking the "Game History" button redirects to the List of Games Screen where game information is saved.
Below the game area, the name of the current player and the name of the last winner are displayed.
If the game ends in a draw, a new game starts automatically.
Clicking the "Leave Game" button redirects to the Game Creation Screen.
List of Games Screen:

A table displaying game scores is shown.
The table records game name, player name, and winner information.
Multiple records with the same game name are not allowed.
Clicking the "Game Creation Screen" button redirects to the Game Creation Screen.
How to Use
In the Game Creation Screen, specify the player's name, game name, disc colors, and background color.
Start the game by clicking the "Start Game" button.
In the Game Screen, drop the first disc and wait for the computer's move.
If the game ends in a draw, a new game starts automatically.
Use the "Game History" button to view previous games.
Click the "Leave Game" button to exit the game or change information.