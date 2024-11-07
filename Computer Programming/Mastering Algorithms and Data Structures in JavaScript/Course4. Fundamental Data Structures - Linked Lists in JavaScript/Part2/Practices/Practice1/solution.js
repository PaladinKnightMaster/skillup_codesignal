// class Node {
//     constructor(value, next=null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {this.head=null;}

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
// }

// function printReverse(list, n) {
//     var stack = [];
//     var currentNode = list.head;
//     var countNodes = 0;

//     // TODO: put elements from list to a stack

//     // TODO: print first N elements from stack. It is guaranteed the stack will always have N elements
// }

// let list = new LinkedList();
// list.append(1);
// list.append(7);
// list.append(3);
// list.append(5);
// list.append(6);
// printReverse(list, 3);  // Outputs: 6 5 3

class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {this.head=null;}

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
}

function printReverse(list, n) {
    var stack = [];
    var currentNode = list.head;
    var countNodes = 0;

    // TODO: put elements from list to a stack
    while (currentNode) {
        stack.push(currentNode.value);
        currentNode = currentNode.next;
        countNodes++;
    }
    // TODO: print first N elements from stack. It is guaranteed the stack will always have N elements
    for (var i = 0; i < n; i++) {
        console.log(stack.pop());
    }
}

let list = new LinkedList();
list.append(1);
list.append(7);
list.append(3);
list.append(5);
list.append(6);
printReverse(list, 3);  // Outputs: 6 5 3