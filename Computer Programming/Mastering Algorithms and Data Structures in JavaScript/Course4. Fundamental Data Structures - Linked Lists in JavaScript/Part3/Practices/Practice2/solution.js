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


// function sumOfEverySecond(list) {
//     if (list.head === null) return 0;

//     let sum = 0, index = 0;
//     let currentNode = list.head;

//     while (currentNode !== null) {
//         // TODO: Walk through the linked list, adding the value of every second node.
//     }

//     // return the sum.
//     return sum;
// }


// let list = new LinkedList();
// list.append(2);
// list.append(3);  // to be counted
// list.append(7);
// list.append(2);  // to be counted
// list.append(1);
// list.append(5);  // to be counted
// console.log(sumOfEverySecond(list)); // 10

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


function sumOfEverySecond(list) {
    if (list.head === null) return 0;

    let sum = 0, index = 0;
    let currentNode = list.head;

    while (currentNode !== null) {
        // TODO: Walk through the linked list, adding the value of every second node.

        if ((index + 1) % 2 === 0) {
            sum += currentNode.value;
        }
        currentNode = currentNode.next;
        index++;
    }

    // return the sum.
    return sum;
}


let list = new LinkedList();
list.append(2);
list.append(3);  // to be counted
list.append(7);
list.append(2);  // to be counted
list.append(1);
list.append(5);  // to be counted
console.log(sumOfEverySecond(list)); // 10