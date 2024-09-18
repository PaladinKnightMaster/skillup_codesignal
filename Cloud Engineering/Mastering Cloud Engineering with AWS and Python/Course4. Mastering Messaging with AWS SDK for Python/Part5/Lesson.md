# Mastering AWS Messaging: Sending and Receiving Messages with SNS and SQS

## Introduction
Welcome back to **Mastering Messaging with AWS SDK for Python**. Today, we're exploring the integration of Amazon Simple Notification Service (SNS) and Simple Queue Service (SQS) to efficiently distribute messages. Employing the fan-out pattern allows a single publisher to communicate with multiple subscribers with ease.

## Initial setup
Imagine a scenario involving three services: `Service A`, `Service B`, and `Service C`. `Service A` needs to send information to both `Service B` and `Service C`. Rather than `Service A` managing individual SQS queues for each, we can simplify this process using an SNS topic to fan out messages.

## Publishing to an SNS Topic
Let's quickly illustrate how `Service A` publishes a message to an SNS topic, including some advanced publishing options:

```Python
import boto3

# Initialize the SNS resource
sns_resource = boto3.resource('sns')

# Create an SNS topic
topic = sns_resource.create_topic(Name='ServiceAUpdates')
topic_arn = topic.arn

# Publish a basic message
publish_response = topic.publish(
    Message='Updates for Services B and C',
)

# Publish a message with additional parameters
publish_response_advanced = topic.publish(
    Message='News update',
    Subject='Weekly News',
    MessageAttributes={
        'Priority': {
            'DataType': 'String',
            'StringValue': 'High'
        },
        'Department': {
            'DataType': 'Number',
            'StringValue': 'IT'
        }
    },
)
```
In these examples, we see a straightforward message broadcast to `ServiceAUpdates`, followed by an example with a `Subject` and `MessageAttributes`, adding context to messages sent.

## Subscribing SQS to an SNS Topic
To gear up `Service B` and `Service C` for message receipt, we'll direct them to listen to our SNS topic. This requires subscribing their SQS queues to the SNS topic:

```Python
import boto3

# Initialize the SNS and SQS resources
sns_resource = boto3.resource('sns')
sqs_resource = boto3.resource('sqs')

# Assume topic_arn is retrieved or known from previous steps
topic = sns_resource.Topic(topic_arn)

# Create SQS queues for Service B and C
serviceBQueue = sqs_resource.create_queue(QueueName='ServiceBQueue')
queueB_arn = serviceBQueue.attributes['QueueArn']

serviceCQueue = sqs_resource.create_queue(QueueName='ServiceCQueue')
queueC_arn = serviceCQueue.attributes['QueueArn']

# Subscribe the SQS queues to the SNS topic using the resource interface
subscriptionB = topic.subscribe(
    Protocol='sqs',
    Endpoint=queueB_arn,
    Attributes={
        'RawMessageDelivery': 'true'
    }
)

subscriptionC = topic.subscribe(
    Protocol='sqs',
    Endpoint=queueC_arn,
    Attributes={
        'RawMessageDelivery': 'true'
    }
)
```
This strategic approach ensures `Service B` and `Service C` are automatically updated with messages from `Service A`, efficiently demonstrating the fan-out pattern’s advantage.

Retrieving and processing messages from the queues remains straightforward, a practice reinforced from our earlier lessons:

```Python
# Fetching messages from Service B's queue as an example
messages = serviceBQueue.receive_messages(MaxNumberOfMessages=10)

for message in messages:
    print(message.body)
    message.delete()
```

## Summary
This lesson concentrated on using SNS and SQS together for the fan-out messaging pattern, facilitating streamlined communication across multiple services. We've revisited key concepts like topic creation and have detailed the process of publishing messages to a topic and subscribing SQS queues to an SNS topic. Experiment with different SNS topics and SQS queues, exploring the myriad ways in which this powerful integration can be customized to fit various messaging needs.
