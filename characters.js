class Character {
    constructor(name) {
        this.name = name;
    }
}

class Hobbit extends Character {
    constructor(name) {
        super(name);
        this.race = 'Hobbit';
    }
}

class Elven extends Character {
    constructor(name) {
        super(name);
        this.race = 'Elven';
    }
}

class Dwarve extends Character {
    constructor(name) {
        super(name);
        this.race = 'Dwarve';
    }
}

class Wizard extends Character {
    constructor(name) {
        super(name);
        this.race = 'Wizard';
    }
}

module.exports = {
    Character,
    Hobbit,
    Elven,
    Dwarve,
    Wizard
};
