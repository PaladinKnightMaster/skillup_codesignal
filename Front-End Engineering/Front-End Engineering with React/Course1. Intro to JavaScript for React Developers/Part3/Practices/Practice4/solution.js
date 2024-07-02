/*
class Dog {
    constructor(name) {
        this.name = name;
        this.playMinutes = 0;
    }

    // Simple method to increase playtime
    addPlaytime(minutes) {
        // TODO: Write code to add positive minutes to the playMinutes property. If 'minutes' is smaller than 0, then do nothing
    }
}

const buddy = new Dog('Buddy');
buddy.addPlaytime(30); // Add 30 minutes of playtime for Buddy

document.getElementById('playTime').innerText = `${buddy.name} has played for ${buddy.playMinutes} minutes.`;
*/

class Dog {
    constructor(name) {
        this.name = name;
        this.playMinutes = 0;
    }

    // Simple method to increase playtime
    addPlaytime(minutes) {
        // TODO: Write code to add positive minutes to the playMinutes property. If 'minutes' is smaller than 0, then do nothing
        if (minutes > 0) {
            this.playMinutes += minutes;
        }
    }
}

const buddy = new Dog('Buddy');
buddy.addPlaytime(30); // Add 30 minutes of playtime for Buddy

document.getElementById('playTime').innerText = `${buddy.name} has played for ${buddy.playMinutes} minutes.`;