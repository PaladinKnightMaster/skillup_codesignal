```
// TODO: Create a class named 'Dog' with a constructor to set the dog's name
//       and a getter method to get the dog's name

// TODO: Create an instance of the Dog class with the name 'Buddy'

// TODO: Select the span element by its id and set its text content to the dog's name using the getter
```

// TODO: Create a class named 'Dog' with a constructor to set the dog's name
//       and a getter method to get the dog's name

class Dog {
    constructor(name) {
        this._name = name;
    }
    // Getter for the dog's name
    get name() {
        return this._name;
    }
}

// TODO: Create an instance of the Dog class with the name 'Buddy'

const buddy = new Dog('Buddy');

// TODO: Select the span element by its id and set its text content to the dog's name using the getter

document.getElementById('dogName').textContent = buddy.name