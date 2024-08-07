import boto3

# Create an AWS session with explicit credentials and region
session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)

# Create an S3 resource based on the session
s3_resource = session.resource('s3')

# Print S3 resource details
print("S3 resource: ", s3_resource)

# Create an S3 client based on the session
s3_client = session.client('s3')

# Print S3 client details
print("S3 client: ", s3_client)

# Create a default S3 resource with the default session
# The default session uses credentials and settings from environment variables,
# AWS credentials and config file, or IAM role for Amazon EC2 instances
default_s3_resource = boto3.resource('s3')

# Print default S3 resource details
print("Default S3 resource: ", default_s3_resource)

# Create a default S3 client with the default session
default_s3_client = boto3.client('s3')

# Print default S3 client details
print("Default S3 client: ", default_s3_client)