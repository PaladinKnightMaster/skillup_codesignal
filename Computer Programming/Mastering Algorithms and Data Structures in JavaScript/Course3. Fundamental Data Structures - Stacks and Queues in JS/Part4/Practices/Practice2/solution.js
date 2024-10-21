// class AmusementQueue {
//     constructor() {
//       this.riders = [];
//     }

//     rideTurn() {
//       return this.riders.shift(); // The first rider in queue gets the turn on the ride
//     }

//     newRider(rider) {
//       this.riders.push(rider); // New rider joins the end of the queue
//       // TODO: return rider's position
//     }
//   }

//   let coasterQueue = new AmusementQueue();
//   coasterQueue.newRider('Alice'); // Alice lines up for the roller coaster
//   coasterQueue.newRider('Bob');   // Bob gets in line behind Alice
//   // TODO: print Bob's position
//   console.log(coasterQueue.rideTurn()); // Alice gets her turn on the ride

class AmusementQueue {
    constructor() {
      this.riders = [];
    }

    rideTurn() {
      return this.riders.shift(); // The first rider in queue gets the turn on the ride
    }

    newRider(rider) {
      this.riders.push(rider); // New rider joins the end of the queue
      // TODO: return rider's position
      return this.riders.length
    }
  }

  let coasterQueue = new AmusementQueue();
  coasterQueue.newRider('Alice'); // Alice lines up for the roller coaster
  coasterQueue.newRider('Bob');   // Bob gets in line behind Alice
  // TODO: print Bob's position
  console.log(coasterQueue.rideTurn()); // Alice gets her turn on the ride