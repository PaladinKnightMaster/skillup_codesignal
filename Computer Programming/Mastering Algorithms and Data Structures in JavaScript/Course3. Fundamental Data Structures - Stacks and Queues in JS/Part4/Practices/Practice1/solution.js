class RidersQueue {
    constructor() {
        this.riders = [];
    }
    getInLine(rider) {
        this.riders.push(rider); // A new rider joins the end of the line
    }
    rideNext() {
        return this.riders.shift(); // The next rider gets on the ride
    }
    isLineEmpty() {
        return this.riders.length === 0; // Check if the line for the ride is empty
    }
}

// Usage
let rollerCoasterQueue = new RidersQueue();
rollerCoasterQueue.getInLine('Alice');
rollerCoasterQueue.getInLine('Bob');
console.log(rollerCoasterQueue.rideNext()); // 'Alice' goes on the ride