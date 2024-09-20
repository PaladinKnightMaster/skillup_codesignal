# import boto3

# # Initialize resources for SNS and SQS
# sns_resource = boto3.resource('sns')
# sqs_resource = boto3.resource('sqs')

# # Create the SQS queue
# queue = sqs_resource.create_queue(QueueName='MySQSQueue')

# # Get the ARN of the SQS queue
# queue_attrs = queue.attributes
# queue_arn = queue_attrs['QueueArn']

# # Create the SNS topic
# topic = sns_resource.create_topic(Name='MySNSTopic')
# topic_arn = topic.arn

# # Subscribe queue to the topic
# subscription = topic.subscribe(Protocol='sqs', Endpoint=queue_arn)

# # TODO: Send an SNS notification

# # TODO: Retrieve the message from the queue to verify its arrival. Implement long polling with a duration of 10 seconds.

import boto3
import json
import time

# Initialize resources for SNS and SQS
sns_resource = boto3.resource('sns')
sqs_resource = boto3.resource('sqs')

# Create the SQS queue
queue = sqs_resource.create_queue(QueueName='MySQSQueue')

# Get the ARN of the SQS queue
queue_attrs = queue.attributes
queue_arn = queue_attrs['QueueArn']

# Create the SNS topic
topic = sns_resource.create_topic(Name='MySNSTopic')
topic_arn = topic.arn

# Subscribe queue to the topic
subscription = topic.subscribe(Protocol='sqs', Endpoint=queue_arn)

# Publish a message to the SNS topic
message = {
    "default": "This is a test message for SNS",
    "email": "This message is for email endpoint",
    "sqs": "Message specifically for SQS"
}

response = topic.publish(
    Message=json.dumps(message),  # The message body
    MessageStructure='json'
)

print(f"Message published to SNS: {response['MessageId']}")

# Poll for the message from the SQS queue using long polling with a duration of 10 seconds
while True:
    messages = queue.receive_messages(
        MaxNumberOfMessages=1,  # Adjust as needed
        WaitTimeSeconds=10  # Long polling for 10 seconds
    )

    if messages:
        for msg in messages:
            print(f"Received message: {msg.body}")
            # Delete the message from the queue after processing
            msg.delete()
    else:
        print("No messages in the queue yet. Retrying...")
        time.sleep(2)  # Adding delay before retrying
