// function Queue() {
//     this.elements = [];

//     this.enqueue = function(element) {
//       this.elements.push(element);
//     }

//     this.dequeue = function() {
//       return this.elements.shift();
//     }

//     this.peekLast = function() {
//       return this.elements[this.elements.length - 1];
//     }

//     this.dequeueLast = function() {
//       return this.elements.pop();
//     }

//     this.isEmpty = function() {
//       return this.elements.length == 0;
//     }
//   }

//   function alternatingEnqueue(queue1, queue2) {
//     // TODO: implement this
//   }

//   // Usage
//   let queue1 = new Queue();
//   queue1.enqueue(1);
//   queue1.enqueue(2);
//   queue1.enqueue(3);
//   let queue2 = new Queue();
//   queue2.enqueue(4);
//   queue2.enqueue(5);
//   queue2.enqueue(6);

//   let resultQueue = alternatingEnqueue(queue1, queue2);
//   console.log(resultQueue.elements); // Expected output: [1, 6, 2, 5, 3, 4]

function Queue() {
    this.elements = [];

    this.enqueue = function(element) {
      this.elements.push(element);
    }

    this.dequeue = function() {
      return this.elements.shift();
    }

    this.peekLast = function() {
      return this.elements[this.elements.length - 1];
    }

    this.dequeueLast = function() {
      return this.elements.pop();
    }

    this.isEmpty = function() {
      return this.elements.length == 0;
    }
  }

  function alternatingEnqueue(queue1, queue2) {
    // TODO: implement this
    let resultQueue = new Queue();

    while (!queue1.isEmpty() || !queue2.isEmpty()) {
      if (!queue1.isEmpty()) {
        resultQueue.enqueue(queue1.dequeue());
      }
      if (!queue2.isEmpty()) {
        resultQueue.enqueue(queue2.dequeueLast());
      }
    }

    return resultQueue;
  }

  // Usage
  let queue1 = new Queue();
  queue1.enqueue(1);
  queue1.enqueue(2);
  queue1.enqueue(3);
  let queue2 = new Queue();
  queue2.enqueue(4);
  queue2.enqueue(5);
  queue2.enqueue(6);

  let resultQueue = alternatingEnqueue(queue1, queue2);
  console.log(resultQueue.elements); // Expected output: [1, 6, 2, 5, 3, 4]