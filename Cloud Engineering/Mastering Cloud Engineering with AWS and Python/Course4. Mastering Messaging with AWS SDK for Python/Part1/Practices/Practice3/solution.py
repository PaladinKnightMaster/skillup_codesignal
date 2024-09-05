# import boto3

# # Pre-configured AWS session - use this to create your SQS resource and SNS client
# session = boto3.Session(
#     aws_access_key_id='test',
#     aws_secret_access_key='test',
#     region_name='us-west-2'
# )
# print("AWS session has been configured. Ready to proceed with SQS and SNS setup.")

# # TODO: Create SQS resource based on the session provided above

# # TODO: Create SNS client based on the session provided above

import boto3

# Pre-configured AWS session - use this to create your SQS resource and SNS client
session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)
print("AWS session has been configured. Ready to proceed with SQS and SNS setup.")

# TODO: Create SQS resource based on the session provided above
sqs_from_session = session.resource('sqs')
# TODO: Create SNS client based on the session provided above
sns_from_session = session.client('sns')