# import boto3

# # Initialize the boto3 S3 resource
# s3 = boto3.resource('s3')
# bucket_name = 'codesignal-learn-course-logos'

# # Recreating the initial environment by creating the bucket and populating it with course logos
# s3.create_bucket(Bucket=bucket_name)
# logo_files = [
#     'prompt-engineering-course-logo.jpg',
#     'machine-learning-course-logo.jpg',
#     'data-science-python-course-logo.jpg'
# ]
# for logo_file in logo_files:
#     s3.Bucket(bucket_name).upload_file(f"/usercode/FILESYSTEM/assets/{logo_file}", logo_file)

# # TODO: Delete all objects from the bucket

# # TODO: Delete the bucket itself

import boto3

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')
bucket_name = 'codesignal-learn-course-logos'

# Recreating the initial environment by creating the bucket and populating it with course logos
s3.create_bucket(Bucket=bucket_name)
logo_files = [
    'prompt-engineering-course-logo.jpg',
    'machine-learning-course-logo.jpg',
    'data-science-python-course-logo.jpg'
]
for logo_file in logo_files:
    s3.Bucket(bucket_name).upload_file(f"/usercode/FILESYSTEM/assets/{logo_file}", logo_file)

# TODO: Delete all objects from the bucket
s3.Bucket(bucket_name).objects.all().delete()
# TODO: Delete the bucket itself
s3.Bucket(bucket_name).delete()