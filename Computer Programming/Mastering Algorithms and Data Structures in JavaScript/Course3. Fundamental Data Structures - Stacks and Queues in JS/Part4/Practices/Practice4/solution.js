// class AmusementParkQueue {
//     constructor() {
//         // TODO: Initialize an empty array to store the queue
//     }
//     boardRider(riderName) {
//         // TODO: Add a new rider to the end of the queue
//     }
//     nextRider() {
//         // TODO: Check if the queue is empty, respond accordingly
//         // TODO: Otherwise remove and return the first rider from the queue
//     }
// }

// let rollerCoasterQueue = new AmusementParkQueue();
// // TODO: Have a couple of riders join the queue
// // TODO: Call nextRider and log the name of the rider who gets to ride next

class AmusementParkQueue {
    constructor() {
        // TODO: Initialize an empty array to store the queue
        this.queue = [];
    }
    boardRider(riderName) {
        // TODO: Add a new rider to the end of the queue
        this.queue.push(riderName);
    }
    nextRider() {
        // TODO: Check if the queue is empty, respond accordingly
        // TODO: Otherwise remove and return the first rider from the queue
        if (this.queue.length === 0) {
            return "The queue is empty";
        }
        return this.queue.shift();
    }
}

let rollerCoasterQueue = new AmusementParkQueue();
// TODO: Have a couple of riders join the queue
rollerCoasterQueue.boardRider("Alice");
rollerCoasterQueue.boardRider("Bob");
// TODO: Call nextRider and log the name of the rider who gets to ride next
console.log(rollerCoasterQueue.nextRider());