# import boto3

# # Create an SQS resource
# sqs = boto3.resource('sqs')

# # TODO: Create a standard SQS queue named 'AttrConfigStandardQueue'
# # TODO: Set the queue attributes 'VisibilityTimeout' to 20 minutes and 'ReceiveMessageWaitTimeSeconds' to 10 seconds

import boto3

# Create an SQS resource
sqs = boto3.resource('sqs')

# TODO: Create a standard SQS queue named 'AttrConfigStandardQueue'
queue = sqs.create_queue(QueueName='AttrConfigStandardQueue')
# TODO: Set the queue attributes 'VisibilityTimeout' to 20 minutes and 'ReceiveMessageWaitTimeSeconds' to 10 seconds
queue.set_attributes(
    Attributes={
        'VisibilityTimeout': '1200',
        'ReceiveMessageWaitTimeSeconds': '10'
    }
)