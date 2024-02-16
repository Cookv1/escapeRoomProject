const inquirerFunctions = require('./inquirerFunctions');
const gameFunctions = require('./gameFunctions');

async function startGame() {
    console.log("Welcome to the Escape Room: Escape from Mordor!");

    // Initialize game
    let player = await inquirerFunctions.createPlayer();
    let gameOver = false;

    while (!gameOver) {
        let path = await inquirerFunctions.choosePath();
        gameOver = await gameFunctions.processPath(player, path);
    }

    console.log("Game over!");
}

startGame();


