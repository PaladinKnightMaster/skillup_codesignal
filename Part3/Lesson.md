# Lesson 3. Navigating JavaScript Classes: Understanding Structure, Methods, and Accessors

## Understanding Classes
JavaScript classes are essentially the molds for creating objects. They encompass data and behaviors that belong to the object. The structure for defining a class includes the `class` keyword followed by the name of the class.

```javaScript
class Dog {
    constructor(name) {
        this.name = name;
    }
}
```
In this `Dog` class, we have a property called `name`, which is set in a special function named the `constructor()`. The `constructor` is automatically called when we create a new instance of the class.

In object-oriented programming, an "instance" is an object created from a specific class. We can create a new instance in JavaScript using the `new` keyword:

```javaScript
let myDog = new Dog('Spot');
```
In this line of code, `new Dog('Spot')` creates a new instance of the `Dog` class, with the `name` property set to 'Spot'. The `new` keyword is essentially telling JavaScript to create a new object, and then invoke the constructor function on that object.

Within the class, we also often see and use the `this` keyword. The `this` keyword in JavaScript is a little complex as it behaves differently depending on the context it is used in. In a class, `this` refers to the instance of the class. In other words, it refers to the object that is created from the class.

For example, when we use `this.name = name;` in our constructor, `this` is referring to the instance of the Dog being created, and `this.name` is setting the `name` property of that specific Dog instance.

The instance of the class, such as `myDog` in this case, is a full-fledged object with properties and behaviors as defined by the class structure. We can easily access these properties, like so:

```javaScript
console.log(myDog.name);  // "Spot"
```
When you see this code, the dot notation ".name" accesses the `name` property of `myDog` and returns its value. It's actually accessing `this.name` for the `myDog` object. So, whenever you see `this` in a method inside a class, think of `this` as the object which the method is acting on.

## Class Structure and Main Methods
The class structure is defined using the `class` keyword followed by the class's name. Inside, we define a `constructor` method that initializes object properties and additional methods that define class actions or behaviors. If we want our dogs to bark, we can add a `bark` method:

```javaScript
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        // The keyword 'this' represents the instance of the class
        return `${this.name} says woof!`;
    }
}

let myDog = new Dog('Spot');
// 'bark' method being used on 'myDog' instance of Dog class
console.log(myDog.bark());  // "Spot says woof!"
```
With this addition, our `Dog` class now includes a `bark` method, meaning `Spot` can bark.

## Getters and Setters
Getters and setters are special methods that allow us to manipulate an object's properties.

Getters
Getters in a class are methods that get the value of a specific property. To define a getter, we use the `get` keyword in front of a function.

Let's modify the `Dog` class to include a getter for the `name` property:

```javaScript
class Dog {
    constructor(name) {
        this._name = name; // the underscore (_) is a common convention for private properties which will be discussed later
    }

    // Define a getter for the 'name' property
    get name() {
        return this._name;
    }
}
```
Here, the `get` keyword before the `name` function makes it a getter, which means it will be automatically invoked when we access the `name` property.

Now, we can create a `Dog` instance and use our getter to access its `name` property:

```javaScript
let myDog = new Dog('Spot');
console.log(myDog.name);  // "Spot"
```
Here, when we use `myDog.name`, instead of directly returning the value of `myDog._name`, it invokes the getter method that returns the value of `this._name` of the `myDog` object. This allows us to abstract away the underlying data and present a simple interface for getting the `name` attribute of a `Dog`, making our code more flexible and easier to maintain.

Setters
Following the getters, we now have setter methods. They allow us to run some code every time a specific property is attempted to be changed, or 'set'.

We can create a setter for the `name` property in the `Dog` class. We want to make sure that a dog's name is not left blank, so we'll add a check in our setter:

```javaScript
Copy
class Dog {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    // Define a setter for the 'name' property
    set name(value) {
        // Only update _name if value is not empty
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("Error: Name cannot be empty.");
        }
    }
}
```
Here, the `set` keyword before our `name` method marks it as a setter. It is used to update the value of a property. In this case, the `_name` property.

Now, if we create a `Dog` instance and use our setter to change its `name` property, we can ensure that a meaningful value is set:

```javaScript
let myDog = new Dog('Spot');
console.log(myDog.name);  // "Spot"
myDog.name = '';  // Error: Name cannot be empty.
console.log(myDog.name);  // "Spot"

myDog.name = 'Buddy';
console.log(myDog.name);  // "Buddy"
```
Here, when we tried to set the `name` property to an empty string, it triggered the setter method. As our setter method contains a condition checking that the name cannot be empty, an error message was displayed to the console and the `name` property remained unchanged.

Setters are very useful to protect your object's properties from being incorrectly set or to automatically change other properties when one is set. For instance, here it ensures that we don't accidentally leave a dog nameless.