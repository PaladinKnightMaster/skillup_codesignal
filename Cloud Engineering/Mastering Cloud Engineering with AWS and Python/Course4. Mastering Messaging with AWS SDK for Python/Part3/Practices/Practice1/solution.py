import boto3

# Create an SQS resource
sqs = boto3.resource('sqs')

# Create a standard queue
standard_queue = sqs.create_queue(QueueName='test-queue')
standard_queue_url = standard_queue.url

# Create a FIFO queue
fifo_queue = sqs.create_queue(
    QueueName='test-queue.fifo',
    Attributes={
        'FifoQueue': 'true',
        'ContentBasedDeduplication': 'true'
    }
)
fifo_queue_url = fifo_queue.url

# Simple message
response = standard_queue.send_message(
    MessageBody='Hello world!'
)

# Message with custom attributes
response = standard_queue.send_message(
    MessageBody='Hello with attributes!',
    MessageAttributes={
        'Author': {
            'StringValue': 'John Doe',
            'DataType': 'String'
        },
        'WeeksOnJob': {
            'StringValue': '10',
            'DataType': 'Number'
        }
    }
)

# Message with delay seconds
response = standard_queue.send_message(
    MessageBody='Hello with delay!',
    DelaySeconds=10
)

# Message to FIFO queue with message group id and deduplication id
response = fifo_queue.send_message(
    MessageBody='Hello from FIFO queue!',
    MessageGroupId='group1',
    MessageDeduplicationId='abc123'
)

response = standard_queue.receive_messages(
    MaxNumberOfMessages=10  # retrieves up to 10 messages
)

if response:
    for message in response:
        print(f"Processing message: {message.body}")

        # Delete received message from queue
        message.delete()
        print(f"Deleted message: {message.message_id}")
else:
    print("No messages to process!")