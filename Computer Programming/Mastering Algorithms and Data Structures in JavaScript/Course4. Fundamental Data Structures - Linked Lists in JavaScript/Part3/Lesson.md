# Decoding Interview Problems: Mastering Linked Lists in JavaScript

## Introduction to the Lesson
Today, we will tackle common interview challenges regarding linked lists, focusing on honing your problem-solving skills. Like figuring out the best way to organize a messy drawer, we'll explore ways to streamline and refine our coding techniques when working with linked lists. By the end, you'll have a better grasp of crafting efficient algorithms and writing clean, effective JavaScript code.

## LinkedList Implementation
In this lesson, we will use the same linked list implementation as in the previous one, but with one additional method to display the list:

```JavaScript
show() {
    let currentNode = this.head;
    while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}
```

## Problem 1: Linked List Deduplication
Our journey begins with a linked list with several duplicate values, resembling a situation where an email campaign mistakenly sends multiple invites to the same guests. Our goal is equivalent to ensuring each guest receives only one invitation, which means we must eliminate these duplicate nodes from our linked list.

## Problem 1: Efficient Approach Explanation
Much as you would mark songs you have already checked, we can use a `Set` to keep track of the node values we've seen. When a duplicate value surfaces, we bypass the node altogether, simplifying the process to a manageable single pass through the list or an O(n) operation — much as you would realize you've already heard this song and skip it. This method efficiently preserves our list's uniqueness, much like that perfect, non-repetitive playlist you'd enjoy on a long drive.

## Problem 1: Solution Building
Here’s a step-by-step breakdown of how you'd implement such a solution:

```JavaScript
function removeDuplicates(list) {
    if (list.head === null || list.head.next === null) return head;

    let currentNode = list.head;
    // Imagine the set as a guest list where we mark off each attendee.
    const seen = new Set([currentNode.value]);

    while (currentNode.next !== null) {
        // Upon encountering a guest who's already marked, we avoid re-inviting them.
        if (seen.has(currentNode.next.value)) {
            currentNode.next = currentNode.next.next;
        } else {
            // A new guest is marked as 'invited'.
            seen.add(currentNode.next.value);
            currentNode = currentNode.next;
        }
    }
}
```

We kick things off with an empty 'guest list' — our `Set`. Moving through the linked list, we add each unique value to the set. Whenever we encounter a value already in the set, we skip over the node containing it. This method ensures we only 'invite' each unique value once.

## Problem 1: Solution Building: Example:
Here is an example of how we might use this function:

```JavaScript
let list = new LinkedList();
list.append(1);
list.append(1);
list.append(3);
list.append(3);
list.append(3);
list.append(5);
removeDuplicates(list)
list.show();  // 1 3 5
```

It successfully removes all the duplicates from the defined list.

## Problem 2: Average of Every Third Element
For our next challenge, let's calculate the average of every third element in a linked list. Picture yourself in a fruit orchard, tasting every third apple to understand the overall harvest quality. While you would only sample some apples, this systematic approach lets you estimate the batch's quality reliably.

Much like our orchard sampling, sampling at consistent intervals can reduce noise in signal processing, helping us focus on signal trends. Consider financial analysts, who might average quarterly results to understand a company's performance trend.

## Problem 2: Approach Explanation
We'll keep a running sum and a tally of every third element as we traverse the linked list. Once we reach the end, we can easily calculate the average, avoiding extra storage or double-handling of nodes. This simplification keeps our operation at O(n) complexity, like sampling apples directly from the tree without hauling them all back to the barn first!

## Problem 2: Solution Building
Here's how to implement this sampling:

```JavaScript
function averageOfEveryThird(list) {
    if (list.head === null) return 0;

    let sum = 0, count = 0, index = 0;
    let currentNode = list.head;

    // Walk through the orchard (linked list), tasting (examining) every third apple (node).
    while (currentNode !== null) {
        // Only use every third element
        if ((index + 1) % 3 === 0) {
            // Add the value and increment the count.
            sum += currentNode.value;
            count++;
        }
        currentNode = currentNode.next;  // Move to the next tree (node).
        index++;  // Take a step forward.
    }

    // It's time to calculate the average value of our sampled nodes.
    return parseFloat((sum / count).toFixed(2));
}
```

Our implementation starts with checks for a 'no apples' scenario. Strolling through our orchard, we sample every third apple and update our running total. Note that we use `(index + 1)` in the condition `(index + 1) % 3 === 0`, because we need every third apple, and indexing in JavaScript starts with `0`. Finally, we average our notes to convey the orchard's overall apple quality. Rounding our average to two decimal places is comparable to briefly summarizing our tastings.

## Problem 2: Solution Building: Example
Here is an example of how we might use this function:

```JavaScript
let list = new LinkedList();
list.append(2);
list.append(3);
list.append(7);  // to be counted
list.append(2);
list.append(1);
list.append(5);  // to be counted
console.log(averageOfEveryThird(list)); // 6
```

The answer is `6`, because it is an average value between the third value `7` and the sixth value `5`.

## Lesson Summary
In this session, we've applied discernment and mathematics to solve two linked list problems you're likely to encounter in job interviews. We've used clear real-world analogies to relate the practical approaches to everyday tasks, enabling easier comprehension. Keeping our code efficient and to the point, we've unwound the issues to straightforward and quick solutions.

Now that the explanations have been fleshed out, it's time to apply what you've learned.
