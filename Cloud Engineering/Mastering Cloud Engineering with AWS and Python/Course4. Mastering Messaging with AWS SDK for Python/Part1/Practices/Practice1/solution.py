import boto3

# Create default SQS resource
default_sqs_resource = boto3.resource('sqs')
print("Default SQS resource created.")

# Create default SQS client
default_sqs_client = boto3.client('sqs')
print("Default SQS client created.")

# Create default SNS resource
default_sns_resource = boto3.resource('sns')
print("Default SNS resource created.")

# Create default SNS client
default_sns_client = boto3.client('sns')
print("Default SNS client created.")

# Create AWS session with specified region and credentials
session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)
print("AWS session created with specified region and credentials.")

# Create SQS resource based on this session
sqs_from_session = session.resource('sqs')
print("SQS resource from session created.")

# Create SNS client based on this session
sns_from_session = session.client('sns')
print("SNS client from session created.")