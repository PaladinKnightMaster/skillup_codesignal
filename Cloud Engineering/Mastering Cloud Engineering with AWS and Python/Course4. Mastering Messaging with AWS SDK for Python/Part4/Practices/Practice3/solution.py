# import boto3

# # Initialize boto3 SNS resource
# sns_resource = boto3.resource('sns')

# # Create 15 SNS topics
# for i in range(15):
#     sns_resource.create_topic(
#         Name=f'MyTopic{i}'
#     )

# # TODO: List all SNS topics with their ARNs

import boto3

# Initialize boto3 SNS resource
sns_resource = boto3.resource('sns')

# Create 15 SNS topics
for i in range(15):
    sns_resource.create_topic(
        Name=f'MyTopic{i}'
    )

# TODO: List all SNS topics with their ARNs
for topic in sns_resource.topics.all():
    print(topic.arn)