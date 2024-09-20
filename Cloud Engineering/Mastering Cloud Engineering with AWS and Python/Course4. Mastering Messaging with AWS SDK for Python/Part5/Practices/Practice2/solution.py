# import boto3

# # Initialize Boto3 resource for SNS and SQS
# sns_resource = boto3.resource('sns')
# sqs_resource = boto3.resource('sqs')

# # Create the SQS queue
# queue = sqs_resource.create_queue(QueueName='MySQSQueue')

# # Get the ARN of the SQS queue
# queue_arn = queue.attributes.get('QueueArn')

# # Create the SNS topic
# topic = sns_resource.create_topic(Name='MySNSTopic')
# topic_arn = topic.arn

# # TODO: Add code to subscribe the SQS queue to the SNS topic using the topic's `subscribe` method.

import boto3

# Initialize Boto3 resource for SNS and SQS
sns_resource = boto3.resource('sns')
sqs_resource = boto3.resource('sqs')

# Create the SQS queue
queue = sqs_resource.create_queue(QueueName='MySQSQueue')

# Get the ARN of the SQS queue
queue_arn = queue.attributes.get('QueueArn')

# Create the SNS topic
topic = sns_resource.create_topic(Name='MySNSTopic')
topic_arn = topic.arn

# TODO: Add code to subscribe the SQS queue to the SNS topic using the topic's `subscribe` method.
subscription = topic.subscribe(
    Protocol='sqs',
    Endpoint=queue_arn,
    ReturnSubscriptionArn=True
)