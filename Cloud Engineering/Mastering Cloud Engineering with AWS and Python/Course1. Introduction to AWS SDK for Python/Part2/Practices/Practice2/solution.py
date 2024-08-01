# import boto3
# from botocore.config import Config

# # TO DO: Setup a boto3 S3 client with a custom retry strategy: set 'max_attempts' to 5 and 'mode' to 'standard'
# s3 = boto3.client('s3')

# # Retrieve the list of S3 buckets
# response = s3.list_buckets()
# print(response['Buckets'])

import boto3
from botocore.config import Config

# TO DO: Setup a boto3 S3 client with a custom retry strategy: set 'max_attempts' to 5 and 'mode' to 'standard'
s3 = boto3.client('s3', config=Config(retries={'max_attempts': 5, 'mode': 'standard'}))

# Retrieve the list of S3 buckets
response = s3.list_buckets()
print(response['Buckets'])