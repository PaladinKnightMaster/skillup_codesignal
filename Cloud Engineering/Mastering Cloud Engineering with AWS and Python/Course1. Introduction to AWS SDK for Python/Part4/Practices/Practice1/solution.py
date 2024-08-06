import boto3
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')

# Apply the AWS debug logging filter
boto3.set_stream_logger('boto3', logging.DEBUG)

# Create a new bucket as the initial setup is empty
s3.create_bucket(Bucket='my-logging-test-bucket')

# List buckets to show logging output
for bucket in s3.buckets.all():
    print(bucket.name)