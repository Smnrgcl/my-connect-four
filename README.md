# My Connect Four Game

## Project Description

This project simulates the board game "Connect Four" in a digital format through a web application. The user interface of the game consists of three main pages: Game Creation Screen, Game Screen, and List of Games Screen.

## 1. Game Creation Screen

This page serves as the starting point where players input necessary information before the game starts. It includes the following features:

- **Game Name:** Sets the name of the game.
- **Player Names:** Allows players to enter their names.
- **Player Disk Colors:** Lets each player choose their disk color.
- **Background Color:** Determines the background color of the game.
- **Start Game Button:** Validates the entered information, providing a warning if any information is missing. If all information is correct, it transitions to the Game Screen.

## 2. Game Screen

The main screen where the game takes place. Here are the features of this screen:

- **Player Greeting:** Displays a personalized welcome message for the first player's name.
- **Game Grid:** Represents the 7x6 game grid for Connect Four.
- **Current Player:** Indicates which player is currently making a move.
- **Game History Button:** Saves game information and transitions to the List of Games Screen.
- **Leave Game Button:** Allows exiting the game and returning to the Game Creation Screen.

### Game Flow

- The game provides an interactive experience for the user.
- After the player drops the first disc, the computer makes a move within 1 second.
- If you click twice within one second, the computer makes consecutive moves.
- When the game ends in a tie, a new game starts automatically.

## 3. List of Games Screen

This page displays a table of game scores. It includes the following features:

- **Game Score Table:** Shows the names, player names, and winner information for the last 10 games.
- **GameCreationScreen Button:** Allows returning to the Game Creation Screen.

### Updating the Score Table

- If the same game name is entered and already listed, only the winner and player name are updated.
- The same game is not listed multiple times.

## How to Use

1. Specify the player name and game name on the Game Creation Screen.
2. Choose the disk colors and background color for the players.
3. Drop the first disc on the game screen and wait for the computer's move.
4. If the game ends in a tie, it automatically starts a new game.
5. To view the previous and current game lists, check the Game History section.
6. If you want to exit the game or change game information, click the Leave Game button.

# Connect Four Game

## Project Structure
 
Tabii ki, işte düzeltilmiş README.md dosyanız:

markdown
Copy code


