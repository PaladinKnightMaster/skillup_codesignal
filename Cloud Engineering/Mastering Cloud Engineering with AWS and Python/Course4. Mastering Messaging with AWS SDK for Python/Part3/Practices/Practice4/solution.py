# import boto3

# sqs = boto3.resource('sqs')

# queue = sqs.create_queue(
#     QueueName='student_queue.fifo',
#     Attributes={
#         'FifoQueue': 'true',
#         'ContentBasedDeduplication': 'true'
#     }
# )

# # TODO: Send 2 messages to the queue with the same MessageGroupId of 'CodeSignal2021'.

import boto3

sqs = boto3.resource('sqs')

queue = sqs.create_queue(
    QueueName='student_queue.fifo',
    Attributes={
        'FifoQueue': 'true',
        'ContentBasedDeduplication': 'true'
    }
)

# TODO: Send 2 messages to the queue with the same MessageGroupId of 'CodeSignal2021'.
response = queue.send_message(
    MessageBody='Hello from FIFO!',
    MessageGroupId='CodeSignal2021'
)

response = queue.send_message(
    MessageBody='Second Hello from FIFO!',
    MessageGroupId='CodeSignal2021'
)