# import boto3

# # Initialize boto3 SNS resource
# sns = boto3.resource('sns')

# # Create a new SNS topic
# topic = sns.create_topic(
#     Name='MyTopic'
# )

# # Confirm the SNS topic creation
# print("Created SNS topic:", topic.arn)

# # TODO: Set a display name attribute for the SNS topic

import boto3

# Initialize boto3 SNS resource
sns = boto3.resource('sns')

# Create a new SNS topic
topic = sns.create_topic(
    Name='MyTopic'
)

# Confirm the SNS topic creation
print("Created SNS topic:", topic.arn)

# TODO: Set a display name attribute for the SNS topic
topic.set_attributes(
    AttributeName='DisplayName',
    AttributeValue='TopicArn'
)

import boto3

# Initialize boto3 SNS resource
sns = boto3.resource('sns')

# Create a new SNS topic
topic = sns.create_topic(
    Name='MyTopic'
)

# Confirm the SNS topic creation
print("Created SNS topic:", topic.arn)

# TODO: Set a display name attribute for the SNS topic
topic.set_attributes(
    AttributeName='DisplayName',
    AttributeValue='MyTopicDisplayName'
)

# Confirm setting the DisplayName attribute
print(f"DisplayName set to: {topic.attributes.get('DisplayName')}")