# import boto3

# # Initialize the boto3 S3 resource
# s3 = boto3.resource('s3')

# # Create the bucket as the initial setup is empty
# bucket_name = 'codesignal-learn-course-logos'
# s3.create_bucket(Bucket=bucket_name)

# # Upload course logos to the S3 bucket from the filesystem
# s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/prompt-engineering-course-logo.jpg', 'prompt-engineering-course-logo.jpg')
# s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg', 'machine-learning-course-logo.jpg')
# s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg', 'data-science-python-course-logo.jpg')

# # TODO: List all objects in the bucket

import boto3

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')

# Create the bucket as the initial setup is empty
bucket_name = 'codesignal-learn-course-logos'
s3.create_bucket(Bucket=bucket_name)

# Upload course logos to the S3 bucket from the filesystem
s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/prompt-engineering-course-logo.jpg', 'prompt-engineering-course-logo.jpg')
s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/machine-learning-course-logo.jpg', 'machine-learning-course-logo.jpg')
s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg', 'data-science-python-course-logo.jpg')

# TODO: List all objects in the bucket
for obj in s3.Bucket(bucket_name).objects.all():
    print(obj.key)