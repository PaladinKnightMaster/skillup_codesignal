# import boto3

# # Create an AWS session with explicit credentials and region
# session = boto3.Session(
#     aws_access_key_id='YOUR_ACCESS_KEY_ID',
#     aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
#     region_name='us-west-2'
# )

# # Create a DynamoDB resource based on the session
# dynamodb_resource = session.resource('dynamodb')

# # Create a DynamoDB client based on the session
# dynamodb_client = session.client('dynamodb')

# # TODO: Create a default DynamoDB resource with the default session

# # TODO: Create a default DynamoDB client with the default session

import boto3

# Create an AWS session with explicit credentials and region
session = boto3.Session(
    aws_access_key_id='YOUR_ACCESS_KEY_ID',
    aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
    region_name='us-west-2'
)

# Create a DynamoDB resource based on the session
dynamodb_resource = session.resource('dynamodb')

# Create a DynamoDB client based on the session
dynamodb_client = session.client('dynamodb')

# TODO: Create a default DynamoDB resource with the default session
default_dynamodb_resource = boto3.resource('dynamodb')
# TODO: Create a default DynamoDB client with the default session
default_dynamodb_client = boto3.client('dynamodb')