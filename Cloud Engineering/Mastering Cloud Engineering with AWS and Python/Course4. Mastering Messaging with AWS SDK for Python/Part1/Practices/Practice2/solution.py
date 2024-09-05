# import boto3

# # TODO: Change the AWS region from 'us-west-1' to 'us-east-1'
# # Create AWS session with specified region and credentials
# session = boto3.Session(
#     aws_access_key_id='test',
#     aws_secret_access_key='test',
#     region_name='us-west-1'
# )

# print("Current AWS Session region:", session.region_name)

# # Create SQS resource based on this session
# sqs_from_session = session.resource('sqs')
# print("Current SQS resource region:", sqs_from_session.meta.client.meta.region_name)

# # Create SNS client based on this session
# sns_from_session = session.client('sns')
# print("Current SNS client region:", sns_from_session.meta.region_name)

import boto3

# TODO: Change the AWS region from 'us-west-1' to 'us-east-1'
# Create AWS session with specified region and credentials
session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-east-1'
)

print("Current AWS Session region:", session.region_name)

# Create SQS resource based on this session
sqs_from_session = session.resource('sqs')
print("Current SQS resource region:", sqs_from_session.meta.client.meta.region_name)

# Create SNS client based on this session
sns_from_session = session.client('sns')
print("Current SNS client region:", sns_from_session.meta.region_name)