# import boto3

# sqs = boto3.resource('sqs')

# queue = sqs.create_queue(
#     QueueName='student_queue.fifo',
#     Attributes={
#         'FifoQueue': 'true',
#         'ContentBasedDeduplication': 'true'
#     }
# )

# queue.send_message(
#     MessageBody='First Message',
#     MessageGroupId='CodeSignal2021'
# )

# queue.send_message(
#     MessageBody='Second Message',
#     MessageGroupId='CodeSignal2021'
# )

# # TODO: Receive both the messages from the queue in a single call using long polling. Print their contents.
# # TODO: Delete both messages from the queue.

import boto3

sqs = boto3.resource('sqs')

queue = sqs.create_queue(
    QueueName='student_queue.fifo',
    Attributes={
        'FifoQueue': 'true',
        'ContentBasedDeduplication': 'true'
    }
)

queue.send_message(
    MessageBody='First Message',
    MessageGroupId='CodeSignal2021'
)

queue.send_message(
    MessageBody='Second Message',
    MessageGroupId='CodeSignal2021'
)

# TODO: Receive both the messages from the queue in a single call using long polling. Print their contents.
response = queue.receive_messages(
    MaxNumberOfMessages=2,
    WaitTimeSeconds=10
)

for message in response:
    print(f"Processing message: {message.body}")
# TODO: Delete both messages from the queue.
    message.delete()
    print(f"Deleted message: {message.message_id}")