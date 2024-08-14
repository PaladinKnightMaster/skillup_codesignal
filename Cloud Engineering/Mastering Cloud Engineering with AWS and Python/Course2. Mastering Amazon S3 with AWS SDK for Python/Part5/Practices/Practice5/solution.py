# import boto3

# s3 = boto3.resource('s3')

# # Create a new bucket specifically for our course logos.
# bucket_name = 'educational-course-logos'
# bucket = s3.create_bucket(Bucket=bucket_name)

# # TODO: Enable versioning on this newly created bucket.

# # TODO: Upload 'prompt-engineering-course-logo.jpg' from '/usercode/FILESYSTEM/assets/' as 'course-logo.jpg'.

# # TODO: Replace 'course-logo.jpg' by uploading 'machine-learning-course-logo.jpg' from the same directory.

# # TODO: Finally, upload 'data-science-python-course-logo.jpg', replacing the current 'course-logo.jpg'.

# # TODO: Print a confirmation after each upload, ensuring the process is clear.

# # TODO: Retrieve and print all versions of 'course-logo.jpg', displaying the history of this object.

import boto3

# Create S3 resource
s3 = boto3.resource('s3')
s3_client = boto3.client('s3')

# Create a new bucket specifically for our course logos.
bucket_name = 'educational-course-logos'
bucket = s3.create_bucket(Bucket=bucket_name)

# Enable versioning on this newly created bucket.
s3.BucketVersioning(bucket_name).enable()
print(f"Versioning enabled for bucket: {bucket_name}")

# Upload 'prompt-engineering-course-logo.jpg' from '/usercode/FILESYSTEM/assets/' as 'course-logo.jpg'.
first_logo_path = '/usercode/FILESYSTEM/assets/prompt-engineering-course-logo.jpg'
s3_client.upload_file(Filename=first_logo_path, Bucket=bucket_name, Key='course-logo.jpg')
print("Uploaded 'prompt-engineering-course-logo.jpg' as 'course-logo.jpg'.")

# Replace 'course-logo.jpg' by uploading 'machine-learning-course-logo.jpg' from the same directory.
second_logo_path = '/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg'
s3_client.upload_file(Filename=second_logo_path, Bucket=bucket_name, Key='course-logo.jpg')
print("Uploaded 'machine-learning-course-logo.jpg', replacing 'course-logo.jpg'.")

# Finally, upload 'data-science-python-course-logo.jpg', replacing the current 'course-logo.jpg'.
third_logo_path = '/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg'
s3_client.upload_file(Filename=third_logo_path, Bucket=bucket_name, Key='course-logo.jpg')
print("Uploaded 'data-science-python-course-logo.jpg', replacing 'course-logo.jpg'.")

# Retrieve and print all versions of 'course-logo.jpg', displaying the history of this object.
versions = s3_client.list_object_versions(Bucket=bucket_name, Prefix='course-logo.jpg')

print("Versions of 'course-logo.jpg':")
for version in versions.get('Versions', []):
    print(f"Version ID: {version['VersionId']} - Last Modified: {version['LastModified']}")
