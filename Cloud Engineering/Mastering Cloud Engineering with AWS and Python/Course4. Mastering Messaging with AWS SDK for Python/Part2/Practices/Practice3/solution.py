# import boto3

# sqs = boto3.resource('sqs')

# fifo_queue_name = 'FIFOQueue'

# # Creating the FIFO queue
# queue = sqs.create_queue(
#     QueueName=fifo_queue_name,
#     Attributes={
#         'FifoQueue': 'true',
#         'VisibilityTimeout': '45',
#         'DelaySeconds': '5',
#         'MaximumMessageSize': '262144',  # in bytes
#         'MessageRetentionPeriod': '86400',  # in seconds
#         'ContentBasedDeduplication': 'true',
#         'ReceiveMessageWaitTimeSeconds': '20'
#     }
# )

# print("FIFO Queue URL:", queue.url)

import boto3

sqs = boto3.resource('sqs')

# FIFO queue names must end with '.fifo'
fifo_queue_name = 'FIFOQueue.fifo'

# Creating the FIFO queue
queue = sqs.create_queue(
    QueueName=fifo_queue_name,
    Attributes={
        'FifoQueue': 'true',  # Required attribute for FIFO queues
        'VisibilityTimeout': '45',
        'DelaySeconds': '5',
        'MaximumMessageSize': '262144',  # in bytes
        'MessageRetentionPeriod': '86400',  # in seconds
        'ContentBasedDeduplication': 'true',  # Enable content-based deduplication
        'ReceiveMessageWaitTimeSeconds': '20'
    }
)

print("FIFO Queue URL:", queue.url)
