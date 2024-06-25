```
// Imagine you have to create an object detection logic for your spacecraft.

// TODO: Define an object with properties to determine if it is an asteroid with the following keys: isRocky and isOrbiting

// TODO: Use a ternary conditional operator to decide what message to display. If the object is rocky and NOT orbiting, you should post a message 'Asteroid detected!'; otherwise, post 'No asteroid detected.'

// TODO: Display the appropriate message on the spacecraft's interface in the 'detectionStatus' paragraph.
```

// Define an object with properties to determine if it is an asteroid
let spaceObject = {
    isRocky: true,
    isOrbiting: false
};

// Use a ternary conditional operator to decide what message to display
let detectionMessage = spaceObject.isRocky && !spaceObject.isOrbiting
    ? 'Asteroid detected!'
    : 'No asteroid detected.';

// Display the appropriate message on the spacecraft's interface
document.getElementById('detectionStatus').textContent = detectionMessage;
