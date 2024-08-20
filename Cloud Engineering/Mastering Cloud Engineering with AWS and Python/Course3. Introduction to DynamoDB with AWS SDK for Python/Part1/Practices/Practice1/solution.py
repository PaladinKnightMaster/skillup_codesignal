import boto3

# Create an AWS session with explicit credentials and a region
# (You won't normally display your credentials like this in code. Always observe safe practices!)
session = boto3.Session(
    aws_access_key_id='YOUR_ACCESS_KEY_ID',
    aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
    region_name='us-west-2'
)
print('AWS Session created')

# Create a DynamoDB resource based on the session
dynamodb_resource = session.resource('dynamodb')
print('DynamoDB resource created based on session')

# Create a DynamoDB client based on the session
dynamodb_client = session.client('dynamodb')
print('DynamoDB client created based on session')

# Create a default DynamoDB resource with the default session
# The default session uses credentials and settings from environment variables,
# AWS credentials and config file, or IAM role for Amazon EC2 instances
default_dynamodb_resource = boto3.resource('dynamodb')
print('Default DynamoDB resource created')

# Create a default DynamoDB client with the default session
default_dynamodb_client = boto3.client('dynamodb')
print('Default DynamoDB client created')