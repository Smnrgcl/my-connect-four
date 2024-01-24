# My Connect Four Game


## Project Description

This project is a digital implementation of the classic board game "Connect Four," designed as a web application. The game offers an interactive and engaging experience for players through three main screens: Game Creation Screen, Game Screen, and List of Games Screen.

# App.js

This file contains the main component of your React application and defines the page routing using the `react-router-dom` library to navigate between different screens.

## General Information

- **Router Usage**: The `BrowserRouter` component creates a `Router` that encompasses the entire application, enabling page navigation.

- **Defining Routes**: Inside the `Routes` component, `Route` components are defined for different paths. Each `Route` includes a specific URL path and the corresponding component.

## Page Routing

1. **Game Creation Screen (`/`)**:
   - Path: `/`
   - Component: `GameCreationScreen`
   - Controls the game started with the `onStartGame` prop, invoking the `startGameHandler` function.

2. **Game Screen (`/game`)**:
   - Path: `/game`
   - Component: `GameScreen`
   - Controls the leave game actions through the `onLeaveGame` prop, invoking the `leaveGameHandler` function.

3. **List Of Games Screen (`/history`)**:
   - Path: `/history`
   - Component: `ListOfGamesScreen`
   - Contains a list displaying the history of played games.

## Game Control Functions

- **startGameHandler(playerName, player1Color, player2Color)**: This function initiates the game. It takes values from the `GameCreationScreen` component and performs necessary actions to start the game.

- **leaveGameHandler()**: This function handles leaving the game. It responds to requests from the `GameScreen` component and performs actions to leave the game.

# Game Creation Screen

This component represents a screen where the user can input parameters to create a game. It allows the user to enter parameters such as player name, disk colors, game name, and background color. When the game is created, the user is redirected to the game screen with the specified parameters.

## General Information

- **React Hooks**: This component uses React Hooks such as `useState` and `useEffect` to manage the component's state and respond to lifecycle events.

- **localStorage Usage**: User-entered values are stored in localStorage, preserving these values when the page is refreshed or closed.

- **Color Selections**: Users can determine features such as player disk colors and background color through color selection boxes.

- **Game Start Process**: Clicking the "Start Game" button triggers a redirection to the main game screen with the necessary parameters through the `onStartGame` prop.
# Connect Four Game Screen

This project includes a Connect Four game developed using React. The GameScreen component serves as the main interface for users to play the game, view past games, and exit the current game.

## General Information

- **React Hooks**: This project utilizes React Hooks such as `useState` and `useEffect` to manage the component's state and respond to lifecycle events.

- **Creating the Game Board**: The `createEmptyBoard` function generates an initially empty game board. The board consists of 6 rows and 7 columns.

- **Game Status Checking**: The `checkGameStatus` function examines the state of the game board. It performs winner checks in vertical, horizontal, and diagonal directions. Additionally, it checks if the game ends in a draw.

- **Making Computer Moves**: The `makeRandomMove` function allows the computer to drop a disk into a random column. This is used to simulate the computer's decision-making in the game.

- **Updating the Game Board**: The `dropDisk` function processes the user's or computer's move of dropping a disk into a column. Board updates and turn changes occur within this function.

- **Resetting the Game**: The `resetGame` function resets the game, starting a new round.

- **Saving Game Information**: The `saveGameInfo` function records winner information in local storage, creating a game history.

- **Page Navigation**: Utilizing the `useNavigate` hook, the `onLeaveGame` function redirects to the main page when the user leaves the game.

## Color and Theme Settings

- **Color Settings**: User-preferred colors are retrieved from localStorage, adjusting the game board, disk colors, and background color accordingly.

- **Changing Background Color**: The `backgroundColor` state holds the background color of the game board, matching the user's preferred color.

- **Changing Disk Colors**: The `player1Color` and `player2Color` states represent the disk colors for the user and computer, respectively. Users can choose these colors, and the preferences are stored in localStorage.



## Game Screen

- **Game Board**: A game board consisting of 6 rows and 7 columns. Users can drop disks into columns by clicking on them.
- **Player Information**: The current player's name is displayed on the game screen.
- **Winner Information**: When the game ends, information about the winner or a draw is displayed on the screen.
- **Game History Link**: Use the "Game History" link to navigate to another page.
- **Leave Game Button**: Click the "Leave Game" button to exit the current game and return to the main screen.


# List Of Games Screen

This component is used to display a table containing scores of past games. The table includes information such as game name, player name, and winner details, showing the last 10 games. Additionally, it features a button to navigate back to the GameCreationScreen page.

## General Information

- **React Hooks**: This component utilizes the `useNavigate` hook for page navigation.

- **Local Storage Usage**: Game information is processed by retrieving it from localStorage. Past game details are stored in an array named `gameInfoArray`.

- **Updating Score Table**: Game information is processed by updating the last winners of games with the same name. The latest winners, appearing only once for each game name, are added to the `updatedGameInfoArray` array.

- **Displaying Last 10 Games**: The `son10Oyunlar` array is created from updated game information and contains the last 10 games.

- **Helper Function**: The `getLastWinner` function is a helper function that finds the last winner for a given game name.

- **Table Rendering**: The score table is displayed using the `table` element with a header (`thead`) and rows (`tbody`).





## Installation

To set up the project on your local machine, follow the steps below:

1. Download the project files to your computer.
2. Navigate to the project directory in your terminal or command prompt.

  ```bash
  cd my-connect-four
  ```

3. Use the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

4. In the project directory, start the application by using the following command:

    ```bash
    npm start
    ```

After following these steps, your application should be up and running


### 1. Game Creation Screen
![Game Create Screen](./public/images/GameCreateScreen.png)

This screen serves as the starting point where players input essential information before starting the game. Key features include:

- **Game Name:** Set the name of the game.
- **Player Names:** Enter names for each player.
- **Player Disk Colors:** Allow players to choose their disk colors.
- **Background Color:** Determine the background color of the game.
- **Start Game Button:** Validates input information and transitions to the Game Screen upon successful validation.

### 2. Game Screen
![Game Screen](./public/images/GameScreen.png)

The main gameplay screen with the following features:

- **Player Greeting:** Displays a personalized welcome message for the first player's name.
- **Game Grid:** Represents the 7x6 game grid for Connect Four.
- **Current Player:** Indicates which player is currently making a move.
- **Game History Button:** Saves game information and transitions to the List of Games Screen.
- **Leave Game Button:** Allows exiting the game and returning to the Game Creation Screen.

#### Game Flow

The game provides an interactive experience for the user.

- After the player drops the first disc, the computer makes a move within 1 second.
- Consecutive moves can occur if the player clicks twice within one second.
- A new game starts automatically when the game ends in a tie.

### 3. List of Games Screen
![Game Screen](./public/images/GameListScreen.png)

This screen displays a table of game scores with the following features:

- **Game Score Table:** Shows the names, player names, and winner information for the last 10 games.
- **Game Creation Screen Button:** Allows returning to the Game Creation Screen.

#### Updating the Score Table

- If the same game name is entered and already listed, only the winner and player name are updated.
- The same game is not listed multiple times.

## How to Use

1. Specify the player name and game name on the Game Creation Screen.
2. Choose the disk colors and background color for the players.
3. Drop the first disc on the game screen and wait for the computer's move.
4. If the game ends in a tie, it automatically starts a new game.
5. To view the previous and current game lists, check the Game History section.
6. If you want to exit the game or change game information, click the Leave Game button.

Enjoy playing the application!
