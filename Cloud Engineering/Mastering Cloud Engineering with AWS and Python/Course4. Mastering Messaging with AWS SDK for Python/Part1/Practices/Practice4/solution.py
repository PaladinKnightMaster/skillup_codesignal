# import boto3

# # TODO: Create a default AWS SQS resource

# # TODO: Create a default AWS SNS client

# # TODO: Set up an AWS Session with specified region and credentials.
# # Use 'test' for AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and 'us-west-2' for the AWS region.

# # TODO: Based on this session, create an SQS resource.

# # TODO: Based on this session, create an SNS client.


import boto3

# TODO: Create a default AWS SQS resource
default_sqs_resource = boto3.resource('sqs')
# TODO: Create a default AWS SNS client
default_sns_client = boto3.client('sns')
# TODO: Set up an AWS Session with specified region and credentials.
# Use 'test' for AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and 'us-west-2' for the AWS region.
aws_session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)
# TODO: Based on this session, create an SQS resource.
sqs_resource = aws_session.resource('sqs')
# TODO: Based on this session, create an SNS client.
sns_client = aws_session.client('sns')