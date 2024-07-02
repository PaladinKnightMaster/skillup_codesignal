/*
class Dog {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    showDetails() {
        document.getElementById('dogInfo').textContent = `${this.name} is ${this._age} years old.`;
    }
}

// Create a new Dog instance and show its details
const myPet = new Dog('Max', 3);
myPet.showDetails();
*/

class Dog {
  constructor(name, age) {
      this._name = name;
      this._age = age;
  }

  showDetails() {
      document.getElementById('dogInformation').textContent = `${this._name} is ${this._age} years old.`;
  }
}

// Create a new Dog instance and show its details
const myPet = new Dog('Max', 3);
myPet.showDetails();