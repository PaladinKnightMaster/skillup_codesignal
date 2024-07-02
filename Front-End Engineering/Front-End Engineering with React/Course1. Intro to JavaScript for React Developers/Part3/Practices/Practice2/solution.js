/*
class Dog {
    constructor(name) {
        this._name = name;
    }

    // Setter for the dog's name that also updates Doggy Daycare record in the DOM
    set name(newName) {
        this._name = newName;
        document.getElementById('dogInfo').textContent = `Welcome to Doggy Daycare. Doggy name is: ${this._name}!`;
    }
}

// Create an instance of the Dog class
let daycareDog = new Dog('Max');
// Show Buddy's welcome message in the browser
daycareDog.name = '';
*/
class Dog {
    constructor(name) {
        this._name = name;
    }

    // Setter for the dog's name that also updates Doggy Daycare record in the DOM
    set name(newName) {
        this._name = newName || 'Rex';
        document.getElementById('dogInfo').textContent = `Welcome to Doggy Daycare. Doggy name is: ${this._name}!`;
    }
}

// Create an instance of the Dog class
let daycareDog = new Dog('Max');
// Show Buddy's welcome message in the browser
daycareDog.name = '';