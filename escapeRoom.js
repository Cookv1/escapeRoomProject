// escapeRoom.js
const inquirerFunctions = require('./inquirerFunctions');
const gameFunctions = require('./gameFunctions');

async function startGame() {
    console.log("Welcome to Escape from Mordor! Your quest is one of survival. In each turn you'll select a pathway where peril awaits. You have one chance to defeat Sauron's sevants, so choose your move wisely - or die...");

    // Initialize game
    let player = await inquirerFunctions.createPlayer();
    let pathsTaken = new Set(); // Keep track of paths taken

    // Paths array to ensure the player goes through every pathway
    const paths = ['Through the mountains', 'Through the woodland', 'Down the rivers', 'Through the plains'];

    let gameOver = false;

    for (let i = 0; i < paths.length && !gameOver; i++) {
        const path = await inquirerFunctions.choosePath(paths, pathsTaken);
        pathsTaken.add(path);
        gameOver = !(await gameFunctions.processPath(player, path)); // Check if game over
    }

    if (gameOver) {
        console.log("Game over! You used an infeective move against your enemy");
    } else {
        console.log("Congratulations! You've successfully escaped to the safer lands of Middle Earth!");
    }
}

startGame();




