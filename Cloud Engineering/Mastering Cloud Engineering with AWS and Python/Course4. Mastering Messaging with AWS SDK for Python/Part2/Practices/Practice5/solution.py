# import boto3

# # Create a Boto3 resource for SQS
# sqs = boto3.resource('sqs')

# # TODO: Create an SQS FIFO queue named 'EffectiveProcessingFIFOQueue.fifo' with the prescribed attributes

import boto3

# Create a Boto3 resource for SQS
sqs = boto3.client('sqs')

# Define queue attributes
attributes = {
    'FifoQueue': 'true',
    'ContentBasedDeduplication': 'true',
    'DelaySeconds': '10',
    'MaximumMessageSize': '262144',  # 256 KiB in bytes
    'MessageRetentionPeriod': '259200',  # 3 days in seconds
    'ReceiveMessageWaitTimeSeconds': '20'
}

# Create the FIFO queue
response = sqs.create_queue(
    QueueName='EffectiveProcessingFIFOQueue.fifo',
    Attributes=attributes
)

# Print the URL of the created queue
print(f"Queue URL: {response['QueueUrl']}")
