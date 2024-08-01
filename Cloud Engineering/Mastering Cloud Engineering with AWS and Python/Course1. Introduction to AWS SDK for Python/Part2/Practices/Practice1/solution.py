import boto3
from botocore.config import Config

custom_config = Config(retries={'max_attempts': 3, 'mode': 'standard'})
s3_client = boto3.client('s3', endpoint_url='https://my-test-bucket.com', config=custom_config)