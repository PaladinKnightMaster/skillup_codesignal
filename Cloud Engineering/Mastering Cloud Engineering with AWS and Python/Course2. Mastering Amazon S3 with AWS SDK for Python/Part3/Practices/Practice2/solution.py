# import boto3

# # Initialize the boto3 S3 resource
# s3 = boto3.resource('s3')

# # Creating the bucket
# bucket_name = 'codesignal-digital-gallery'
# s3.create_bucket(Bucket=bucket_name)

# # Pre-upload bucket contents listing
# print("Bucket contents before upload:")
# for obj in s3.Bucket(bucket_name).objects.all():
#     print(obj.key)

# # TODO: Upload the '/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg' image to the bucket

# # Post-upload bucket contents listing
# print("\nBucket contents after upload:")
# for obj in s3.Bucket(bucket_name).objects.all():
#     print(obj.key)

import boto3

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')

# Creating the bucket
bucket_name = 'codesignal-digital-gallery'
s3.create_bucket(Bucket=bucket_name)

# Pre-upload bucket contents listing
print("Bucket contents before upload:")
for obj in s3.Bucket(bucket_name).objects.all():
    print(obj.key)

# TODO: Upload the '/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg' image to the bucket
s3.Bucket(bucket_name).upload_file('/usercode/FILESYSTEM/assets/data-science-python-course-logo.jpg', 'data-science-python-course-logo.jpg')

# Post-upload bucket contents listing
print("\nBucket contents after upload:")
for obj in s3.Bucket(bucket_name).objects.all():
    print(obj.key)