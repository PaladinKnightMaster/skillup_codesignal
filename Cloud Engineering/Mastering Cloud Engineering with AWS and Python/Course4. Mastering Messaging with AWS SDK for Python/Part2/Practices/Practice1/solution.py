import boto3

sqs = boto3.resource('sqs')

# Simple queue
queue = sqs.create_queue(QueueName='SimpleQueue')
print("Simple Queue URL:", queue.url)

# Queue with several attributes
queue = sqs.create_queue(
    QueueName='AttributeConfigQueue',
    Attributes={
        'VisibilityTimeout': '45',  # seconds
        'DelaySeconds': '5',        # seconds
        'MessageRetentionPeriod': '86400',  # seconds (1 day)
        'ReceiveMessageWaitTimeSeconds': '20'  # seconds
    }
)
print("Queue with attributes URL:", queue.url)

# FIFO queue
queue = sqs.create_queue(
    QueueName='MyQueue.fifo',
    Attributes={
        'FifoQueue': 'true',
        'ContentBasedDeduplication': 'true'
    }
)
print("FIFO Queue URL:", queue.url)