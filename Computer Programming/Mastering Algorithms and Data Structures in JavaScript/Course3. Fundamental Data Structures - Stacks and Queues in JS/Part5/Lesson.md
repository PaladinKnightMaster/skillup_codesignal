# Mastering Queue Operations: Efficient Data Processing for Interviews

## Introduction to Queue-Based Problem Solving
Welcome back! As we continue our exploration of data structures, our focus now turns to the versatile **queue**. Imagine being at your favorite coffee shop where orders are taken on a first-come, first-served basis. This process exemplifies how queues function in computer science, making them ideal for modeling scenarios such as printing documents, handling customer service requests, or managing tasks in computing. Today, we will tackle two common interview problems that utilize queues to demonstrate their practical application in solving real-world challenges.

## Problem 1: Queue Interleaving
When merging data from two different sources, we seek to alternate between each source fairly, much as traffic from two lanes merges on a highway. Cars from both lanes are expected to merge seamlessly, taking turns. In the world of data structures, we face a similar task of intertwining two queues.

## Problem 1: Problem Actualization
Suppose you're working with two devices that send printing tasks to a shared printer. You would alternate print jobs from each device's queue to prevent one device from monopolizing the printer. This concept of combining two queues by alternating their elements is what we're implementing here.

## Problem 1: Efficient Approach Explanation
An efficient solution adheres strictly to queue operations: `enqueue` (to add an element) and `dequeue` (to remove and fetch the front element). We interleave by performing alternating `dequeue` operations from each queue, and adding the results to a new one. This approach respects the FIFO nature of queues and optimizes time complexity.

## Problem 1: Solution Building
Let's work through the implementation step by step. We will use the same queue implementation, as in the previous lesson.

```JavaScript
function interweaveQueues(queue1, queue2) {
  let resultQueue = new Queue();

  // Continuously loop until both queues are empty.
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    // Take turns removing elements from each queue and enqueuing them into the resultQueue.
    if (!queue1.isEmpty()) {
      resultQueue.enqueue(queue1.dequeue());
    }
    if (!queue2.isEmpty()) {
      resultQueue.enqueue(queue2.dequeue());
    }
  }
  return resultQueue;
}
```

Through this method, we maintain a fair and balanced output, accurate to the input order. It's akin to taking turns in a game, ensuring each player receives an equal opportunity. Our queue operations ensure we only add or remove from the front, maintaining the integrity and sequence of each queue's items.

## Problem 2: Moving Average for Data Stream
Let's move on to the next problem - calculating the moving average from a data stream. This often appears in technical interviews and is typically applied in real-time decision-making settings, such as a trader monitoring livestock prices for rapid buying or selling decisions. We have to compute the average of the last `k` elements from a streaming data, which is crucial for trend analysis in data science.

## Problem 2: Real-world Scenario
Consider a fitness app that continually updates the user's average heart rate over the previous 10 minutes. Based on each new heart rate reading, the app calculates and updates this information to present the user's latest health status.

## Problem 2: Naive Approach
A simple technique would be to store all the data points and recompute the average every time a new item arrives. However, this method might need to be more efficient, especially when dealing with large datasets or infinite data streams.

## Problem 2: Efficient Solution to the Problem
A queue can provide an efficient solution to this problem. Keeping a sliding window of the most recent `k` elements mirrors our fitness app's continuous update cycle of heart rate readings, where newer readings replace the older entries.

## Problem 2: Building the Solution
Let's visualize the creation of a `MovingAverage` class that simulates the backend of our fitness tracking app. It will dynamically produce the average of the last `k` heart rate readings:

```JavaScript
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.window = new Queue();
        this.sum = 0.0;
    }

    next(val) {
        if (this.window.getSize() === this.size) {
            this.sum -= this.window.dequeue();
        }

        this.window.enqueue(val);
        this.sum += val;
        return this.sum / this.window.getSize();
    }
}
```

In the `next` method, when the window reaches its maximum capacity (like reaching the 10-minute mark in our app), we remove the earliest reading before adding the new one. We then add the new value to our sum and calculate the average by dividing the sum by the current window's size — just like the app would update the display with the latest average heart rate.

## Problem 2: Complete Code
Below is the completed code for you to experiment with. Visualize live data moving in and out, with the heart rate average dynamically adjusting after each new reading:

```JavaScript
const movingAvg = new MovingAverage(3);
console.log(movingAvg.next(1));     // returns 1.0 (like a single heart rate reading)
console.log(movingAvg.next(10));    // returns 5.5 (the average after a short burst of activity)
console.log(movingAvg.next(3));     // returns 4.66667 (normalizing after the burst)
console.log(movingAvg.next(5));     // returns 6.0 (the most recent average, taking into account the last three readings)
```

## Lesson Summary
Today's session has brought the queue to life, advancing us beyond its simple definition to its powerful application in common interview problems. Whether balancing traffic flow or tracking step counts, queues offer an optimal way to handle data requiring order and equity. As we encounter more challenges using queues, remember that although each problem may demand a unique method, principles of data structures like queues remain our constant guide.
