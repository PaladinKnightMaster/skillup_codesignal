# import boto3

# # Configure the S3 client
# s3_client = boto3.client('s3')

# # Create a new bucket and enable versioning
# bucket_name = 'cosmo-archive-2023'
# s3_client.create_bucket(Bucket=bucket_name)
# s3_client.put_bucket_versioning(Bucket=bucket_name, VersioningConfiguration={'Status': 'Enabled'})

# # Path to your large dataset
# file_path = '/usercode/FILESYSTEM/assets/cosmo-hadoop-course-data-set.zip'
# key = 'cosmos-hadoop-course-data-set.zip'

# # Initiate multipart upload
# multipart_upload = s3_client.create_multipart_upload(Bucket=bucket_name, Key=key)
# upload_id = multipart_upload['UploadId']

# # Upload the first chunk (15 MB) as an example
# with open(file_path, 'rb') as f:
#     data = f.read(1024 * 1024 * 15)  # Read the first 15 MB for the first chunk
#     s3_client.upload_part(Bucket=bucket_name, Key=key, PartNumber=1, UploadId=upload_id, Body=data)

#     # TODO: Upload the second chunk of 15 MB
#     # TODO: Upload the final chunk of 13 MB

# # TODO: Complete the multipart upload by combining all the uploaded parts

import boto3

# Configure the S3 client
s3_client = boto3.client('s3')

# Create a new bucket and enable versioning
bucket_name = 'cosmo-archive-2023'
s3_client.create_bucket(Bucket=bucket_name)
s3_client.put_bucket_versioning(Bucket=bucket_name, VersioningConfiguration={'Status': 'Enabled'})

# Path to your large dataset
file_path = '/usercode/FILESYSTEM/assets/cosmo-hadoop-course-data-set.zip'
key = 'cosmos-hadoop-course-data-set.zip'

# Initiate multipart upload
multipart_upload = s3_client.create_multipart_upload(Bucket=bucket_name, Key=key)
upload_id = multipart_upload['UploadId']

# List to hold part information for completing the multipart upload
parts = []

# Upload the first chunk (15 MB)
with open(file_path, 'rb') as f:
    # First chunk
    data = f.read(1024 * 1024 * 15)  # Read the first 15 MB
    response = s3_client.upload_part(Bucket=bucket_name, Key=key, PartNumber=1, UploadId=upload_id, Body=data)
    parts.append({'PartNumber': 1, 'ETag': response['ETag']})

    # Second chunk
    data = f.read(1024 * 1024 * 15)  # Read the second 15 MB
    response = s3_client.upload_part(Bucket=bucket_name, Key=key, PartNumber=2, UploadId=upload_id, Body=data)
    parts.append({'PartNumber': 2, 'ETag': response['ETag']})

    # Final chunk (13 MB)
    data = f.read(1024 * 1024 * 13)  # Read the remaining 13 MB
    response = s3_client.upload_part(Bucket=bucket_name, Key=key, PartNumber=3, UploadId=upload_id, Body=data)
    parts.append({'PartNumber': 3, 'ETag': response['ETag']})

# Complete the multipart upload
s3_client.complete_multipart_upload(Bucket=bucket_name, Key=key, UploadId=upload_id, MultipartUpload={'Parts': parts})

print(f'Multipart upload completed for {key} in bucket {bucket_name}.')
