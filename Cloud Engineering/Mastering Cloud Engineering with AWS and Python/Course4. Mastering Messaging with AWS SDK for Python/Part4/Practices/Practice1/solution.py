import boto3

# Initialize boto3 SNS resource
sns = boto3.resource('sns')

# Create a new SNS topic
topic = sns.create_topic(
    Name='MyTopic'
)

# Confirm the SNS topic creation
print("Created SNS topic:", topic.arn)

# Set a display name attribute for the SNS topic
topic.set_attributes(
    AttributeName='DisplayName',
    AttributeValue='My Topic Display Name'
)

# List all SNS topics
topics = list(sns.topics.all())
print("List of SNS Topics:", [topic.arn for topic in topics])