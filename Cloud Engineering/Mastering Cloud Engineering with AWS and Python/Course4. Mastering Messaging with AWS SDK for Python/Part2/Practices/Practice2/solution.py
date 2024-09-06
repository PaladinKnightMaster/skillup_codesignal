# import boto3

# sqs = boto3.resource('sqs')

# # Queue with attributes
# queue = sqs.create_queue(
#     QueueName='AttributeConfigQueue',
#     Attributes={
#         'VisibilityTimeout': '20',
#         'DelaySeconds': '5',
#         'MessageRetentionPeriod': '86400',
#         'ReceiveMessageWaitTimeSeconds': '10'
#     }
# )

# print(f"Queue configured with initial settings. ARN: {queue.attributes.get('QueueArn')}")

import boto3

sqs = boto3.resource('sqs')

# Queue with attributes
queue = sqs.create_queue(
    QueueName='AttributeConfigQueue',
    Attributes={
        'VisibilityTimeout': '3600',
        'DelaySeconds': '30',
        'MessageRetentionPeriod': '259200',
        'ReceiveMessageWaitTimeSeconds': '10'
    }
)

print(f"Queue configured with initial settings. ARN: {queue.attributes.get('QueueArn')}")