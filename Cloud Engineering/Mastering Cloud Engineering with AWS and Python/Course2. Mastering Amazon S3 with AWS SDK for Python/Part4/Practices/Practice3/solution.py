# import boto3

# # Initialize the S3 client
# s3_client = boto3.client('s3')

# # Create a new bucket for your uploads
# bucket_name = 'cosmo-archive-2023'
# s3_client.create_bucket(Bucket=bucket_name)

# # Path to your dataset
# file_path = '/usercode/FILESYSTEM/assets/cosmo-hadoop-course-data-set.zip'
# key = 'cosmos-hadoop-course-data-set.zip'

# # TODO: Initiate a multipart upload session

# # TODO: Upload the dataset in 5 MB chunks using a loop

# # TODO: Complete the multipart upload by combining all the uploaded parts

import boto3

# Initialize the S3 client
s3_client = boto3.client('s3')

# Create a new bucket for your uploads
bucket_name = 'cosmo-archive-2023'
s3_client.create_bucket(Bucket=bucket_name)

# Path to your dataset
file_path = '/usercode/FILESYSTEM/assets/cosmo-hadoop-course-data-set.zip'
key = 'cosmos-hadoop-course-data-set.zip'

# Initiate a multipart upload session
multipart_upload = s3_client.create_multipart_upload(Bucket=bucket_name, Key=key)
upload_id = multipart_upload['UploadId']

# List to store part details
parts = []

# Upload the dataset in 5 MB chunks using a loop
part_number = 1
chunk_size = 5 * 1024 * 1024  # 5 MB per chunk

with open(file_path, 'rb') as f:
    while True:
        data = f.read(chunk_size)
        if not data:
            break
        response = s3_client.upload_part(
            Bucket=bucket_name,
            Key=key,
            PartNumber=part_number,
            UploadId=upload_id,
            Body=data
        )
        parts.append({'PartNumber': part_number, 'ETag': response['ETag']})
        part_number += 1

# Complete the multipart upload by combining all the uploaded parts
s3_client.complete_multipart_upload(
    Bucket=bucket_name,
    Key=key,
    UploadId=upload_id,
    MultipartUpload={'Parts': parts}
)

print(f'Multipart upload completed for {key} in bucket {bucket_name}.')
