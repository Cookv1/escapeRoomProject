// escapeRoom.js
const inquirerFunctions = require('./inquirerFunctions');
const gameFunctions = require('./gameFunctions');

async function startGame() {
    console.log("Welcome to the Escape Room: Escape from Mordor!");

    // Initialize game
    let player = await inquirerFunctions.createPlayer();
    let pathsTaken = new Set(); // Keep track of paths taken

    // Paths array to ensure the player goes through every pathway
    const paths = ['Through the mountains', 'Through the woodland', 'Down the rivers', 'Through the plains'];

    for (let i = 0; i < paths.length; i++) {
        const path = await inquirerFunctions.choosePath(paths, pathsTaken);
        pathsTaken.add(path);
        await gameFunctions.processPath(player, path);
    }

    console.log("Congratulations! You've successfully escaped from Mordor!");
}

startGame();



