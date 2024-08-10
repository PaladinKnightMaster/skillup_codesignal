# import boto3

# # Initialize the boto3 S3 resource
# s3 = boto3.resource('s3')

# # Create a new bucket
# bucket_name = 'full-cycle-management-challenge'

# # TODO: Create the bucket using the bucket_name variable

# # Names of the images to be uploaded
# images = [
#     'prompt-engineering-course-logo.jpg',
#     'machine-learning-course-logo.jpg',
#     'data-science-python-course-logo.jpg'
# ]

# # TODO: Upload the images to the bucket from '/usercode/FILESYSTEM/assets/'

# # TODO: List the contents of the bucket

# # TODO: Delete all objects from the bucket

# # TODO: Delete the bucket itself

import boto3

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')

# Create a new bucket
bucket_name = 'full-cycle-management-challenge'

# TODO: Create the bucket using the bucket_name variable
s3.create_bucket(Bucket=bucket_name)
# Names of the images to be uploaded
images = [
    'prompt-engineering-course-logo.jpg',
    'machine-learning-course-logo.jpg',
    'data-science-python-course-logo.jpg'
]

# TODO: Upload the images to the bucket from '/usercode/FILESYSTEM/assets/'
for image in images:
    s3.Bucket(bucket_name).upload_file(f"/usercode/FILESYSTEM/assets/{image}", image)
# TODO: List the contents of the bucket
for obj in s3.Bucket(bucket_name).objects.all():
    print(obj.key)
# TODO: Delete all objects from the bucket
s3.Bucket(bucket_name).objects.all().delete()
# TODO: Delete the bucket itself
s3.Bucket(bucket_name).delete()