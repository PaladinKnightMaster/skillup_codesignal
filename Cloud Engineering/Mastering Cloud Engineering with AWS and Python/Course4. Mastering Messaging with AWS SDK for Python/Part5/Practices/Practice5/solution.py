# import boto3

# # Initialize boto3 resource for SNS and SQS
# sns = boto3.resource('sns')
# sqs = boto3.resource('sqs')

# # TODO: Use the sqs resource to create an SQS queue named 'MyHeartbeatQueue'.

# # TODO: Get the 'MyHeartbeat' SNS topic using its ARN 'arn:aws:sns:us-east-1:000000000000:MyHeartbeat'

# # TODO: Subscribe the created SQS queue to the 'MyHeartbeat' SNS topic

# # TODO: Poll for messages with 'WaitTimeSeconds' of 10, print their bodies, and delete after processing.

import boto3
import time

# Initialize boto3 resource for SNS and SQS
sns = boto3.resource('sns')
sqs = boto3.resource('sqs')

# Create an SQS queue named 'MyHeartbeatQueue'
queue = sqs.create_queue(QueueName='MyHeartbeatQueue')

# Get the 'MyHeartbeat' SNS topic using its ARN
topic_arn = 'arn:aws:sns:us-east-1:000000000000:MyHeartbeat'
topic = sns.Topic(topic_arn)

# Subscribe the created SQS queue to the 'MyHeartbeat' SNS topic
queue_arn = queue.attributes['QueueArn']
subscription = topic.subscribe(Protocol='sqs', Endpoint=queue_arn)

print(f"Subscribed SQS queue {queue_arn} to SNS topic {topic_arn}")

# Poll for messages with 'WaitTimeSeconds' of 10, print their bodies, and delete after processing
while True:
    messages = queue.receive_messages(
        MaxNumberOfMessages=1,  # Retrieve up to 1 message at a time
        WaitTimeSeconds=10  # Long polling for 10 seconds
    )

    if messages:
        for msg in messages:
            print(f"Received message: {msg.body}")
            # After processing, delete the message from the queue
            msg.delete()
    else:
        print("No messages received. Retrying...")
        time.sleep(5)  # Wait for 5 seconds before retrying
