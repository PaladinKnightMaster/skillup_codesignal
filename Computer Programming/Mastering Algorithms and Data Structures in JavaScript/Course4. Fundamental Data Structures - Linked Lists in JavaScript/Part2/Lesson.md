# Mastering Linked List Operations: Reversal and Length Calculation in JavaScript

## Introduction to Linked List Manipulation
Welcome again to our hands-on exploration of linked lists in JavaScript! Like a necklace of interconnected links, a linked list is a collection of elements, each pointing to the next. Today, we're moving from theory to practice, and you'll learn to reverse a linked list using a stack and to determine the length of a linked list through our practical examples. These skills will give you a deeper understanding of how these structures work.

## LinkedList Implementation
In this lesson, we will use the following LinkedList implementation for both considered problems:

```JavaScript
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
}
```

It is the same as we had in the previous lesson.

## Problem 1: Reverse Linked List with Stack
Consider a to-do list on sticky notes, where each task points to the next by stacking on top. You'd want first to reverse this stack to focus on the most recent tasks. Similarly, to reverse the order of a linked list, we'll use a stack data structure.

Imagine an application feature displaying user activities, with the most recent ones appearing first. This requires reversing the list of events to display the latest entries.

## Problem 1: Approach Explanation: Utilizing a Stack
A stack's Last-In-First-Out (LIFO) property can be leveraged here to reverse the list succinctly. Pushing the list node's values onto the stack and then popping them out naturally reverses their order.

## Problem 1: Solution
We can now build a function that takes the list and returns a reversed array:

```JavaScript
function printReverse(list) {
    var stack = []; // Initialize the stack. It's empty now.
    var currentNode = list.head; // Start from the head of our list.

    // Traverse the list and push node values into the stack
    while (currentNode !== null) {
        stack.push(currentNode.value); // Push the value onto the stack
        currentNode = currentNode.next; // Move to the next node
    }

    // Pop values from the stack to print the values in reverse
    while (stack.length > 0) {
        console.log(stack.pop()); // Pop the values from the stack
    }
}


let list = new LinkedList();
list.append(1);
list.append(7);
list.append(3);
printReverse(list);  // 3 7 1
```

Every `push` adds an element to the stack, and every `pop` removes the last added element, resulting in a reversed order.

## Problem 2: Length of Linked List
Calculating the number of elements in a sequence resembles counting sticks in a bundle. We need to determine how many sticks are tied together in our linked list, which represents the list's length.

Suppose you manage a subscription service with a list of subscribers. In that case, calculating how many subscribers are active is similar to determining the list length: each subscriber is linked to the next in your records.

## Problem 2: Solution Building
To count our subscribers more efficiently, we can iterate through the list while maintaining a count of each node we encounter.

To tally the nodes in our linked list:

```JavaScript
function listLength(list) {
    var length = 0;
    var currentNode = list.head;
    // Traverse the list from head to tail
    while (currentNode !== null) {
        length++; // Increment our counter for each node encountered
        currentNode = currentNode.next; // Move to the next node in the list
    }
    return length;
}


let list = new LinkedList();
list.append(1);
list.append(7);
list.append(3);
console.log(listLength(list));  // 3
```

The `while` loop ensures we visit each node, and the counter's progression is analogous to noting each subscriber as you review your records.

## Lesson Summary
In today's session, you practiced reversing a linked list using stacks and measuring the length of a linked list. These examples bridged theoretical understanding with practical application, reflecting tasks developers routinely face. Through this guided practice, your skills with linked lists and knowledge of when to use specific data structures should be stronger.
