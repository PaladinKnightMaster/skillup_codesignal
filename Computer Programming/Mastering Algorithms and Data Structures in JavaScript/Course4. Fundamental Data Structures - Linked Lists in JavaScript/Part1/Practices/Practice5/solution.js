// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }

//     append(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let currentNode = this.head;
//         while (currentNode.next) {
//           currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//       }
//     }

//     show() {
//       // TODO: implement this method
//     }
//   }

//   // Photo gallery management
//   const photoGallery = new LinkedList();
//   photoGallery.append('Photo1.jpg');
//   photoGallery.append('Photo2.jpg');
//   photoGallery.show(); // Output: Photo1.jpg → Photo2.jpg → null

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
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

    show() {
      // TODO: implement this method
      let current = this.head;
      let output = [];
      while (current) {
        output.push(current.data);
        current = current.next;
      }
      output.push(`null`);
      console.log(output.join(' → '));
    }
  }

  // Photo gallery management
  const photoGallery = new LinkedList();
  photoGallery.append('Photo1.jpg');
  photoGallery.append('Photo2.jpg');
  photoGallery.show(); // Output: Photo1.jpg → Photo2.jpg → null