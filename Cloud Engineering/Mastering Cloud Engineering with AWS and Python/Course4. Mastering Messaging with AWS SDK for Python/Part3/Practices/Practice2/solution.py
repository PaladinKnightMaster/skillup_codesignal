# import boto3

# # Create an SQS resource
# sqs = boto3.resource('sqs')
# print("SQS resource created.")

# # Create a standard queue
# queue = sqs.create_queue(QueueName='test-queue')
# print(f"Queue created with URL: {queue.url}")

# # Message with custom attributes
# response = queue.send_message(
#     MessageBody='Hello with attributes!',
#     MessageAttributes={
#         'Author': {
#             'StringValue': 'John Doe',
#             'DataType': 'String'
#         },
#         'WeeksOnJob': {
#             'StringValue': '10',
#             'DataType': 'Number'
#         }
#         # TODO: Add a new attribute 'StartingDate' in 'YYYY-MM-DD' format
#     }
# )
# print(f"Message sent with ID: {response['MessageId']}")

import boto3

# Create an SQS resource
sqs = boto3.resource('sqs')
print("SQS resource created.")

# Create a standard queue
queue = sqs.create_queue(QueueName='test-queue')
print(f"Queue created with URL: {queue.url}")

# Message with custom attributes
response = queue.send_message(
    MessageBody='Hello with attributes!',
    MessageAttributes={
        'Author': {
            'StringValue': 'John Doe',
            'DataType': 'String'
        },
        'WeeksOnJob': {
            'StringValue': '10',
            'DataType': 'Number'
        },
        # TODO: Add a new attribute 'StartingDate' in 'YYYY-MM-DD' format
        'StartingDate': {
            'StringValue': '2022-01-01',
            'DataType': 'String'
        }
    }
)
print(f"Message sent with ID: {response['MessageId']}")