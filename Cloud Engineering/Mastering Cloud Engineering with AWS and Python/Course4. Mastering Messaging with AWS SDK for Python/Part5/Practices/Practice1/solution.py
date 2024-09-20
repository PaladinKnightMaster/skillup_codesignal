import boto3

# Setup our SNS resource
sns = boto3.resource('sns')

# Create the SNS topic
topic = sns.create_topic(
    Name='MyDemoTopic'
)

# Get the topic ARN
topic_arn = topic.arn

# Setup an SQS resource
sqs = boto3.resource('sqs')

# Create a new SQS queue
queue = sqs.create_queue(
    QueueName='MyDemoQueue',
)

# Get the queue URL and ARN
queue_url = queue.url
queue_arn = queue.attributes.get('QueueArn')

# Subscribe the SQS queue to the SNS topic using topic object
subscription = topic.subscribe(
    Protocol='sqs',
    Endpoint=queue_arn,
    ReturnSubscriptionArn=True
)

# Publish a message to the SNS topic using topic object
message = topic.publish(
    Message='Hello from MyDemoTopic!',
)

# Receive message from the SQS queue using queue object
messages = queue.receive_messages(
    WaitTimeSeconds=10,
    MaxNumberOfMessages=10,
)

# Print out the messages
for message in messages:
    print(message.body)