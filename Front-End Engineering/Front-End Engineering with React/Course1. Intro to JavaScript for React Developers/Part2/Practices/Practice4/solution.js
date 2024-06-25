/*

// Let's track which satellites are currently orbiting Earth
let satellites = [
    { name: 'Hubble Space Telescope', isActive: true },
    { name: 'International Space Station', isActive: true },
    { name: 'Voyager 1', isActive: false }, // Voyager 1 is no longer orbiting Earth
];

// Use forEach to show an activity status message for each satellite
satellites.forEach((satellite) => {
    let activityStatus = !satellite.isActive ? 'active' : 'inactive';
    let message = `${satellite.name} is currently ${activityStatus}. `;

    // Create a paragraph element for each satellite message
    let para = document.createElement('p');
    para.textContent = message;

    // Append the paragraph to the satelliteTracker div
    document.getElementById('satelliteTracker').appendChild(para);
});

*/

// Let's track which satellites are currently orbiting Earth
let satellites = [
    { name: 'Hubble Space Telescope', isActive: true },
    { name: 'International Space Station', isActive: true },
    { name: 'Voyager 1', isActive: false }, // Voyager 1 is no longer orbiting Earth
];

// Use forEach to show an activity status message for each satellite
satellites.forEach((satellite) => {
    let activityStatus = satellite.isActive ? 'active' : 'inactive';
    let message = `${satellite.name} is currently ${activityStatus}. `;

    // Create a paragraph element for each satellite message
    let para = document.createElement('p');
    para.textContent = message;

    // Append the paragraph to the satelliteTracker div
    document.getElementById('satelliteTracker').appendChild(para);
});