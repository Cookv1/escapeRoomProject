// gameFunctions.js
const inquirerFunctions = require('./inquirerFunctions');

async function processPath(player, path) {
    console.log(`You chose the path: ${path}`);

    let obstacle;
    let deathMessage;
    let effectiveness;

    switch (path) {
        case 'Through the mountains':
            obstacle = 'Balrog';
            deathMessage = 'The Balrog overwhelms you with its fiery whip. Game over!';
            effectiveness = 'magic';
            break;
        case 'Through the woodland':
            obstacle = 'Giant spiders';
            deathMessage = 'The giant spiders ensnare you in their webs. Game over!';
            effectiveness = 'light of the elves';
            break;
        case 'Down the rivers':
            obstacle = 'Orcs';
            deathMessage = 'The Orcs catch you in their ambush. Game over!';
            effectiveness = 'sword';
            break;
        case 'Through the plains':
            obstacle = 'Nazgûl';
            deathMessage = 'The Nazgûl sense your presence and capture you. Game over!';
            effectiveness = 'the One Ring';
            break;
        default:
            break;
    }

    console.log(`You encounter... ${obstacle}!`);
    console.log(`You shall not pass until you defeat the ${obstacle} with an effective move.`);

    const action = await inquirerFunctions.chooseAction();

    let outcome;

    switch (action) {
        case 'Use magic':
            if (effectiveness === 'magic') {
                outcome = `You use magic against the ${obstacle} and escape successfully!`;
            } else {
                outcome = `Your action has no effect against the ${obstacle}. ${deathMessage}`;
                return false; // Return false if wrong action is taken
            }
            break;
        case 'Use sword':
            if (effectiveness === 'sword') {
                outcome = `You wield your sword against the ${obstacle} and escape successfully!`;
            } else {
                outcome = `Your action has no effect against the ${obstacle}. ${deathMessage}`;
                return false; // Return false if wrong action is taken
            }
            break;
        case 'Use light of the elves':
            if (effectiveness === 'light of the elves') {
                outcome = `You illuminate the darkness with the light of the elves, thwarting the ${obstacle} and escape successfully!`;
            } else {
                outcome = `Your action has no effect against the ${obstacle}. ${deathMessage}`;
                return false; // Return false if wrong action is taken
            }
            break;
        case 'Use the One Ring':
            if (effectiveness === 'the One Ring') {
                outcome = `You wear the One Ring, becoming invisible to the ${obstacle} and escape successfully!`;
            } else {
                outcome = `Your action has no effect against the ${obstacle}. ${deathMessage}`;
                return false; // Return false if wrong action is taken
            }
            break;
        default:
            outcome = 'Invalid action chosen.';
            break;
    }

    console.log(outcome);
    return true; // Return true if the player uses the correct effective action
}

module.exports = {
    processPath
};
