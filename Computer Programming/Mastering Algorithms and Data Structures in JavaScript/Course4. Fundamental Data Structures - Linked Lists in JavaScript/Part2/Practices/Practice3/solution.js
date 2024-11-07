// class Node {
//     constructor(value, next=null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head=null;
//     }

//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let currentNode = this.head;
//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = newNode;
//         }
//     }

//     findFromEnd(element) {
//         let stack = [];
//         let currentNode = this.head;
//         while(currentNode) {
//             // TODO: fill in the stack
//         }
//         let countFromEnd = 0;
//         while(stack.length > 0) {
//             // TODO find element's index in stack
//         }
//         return -1; // return -1 if element not found
//     }
// }

// let list = new LinkedList();
// list.append(1);
// list.append(7);
// list.append(3);
// list.append(5);
// list.append(6);

// console.log(list.findFromEnd(7)); // Output: 3
// console.log(list.findFromEnd(1)); // Output: 4
// console.log(list.findFromEnd(8)); // Output: -1 (Element not found)

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

    findFromEnd(element) {
        let stack = [];
        let currentNode = this.head;
        while(currentNode) {
            // TODO: fill in the stack
            stack.push(currentNode.value);
            currentNode = currentNode.next;
        }
        let countFromEnd = 0;
        while(stack.length > 0) {
            // TODO find element's index in stack
            if (stack.pop() === element) {
                return countFromEnd;
            }
            countFromEnd++;
        }
        return -1; // return -1 if element not found
    }
}

let list = new LinkedList();
list.append(1);
list.append(7);
list.append(3);
list.append(5);
list.append(6);

console.log(list.findFromEnd(7)); // Output: 3
console.log(list.findFromEnd(1)); // Output: 4
console.log(list.findFromEnd(8)); // Output: -1 (Element not found)