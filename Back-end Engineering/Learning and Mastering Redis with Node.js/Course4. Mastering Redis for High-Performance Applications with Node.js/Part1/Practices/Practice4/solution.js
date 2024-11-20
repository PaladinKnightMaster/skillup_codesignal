// import { createClient } from 'redis';

// const client = createClient({
//     host: 'localhost',
//     port: 6379
// });

// client.on('error', (err) => {
//     console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Add an 'add' event to the 'math_operations' stream with num1 as 5 and num2 as 3

// // TODO: Add a 'sub' event to the 'math.operations' stream with num1 as 10 and num2 as 4

// // Read two messages from the 'math_operations' stream
// const messages = await client.xRange('math_operations', '-', '+', { COUNT: 2 });

// messages.map(message => {
//     // TODO: Get the operation type, num1, and num2 from the message. Note, the fields are represented in the message.message object

//     // TODO: Perform the operation based on the event type
//         // Add the numbers if the operation is 'add'
//         // Subtract the numbers if the operation is 'sub'
//     // TODO: Print the operation and result in the format "Operation: ${operation}, Result: ${result}"
//     pass;
// });

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

await client.connect();

// TODO: Add an 'add' event to the 'math_operations' stream with num1 as 5 and num2 as 3
await client.xAdd('math_operations', '*', { 'event': 'add', 'num1': '5', 'num2': '3' });
// TODO: Add a 'sub' event to the 'math.operations' stream with num1 as 10 and num2 as 4
await client.xAdd('math_operations', '*', { 'event': 'sub', 'num1': '10', 'num2': '4' });
// Read two messages from the 'math_operations' stream
const messages = await client.xRange('math_operations', '-', '+', { COUNT: 2 });

messages.map(message => {
    // TODO: Get the operation type, num1, and num2 from the message. Note, the fields are represented in the message.message object
    const { event, num1, num2 } = JSON.parse(JSON.stringify(message.message));
    // TODO: Perform the operation based on the event type
        // Add the numbers if the operation is 'add'
        // Subtract the numbers if the operation is 'sub'
    let result;
    if (event === 'add') {
        result = parseInt(num1) + parseInt(num2);
    } else if (event === 'sub') {
        result = parseInt(num1) - parseInt(num2);
    }
    // TODO: Print the operation and result in the format "Operation: ${operation}, Result: ${result}"
    console.log(`Operation: ${event}, Result: ${result}`);
});

await client.disconnect();