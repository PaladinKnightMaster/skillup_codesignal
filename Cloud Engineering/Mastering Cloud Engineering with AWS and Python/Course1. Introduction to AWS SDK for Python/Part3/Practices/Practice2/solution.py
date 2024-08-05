# import boto3
# from botocore.exceptions import ClientError

# # Create an S3 client
# s3_client = boto3.client('s3')

# # Attempt to list objects of a non-existing bucket which will likely throw an exception
# try:
#     response = s3_client.list_objects(Bucket='nonexistent_bucket')

# # TODO: Implement error handling for service level issues.

# except ClientError as e:
#     pass

import boto3
from botocore.exceptions import ClientError

# Create an S3 client
s3_client = boto3.client('s3')

# Attempt to list objects of a non-existing bucket which will likely throw an exception
try:
    response = s3_client.list_objects(Bucket='nonexistent_bucket')

# TODO: Implement error handling for service level issues.
except ClientError as e:
    if e.response['Error']['Code'] == 'NoSuchBucket':
        print("The requested resource does not exist.")
    elif e.response['Error']['Code'] == 'AccessDenied':
        print("You do not have permissions to access the requested resource.")
    else:
        print(f"Unexpected error occurred with error code: {e.response['Error']['Message']}")