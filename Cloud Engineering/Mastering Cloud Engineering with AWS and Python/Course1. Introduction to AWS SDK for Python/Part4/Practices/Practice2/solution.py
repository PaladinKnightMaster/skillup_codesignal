# import boto3
# import logging

# # Basic logging setup with WARNING level
# logging.basicConfig(level=logging.WARNING)

# # Initialize a boto3 S3 resource
# s3 = boto3.resource('s3')

# # Create a new bucket
# s3.create_bucket(Bucket='my-debug-logging-bucket')

# # Iteratively print all bucket names
# for bucket in s3.buckets.all():
#     print(bucket.name)

import boto3
import logging

# Basic logging setup with DEBUG level
logging.basicConfig(level=logging.DEBUG)

# Set the logging level for boto3 to DEBUG
boto3.set_stream_logger('boto3', logging.DEBUG)

# Initialize a boto3 S3 resource
s3 = boto3.resource('s3')

# Create a new bucket
s3.create_bucket(Bucket='my-debug-logging-bucket')

# Iteratively print all bucket names
for bucket in s3.buckets.all():
    print(bucket.name)
