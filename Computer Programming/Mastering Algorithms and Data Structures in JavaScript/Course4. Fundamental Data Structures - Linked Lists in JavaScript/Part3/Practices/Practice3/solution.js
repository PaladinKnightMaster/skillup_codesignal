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
//     if (list.head === null || list.head.next === null) return 0;

//     let sum = 0, index = 0;
//     let currentNode = list.head;
//     // TODO: initialize set to track visited planets

//     while (currentNode !== null) {
//         // TODO: calculate the result
//     }

//     return sum;
// }


// let list = new LinkedList();
// list.append(1);
// list.append(3); // to be counted
// list.append(7);
// list.append(2); // to be counted
// list.append(4);
// list.append(2); // not to be counted, because not unique
// console.log(sumOfEverySecond(list));  // Expected: 5

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
    if (list.head === null || list.head.next === null) return 0;

    let sum = 0, index = 0;
    let currentNode = list.head;
    // TODO: initialize set to track visited planets
    let set = new Set();

    while (currentNode !== null) {
        // TODO: calculate the result

        if (set.has(currentNode.value)) {
            currentNode = currentNode.next;
            continue;
        }

        if ((index + 1) % 2 === 0) {
            sum += currentNode.value;
        }

        set.add(currentNode.value);
        currentNode = currentNode.next;
        index++;
    }

    return sum;
}


let list = new LinkedList();
list.append(1);
list.append(3); // to be counted
list.append(7);
list.append(2); // to be counted
list.append(4);
list.append(2); // not to be counted, because not unique
console.log(sumOfEverySecond(list));  // Expected: 5