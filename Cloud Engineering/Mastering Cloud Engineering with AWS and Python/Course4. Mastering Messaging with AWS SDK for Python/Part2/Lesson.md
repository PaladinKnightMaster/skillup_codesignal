# Creating and Configuring SQS Queues with Boto3

## Introduction to AWS Simple Queue Service (SQS)
Hey there, welcome back! In our introductory discussion, we briefly touched on AWS' Simple Queue Service (SQS) — a fully-managed messaging service perfect for decoupling and scaling microservices, distributed systems, and serverless applications. While we haven't delved into specifics yet, it's important to note that SQS offers two primary types of queues: **Standard Queues** and **FIFO** (First-In-First-Out) Queues. Let's explore these in more detail now:

* Standard Queues ensure maximum throughput and at-least-once delivery, but messages might be delivered out of order.
* FIFO Queues, on the other hand, deliver messages exactly once and preserve the order of messages — ensuring a message is processed only after the previous one.

## Exploration of SQS Queue Attributes
Let's delve into some more technical aspects. An SQS queue has a set of characteristics, known as attributes, that control the queue's behavior. Here are some important ones you should be aware of:

* `VisibilityTimeout`: This attribute indicates how long a message remains "invisible" to other consumers after it is read from the queue. This prevents multiple consumers from processing the same message. If the processing isn't acknowledged through message deletion within this period, the message reappears in the queue for processing by another consumer. By default, this is 30 seconds.

* `DelaySeconds`: This attribute holds the delay duration between a message being sent and it becoming available for processing. This can help in scenarios where processing should not occur immediately after message dispatch. The range is 0 to 900 seconds (15 minutes), with the default being 0 for immediate availability.

* `MessageRetentionPeriod`: This attribute specifies the maximum duration a message exists in the queue without being deleted. If a message isn't processed and deleted within this period, it will be automatically removed from the queue. By default, messages stay in the queue for 345600 seconds (4 days), but they can be retained from 60 seconds to a maximum of 1209600 seconds (14 days).

* `ReceiveMessageWaitTimeSeconds`: This attribute controls how long the ReceiveMessages call spends waiting if no message is available in the queue. This helps manage the latency of message receipt. The wait time can range from 0 to 20 seconds, with the default being 0 for immediate response.

* `MaximumMessageSize`: This attribute specifies the maximum size for a message before it gets sent to the queue, measured in bytes. The minimum size is 1 byte, and the maximum can be up to 262,144 bytes (256 KiB). Adjusting this attribute allows you to control the size of messages that your application sends or receives, preventing larger-than-expected messages from causing processing issues. By default, the maximum message size is set to 262,144 bytes.

By tweaking these attributes appropriately while creating an SQS queue, you can optimize its behavior for various use-cases. For instance, setting a short `VisibilityTimeout` reduces the time for a stalled message to become available to other consumers, whereas a longer `MessageRetentionPeriod` ensures important messages persist for longer if unprocessed.

## Creating a Standard Queue with Boto3
Let's begin with some practical coding! Our first task is creating a simple standard queue, and the Boto3 library simplifies this process for us.

Let's now examine the code:

```Python
import boto3

sqs_resource = boto3.resource('sqs')
queue = sqs_resource.create_queue(QueueName='SimpleQueue')
print("Simple Queue URL:", queue.url)
```

In this script, we're importing the `boto3` module, initializing an `SQS` resource, and creating a queue named 'SimpleQueue'. The `create_queue` method returns a queue that includes an URL of the created queue, which we print out.

Although we are using a resource interface in these examples, keep in mind that you can achieve these same actions with the client interface—it's just slightly less user-friendly.

## Configuring Queue Attributes
You can customize your SQS queue by setting particular attributes during its creation. Here is an example of a queue with a `VisibilityTimeout` of 45 seconds, `DelaySeconds` of 5 seconds, `MessageRetentionPeriod` of 86400 seconds (1 day), and `ReceiveMessageWaitTimeSeconds` of 20 seconds:

```Python
queue = sqs_resource.create_queue(
    QueueName='AttributeConfigQueue',
    Attributes={
        'VisibilityTimeout': '45',
        'DelaySeconds': '5',
        'MessageRetentionPeriod': '86400',  # 1 day
        'ReceiveMessageWaitTimeSeconds': '20'
    }
)
print("Queue with configured attributes URL:", queue.url)
```

These attributes adjust various aspects of message handling in the queue, allowing you to tailor the queue's behavior to fit your application's needs.

## Setting up FIFO Queue
FIFO queues have unique attributes. One of these is `ContentBasedDeduplication`, which allows SQS to generate a deduplication ID using the content of the message. When creating a FIFO queue, it is important to ensure your `QueueName` ends with '.fifo'. Here is the setup for a FIFO queue:

```Python
queue = sqs_resource.create_queue(
    QueueName='MyQueue.fifo',
    Attributes={
        'FifoQueue': 'true',
        'ContentBasedDeduplication': 'true'
    }
)

print("FIFO Queue URL:", queue.url)
```

This script creates a FIFO queue that supports content-based deduplication, ensuring that senders can't inadvertently send identical messages.

## Lesson Summary and Upcoming Practices
Great job! You've now learned how to create `SQS` queues with varying configurations. Be sure to practice these skills in the upcoming exercises where you'll be asked to create and configure SQS queues on your own.

In the next unit, we'll move on to "Sending and Receiving Messages in `SQS`". Remember, practice makes perfect. Keep coding and I'll see you in the next lesson!
