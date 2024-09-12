# import boto3

# # Create a boto3 resource for SQS
# sqs = boto3.resource('sqs')

# # Get the existing queue
# queue = sqs.get_queue_by_name(QueueName='MyLearningQueue')

# # Receive a message from the queue

# # Print the received message

# # Delete the received message from the queue

import boto3

# Create a boto3 resource for SQS
sqs = boto3.resource('sqs')

# Get the existing queue
queue = sqs.get_queue_by_name(QueueName='MyLearningQueue')

# Receive a message from the queue
response = queue.receive_messages()
# Print the received message
for message in response:
    print(message.body)
# Delete the received message from the queue
for message in response:
    message.delete()