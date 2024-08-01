# import boto3

# # TODO: Create an S3 client with a custom configuration with endpoint_url set to http://localhost:4566

import boto3
from botocore.config import Config

custom_config = Config(retries={'max_attempts': 3, 'mode': 'standard'})
# TODO: Create an S3 client with a custom configuration with endpoint_url set to http://localhost:4566
s3 = boto3.client('s3', endpoint_url='http://localhost:4566',config=custom_config)
print(s3.list_buckets())