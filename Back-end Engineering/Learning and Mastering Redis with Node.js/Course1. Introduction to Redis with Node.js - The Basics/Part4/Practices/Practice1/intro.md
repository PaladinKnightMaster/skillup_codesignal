# Using the `lIndex` Command to Retrieve Elements in Redis Lists

In this task, we will dive deeper into working with Redis lists using the `lIndex` command. This command is handy when you need to get an element at a specific index in the list.

The `lIndex` command in Redis takes two arguments:

1. The name of the list.
2. The index of the element you want to retrieve.

Here's an example to illustrate how the `lIndex` command works:

```JavaScript
await client.rPush('colors', 'Red', 'Green', 'Blue');
const color = await client.lIndex('colors', 1); // Get the element at index 1 (Green)
```

In the example above:

* We push the values `Red`, `Green`, and `Blue` onto the `colors` list.
* We use the `lIndex` command to retrieve the element at index 1, which is `Green` - remember that Redis lists are zero-based, which means the first element is at index 0.

Now, let's run the following code to see how the `lIndex` command works with our list of student names. Pay close attention to the output to understand how this command works.