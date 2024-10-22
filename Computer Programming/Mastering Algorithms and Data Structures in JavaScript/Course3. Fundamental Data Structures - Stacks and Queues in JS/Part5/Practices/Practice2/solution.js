// class Queue {
//     constructor() {
//         this.data = []; // A queue is constructed as an array
//     }
//     enqueue(element) {
//         this.data.push(element); // The push() method adds an element at the end
//     }
//     dequeue() {
//         if(this.isEmpty())
//             return "Underflow"; // If the queue is empty, it returns "Underflow"
//         return this.data.shift(); // The shift() method removes an element from the start
//     }
//     isEmpty() {
//         return !this.data.length; // The length property checks if the queue is empty
//     }

//     getSize() {
//         return this.data.length;
//     }
// }

// class MovingAverage {
//     constructor(size) {
//         this.size = size;
//         this.window = new Queue();
//         this.sum = 0.0;
//     }

//     next(val) {
//        // TODO: implement this
//     }
// }

// const movingAvg = new MovingAverage(3);
// console.log(movingAvg.next(1));     // returns 1.0 (like a single heart rate reading)
// console.log(movingAvg.next(10));    // returns 5.5 (the average after a short burst of activity)
// console.log(movingAvg.next(3));     // returns 4.66667 (normalizing after the burst)
// console.log(movingAvg.next(5));     // returns 6.0 (the most recent average, taking into account the last three readings)

class Queue {
    constructor() {
        this.data = []; // A queue is constructed as an array
    }
    enqueue(element) {
        this.data.push(element); // The push() method adds an element at the end
    }
    dequeue() {
        if(this.isEmpty())
            return "Underflow"; // If the queue is empty, it returns "Underflow"
        return this.data.shift(); // The shift() method removes an element from the start
    }
    isEmpty() {
        return !this.data.length; // The length property checks if the queue is empty
    }

    getSize() {
        return this.data.length;
    }
}

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.window = new Queue();
        this.sum = 0.0;
    }

    next(val) {
       // TODO: implement this
       if (this.window.getSize() === this.size) {
            this.sum -= this.window.dequeue(); // Remove the oldest value from the sum
        }
        this.window.enqueue(val); // Add the new value to the queue
        this.sum += val; // Update the sum with the new value

        return this.sum / this.window.getSize(); // Return the current average
    }
}

const movingAvg = new MovingAverage(3);
console.log(movingAvg.next(1));     // returns 1.0 (like a single heart rate reading)
console.log(movingAvg.next(10));    // returns 5.5 (the average after a short burst of activity)
console.log(movingAvg.next(3));     // returns 4.66667 (normalizing after the burst)
console.log(movingAvg.next(5));     // returns 6.0 (the most recent average, taking into account the last three readings)