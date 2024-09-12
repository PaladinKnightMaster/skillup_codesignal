# Mastering SQS Operations: Sending, Receiving, and Deleting Messages

## Introduction
Today's lesson delves into the fundamentals of interacting with Amazon's Simple Queue Service (SQS) using the `boto3` library in Python, focusing specifically on Standard queues and FIFO (First-In, First-Out) queues. We'll explore the nuances of sending messages to both queue types, receiving messages efficiently, and properly deleting messages once they've been processed. By understanding these operations and their slight differences between Standard and FIFO queues, you'll gain a comprehensive skill set that allows for effective message management within AWS's SQS service. Let's embark on this journey to master sending, receiving, and deleting messages in both Standard and FIFO SQS queues.

## Sending Messages to Standard SQS Queues
To send a message to a Standard SQS queue, we initially retrieve the queue and then use the `send_message()` method.

```Python
import boto3

sqs = boto3.resource('sqs')
queue = sqs.get_queue_by_name(QueueName='Your-Queue-Name')

response = queue.send_message(
    MessageBody='Hello world!'
)
```
In addition to basic messages, you can send messages with custom attributes using `MessageAttributes`:

```Python
response = queue.send_message(
    MessageBody='Hello with attributes!',
    MessageAttributes={
        'Author': {
            'StringValue': 'John Doe',
            'DataType': 'String'
        },
        'WeeksOnJob': {
            'StringValue': '10',
            'DataType': 'Number'
        }
    }
)
```

## Sending Messages to FIFO SQS Queues
For sending messages to FIFO queues, the `send_message()` usage is largely the same. However, we need to include an additional parameter: `MessageGroupId`.

```Python
response = queue.send_message(
    MessageBody='Hello from FIFO!',
    MessageGroupId='messageGroup1'
)
```
The `MessageGroupId` parameter is a tag indicating that a group of messages belong together. Messages that belong to the same group are always processed one by one, in a strict order relative to the message group (FIFO).

## Sending Multiple Messages at a Time
When working with both Standard and FIFO SQS queues, there may be cases where you need to send multiple messages at once efficiently. AWS SQS supports batch sending through the `send_message_batch()` method, allowing up to 10 messages to be sent in a single action. This can significantly reduce the number of network calls to AWS, leading to lower costs and improved throughput.

Here's how you can send multiple messages in one go to a Standard queue:

```Python
response = queue.send_message_batch(
    Entries=[
        {
            'Id': 'message1',
            'MessageBody': 'This is the content of message 1'
        },
        {
            'Id': 'message2',
            'MessageBody': 'This is the content of message 2',
            'MessageAttributes': {
                'Author': {
                    'StringValue': 'Jane Doe',
                    'DataType': 'String'
                }
            }
        },
        # You can add up to 10 messages
    ]
)
```
For FIFO queues, remember to include `MessageGroupId` for each message, and if ordering is crucial, you may also need to specify `MessageDeduplicationId` for each message to avoid duplicates:

```Python
response = queue.send_message_batch(
    Entries=[
        {
            'Id': 'message1',
            'MessageBody': 'This is the content of message 1',
            'MessageGroupId': 'group1',
            'MessageDeduplicationId': '1'
        },
        {
            'Id': 'message2',
            'MessageBody': 'This is the content of message 2',
            'MessageGroupId': 'group1',
            'MessageDeduplicationId': '2'
        },
        # More messages up to 10
    ]
)
```
Using batch sending effectively lowers the cost by minimising the number of `send_message` calls and ensures your applications send messages to SQS queues more efficiently.

## Receiving Messages from SQS Queues
Receiving messages from both Standard and FIFO queues utilizes the `receive_message()` method with the queue object. The `MaxNumberOfMessages` parameter allows us to specify the quantity of retrieved messages, anywhere from 1 to a maximum of 10.

```Python
messages = queue.receive_messages(
    MaxNumberOfMessages=10
)
```
By default, the `receive_messages()` method uses short polling and immediately returns a response, even if there are no messages in the queue for that instant. To better manage our queues and avoid empty responses, we should adopt long polling. This solution delays the response until a message arrives in the queue, or the long polling duration ends. Here's how we set up long polling by adding the `WaitTimeSeconds` parameter:

```Python
messages = queue.receive_messages(
    MaxNumberOfMessages=10,
    WaitTimeSeconds=20
)
```
This method waits up to 20 seconds for a message to arrive, returning early if a message becomes available. This efficiently manages the queue, avoiding empty responses.

The response from the `receive_messages` method includes a list of messages, where each message contains various attributes such as the message body (`Body`), a receipt handle (`ReceiptHandle`), and any associated message attributes (`MessageAttributes`) defined when the message was sent.

## Deleting Messages from SQS Queues
Once we have processed a message, we should delete it from the queue to prevent it from being received and processed again. Each message received from the queue comes with a `receipt_handle`, which we use to delete the message. This can be achieved with the message object itself provided by the resource interface.

Here's an example of how to delete a message:

```Python
for message in messages:
    # Process your message
    print(message.body)
    # Now that the message is processed, delete it
    message.delete()
```
This method directly deletes the message using its own `delete` method, which internally uses its `receipt_handle` to remove it from the queue. This way, the message is not visible in the queue and cannot be received by another consumer.

Keep in mind that if the message is not deleted from the queue before the visibility timeout expires, the message will be available again, and another consumer can process it, potentially leading to the same message being processed multiple times.

You can also batch delete up to 10 messages at once using the `delete_message_batch()` function, but this operation is only possible with the client interface:

```Python
response = sqs_client.delete_message_batch(
    QueueUrl='Your-Queue-Url',
    Entries=[
        {
            'Id': 'msg123',
            'ReceiptHandle': 'ReceiptHandle1'
        },
        {
            'Id': 'msg456',
            'ReceiptHandle': 'ReceiptHandle2'
        },
        # More messages up to 10
    ]
)
```
This can be a more efficient way to delete multiple messages at once, reducing your cost and the number of API requests made.

## Summary
In this lesson, you've learned the similarities and differences between working with Standard and FIFO queues in SQS. Whether it's sending, receiving, or deleting, the operations are quite similar, but with important distinctions in parameters and behaviors. Keep practicing and experimenting with Standard and FIFO queues to reinforce your knowledge.
