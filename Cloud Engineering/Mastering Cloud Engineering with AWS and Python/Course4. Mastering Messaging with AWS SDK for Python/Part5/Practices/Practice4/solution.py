# import boto3

# # Initialize Boto3 resource for SNS and SQS
# sns = boto3.resource('sns')
# sqs = boto3.resource('sqs')

# # Create the first SQS queue
# queue_1 = sqs.create_queue(QueueName='MySQSQueue')

# # Get the ARN of the SQS queue
# queue_arn_1 = queue_1.attributes.get('QueueArn')

# # Create the SNS topic
# topic = sns.create_topic(Name='MySNSTopic')
# topic_arn = topic.arn

# # Subscribe the first queue to the topic
# topic.subscribe(Protocol='sqs', Endpoint=queue_arn_1)

# # Create the second queue
# # Subscribe the second queue to the topic

# # Send an SNS notification
# topic.publish(Message='Hello World!')

# # Read the message from the first queue with long polling for 10s
# messages = queue_1.receive_messages(WaitTimeSeconds=10)

# for message in messages:
#     print(message.body)

# # TODO: Read the message from the second queue with long polling for 10s

import boto3

# Initialize Boto3 resource for SNS and SQS
sns = boto3.resource('sns')
sqs = boto3.resource('sqs')

# Create the first SQS queue
queue_1 = sqs.create_queue(QueueName='MySQSQueue')

# Get the ARN of the SQS queue
queue_arn_1 = queue_1.attributes.get('QueueArn')

# Create the SNS topic
topic = sns.create_topic(Name='MySNSTopic')
topic_arn = topic.arn

# Subscribe the first queue to the topic
topic.subscribe(Protocol='sqs', Endpoint=queue_arn_1)

# Create the second queue
# Subscribe the second queue to the topic
queue_2 = sqs.create_queue(QueueName='MySecondSQSQueue')
topic.subscribe(Protocol='sqs', Endpoint=queue_2.attributes.get('QueueArn'))

# Send an SNS notification
topic.publish(Message='Hello World!')

# Read the message from the first queue with long polling for 10s
messages = queue_1.receive_messages(WaitTimeSeconds=10)

for message in messages:
    print(message.body)

# TODO: Read the message from the second queue with long polling for 10s
messages = queue_2.receive_messages(WaitTimeSeconds=10)

for message in messages:
    print(message.body)