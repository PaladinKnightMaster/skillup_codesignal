class Dog {
    constructor(name) {
        this._name = name;
    }
    // Getter for the dog's name
    get name() {
        return this._name;
    }
}

// Instantiate a new Dog object
const fluffy = new Dog('Fluffy');

// Display the dog's name in the webpage
document.getElementById('displayDogName').textContent = `${fluffy.name} is a happy dog at our daycare!`;