# import boto3
# import os

# # Create S3 resource
# s3 = boto3.resource('s3')
# s3_client = boto3.client('s3')

# # Ensure that /usercode/FILESYSTEM/downloads folder exists
# downloads_folder = "/usercode/FILESYSTEM/downloads"
# os.makedirs(downloads_folder, exist_ok=True)

# # Create S3 bucket called `cosmo-course-logos`
# bucket_name = 'cosmo-course-logos'
# s3.create_bucket(Bucket=bucket_name)

# # Enable versioning for created bucket
# s3.BucketVersioning(bucket_name).enable()

# # Upload "/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg" to the bucket under object name "versioned-course-logo.jpg"
# s3_client.upload_file(Filename='/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg', Bucket=bucket_name, Key='versioned-course-logo.jpg')

# # Upload "/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg" to the bucket under object name "versioned-course-logo.jpg"
# s3_client.upload_file(Filename='/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg', Bucket=bucket_name, Key='versioned-course-logo.jpg')

# # TODO: Retrieve all version ids for the 'versioned-course-logo.jpg'. Remember, the first version uploaded will be the last in the list due to reverse order.

# # TODO: Download the earliest version of 'versioned-course-logo.jpg' to the '/usercode/FILESYSTEM/downloads/' folder

import boto3
import os

# Create S3 resource
s3 = boto3.resource('s3')
s3_client = boto3.client('s3')

# Ensure that /usercode/FILESYSTEM/downloads folder exists
downloads_folder = "/usercode/FILESYSTEM/downloads"
os.makedirs(downloads_folder, exist_ok=True)

# Create S3 bucket called `cosmo-course-logos`
bucket_name = 'cosmo-course-logos'
s3.create_bucket(Bucket=bucket_name)

# Enable versioning for created bucket
s3.BucketVersioning(bucket_name).enable()

# Upload "/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg" to the bucket under object name "versioned-course-logo.jpg"
s3_client.upload_file(Filename='/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg', Bucket=bucket_name, Key='versioned-course-logo.jpg')

# Upload "/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg" to the bucket under object name "versioned-course-logo.jpg"
s3_client.upload_file(Filename='/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg', Bucket=bucket_name, Key='versioned-course-logo.jpg')

# Retrieve all version ids for the 'versioned-course-logo.jpg'
versions = s3_client.list_object_versions(Bucket=bucket_name, Prefix='versioned-course-logo.jpg')

# Extract version IDs (the last in the list is the first uploaded version)
version_ids = [version['VersionId'] for version in versions.get('Versions', [])]

# Download the earliest version of 'versioned-course-logo.jpg' to the '/usercode/FILESYSTEM/downloads/' folder
if version_ids:
    earliest_version_id = version_ids[-1]  # The earliest version is the last in the list
    download_path = os.path.join(downloads_folder, 'versioned-course-logo-earliest.jpg')
    s3_client.download_file(Bucket=bucket_name, Key='versioned-course-logo.jpg', Filename=download_path, ExtraArgs={'VersionId': earliest_version_id})

print(f"Downloaded earliest version of 'versioned-course-logo.jpg' to {download_path}")
