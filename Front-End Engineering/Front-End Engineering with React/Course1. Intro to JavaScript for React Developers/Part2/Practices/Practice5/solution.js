```
// Let's figure out which planets have moons
let planets = [
    { name: 'Mercury', hasMoons: false },
    { name: 'Venus', hasMoons: false },
    { name: 'Earth', hasMoons: true },
];

// TODO: Check each planet and display "{{Planet Name}} has moons." or "{{Planet Name}} has no moons."
planets.forEach((planet) => {
    // Replace {{Planet Name}} with the actual name of the planet
    let moonMessage = /* TODO: add ternary operation to set moonMessage based on planet.hasMoons */;
    document.getElementById('cosmicInfo').textContent += moonMessage + " ";
});
```

let planets = [
    { name: 'Mercury', hasMoons: false },
    { name: 'Venus', hasMoons: false },
    { name: 'Earth', hasMoons: true },
];

planets.forEach((planet) => {
    let moonMessage = planet.hasMoons
        ? `${planet.name} has moons.`
        : `${planet.name} has no moons.`;
    document.getElementById('cosmicInfo').textContent += moonMessage + " ";
});
