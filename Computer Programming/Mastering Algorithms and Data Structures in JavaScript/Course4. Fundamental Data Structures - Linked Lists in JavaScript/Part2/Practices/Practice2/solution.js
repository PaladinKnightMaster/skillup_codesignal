// class Node {
//   constructor(value, next=null) {
//       this.value = value;
//       this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head=null;
//   }

//   append(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//           this.head = newNode;
//       } else {
//           let currentNode = this.head;
//           while (currentNode.next) {
//               currentNode = currentNode.next;
//           }
//           currentNode.next = newNode;
//       }
//   }

//   findIndex(element) {
//       let currentIndex = 0;
//       let currentNode = this.head;
//       while(currentNode) {
//           // TODO: implement this
//       }
//       return -1; // return -1 if element not found
//   }
// }


// let list = new LinkedList();
// list.append(8);
// list.append(5);
// list.append(6);

// console.log(list.findIndex(5)); // Result: 1
// console.log(list.findIndex(8)); // Result: 0
// console.log(list.findIndex(4)); // Result: -1 (Element not found)

class Node {
  constructor(value, next=null) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head=null;
  }

  append(data) {
      const newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
      } else {
          let currentNode = this.head;
          while (currentNode.next) {
              currentNode = currentNode.next;
          }
          currentNode.next = newNode;
      }
  }

  findIndex(element) {
      let currentIndex = 0;
      let currentNode = this.head;
      while(currentNode) {
          // TODO: implement this
          if (currentNode.value === element) {
              return currentIndex;
          }
          currentIndex++;
          currentNode = currentNode.next;
      }
      return -1; // return -1 if element not found
  }
}


let list = new LinkedList();
list.append(8);
list.append(5);
list.append(6);

console.log(list.findIndex(5)); // Result: 1
console.log(list.findIndex(8)); // Result: 0
console.log(list.findIndex(4)); // Result: -1 (Element not found)