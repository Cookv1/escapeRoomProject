const inquirer = require('inquirer');
const { Hobbit, Elven, Dwarve, Wizard } = require('./characters');

async function createPlayer() {
    const { name, race } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'race',
            message: 'Choose your race:',
            choices: ['Hobbit', 'Elven', 'Dwarve', 'Wizard']
        }
    ]);

    switch (race) {
        case 'Hobbit':
            return new Hobbit(name);
        case 'Elven':
            return new Elven(name);
        case 'Dwarve':
            return new Dwarve(name);
        case 'Wizard':
            return new Wizard(name);
        default:
            throw new Error('Invalid race selected');
    }
}

async function choosePath() {
    const { path } = await inquirer.prompt({
        type: 'list',
        name: 'path',
        message: 'Choose your path:',
        choices: ['Through the mountains', 'Through the woodland', 'Down the rivers', 'Through the plains']
    });
    return path;
}

async function chooseAction() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose your action:',
        choices: ['Use magic', 'Use sword', 'Use light of the elves', 'Use the One Ring']
    });
    return action;
}

module.exports = {
    createPlayer,
    choosePath,
    chooseAction
};
