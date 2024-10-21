// class AmusementParkQueue {
//     constructor() {
//         this.riders = [];
//     }
//     rideNext() {
//         // TODO: Return "The queue is empty" in case there are no more riders
//         // TODO: Move the queue
//     }

//     joinLine(rider) {
//         this.riders.push(rider);
//     }
// }

// let parkQueue = new AmusementParkQueue();
// parkQueue.joinLine("Alice");
// parkQueue.joinLine("Bob");
// console.log(parkQueue.rideNext());

class AmusementParkQueue {
    constructor() {
        this.riders = [];
    }
    rideNext() {
        // TODO: Return "The queue is empty" in case there are no more riders
        if (this.riders.length === 0) {
            return "The queue is empty";
        }
        // TODO: Move the queue
        return this.riders.shift();
    }

    joinLine(rider) {
        this.riders.push(rider);
    }
}

let parkQueue = new AmusementParkQueue();
parkQueue.joinLine("Alice");
parkQueue.joinLine("Bob");
console.log(parkQueue.rideNext());