# import boto3
# from botocore.exceptions import BotoCoreError, ClientError

# # Create an S3 client
# s3_client = boto3.client('s3')

# # Attempt to list objects of a bucket
# try:
#     response = s3_client.list_objects(Bucket='cosmo-images-archive-2023')

# # ClientError is caught when issues occur at the service level
# except ClientError as e:
#     error_code = e.response['Error']['Code']
#     if error_code == 'NoSuchBucket':
#         print("The requested resource does not exist.")
#     elif error_code == 'AccessDenied':
#         print("You do not have permissions to access the requested resource.")
#     else:
#         print(f"Unexpected error occurred with error code: {error_code}")

# # TODO: Handle possible Boto3 internal errors.

import boto3
from botocore.exceptions import BotoCoreError, ClientError

# Create an S3 client
s3_client = boto3.client('s3')

# Attempt to list objects of a bucket
try:
    response = s3_client.list_objects(Bucket='cosmo-images-archive-2023')

# ClientError is caught when issues occur at the service level
except ClientError as e:
    error_code = e.response['Error']['Code']
    if error_code == 'NoSuchBucket':
        print("The requested resource does not exist.")
    elif error_code == 'AccessDenied':
        print("You do not have permissions to access the requested resource.")
    else:
        print(f"Unexpected error occurred with error code: {error_code}")

# TODO: Handle possible Boto3 internal errors.
except BotoCoreError as e:
    print(f"Unexpected error occurred with error code: {e}")