# import boto3

# # TO DO: Create an AWS session with explicit credentials 'test' / 'test' and region 'us-west-2'

# # TO DO: Create a DynamoDB resource based on the session

# # TO DO: Create a DynamoDB client based on the session

# # TO DO: Create a default DynamoDB resource with the default session

# # TO DO: Create a default DynamoDB client with the default session

import boto3

# TO DO: Create an AWS session with explicit credentials 'test' / 'test' and region 'us-west-2'
session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)
# TO DO: Create a DynamoDB resource based on the session
resource = session.resource('dynamodb')
# TO DO: Create a DynamoDB client based on the session
client = session.client('dynamodb')
# TO DO: Create a default DynamoDB resource with the default session
default_resource = boto3.resource('dynamodb')
# TO DO: Create a default DynamoDB client with the default session
default_client = boto3.client('dynamodb')