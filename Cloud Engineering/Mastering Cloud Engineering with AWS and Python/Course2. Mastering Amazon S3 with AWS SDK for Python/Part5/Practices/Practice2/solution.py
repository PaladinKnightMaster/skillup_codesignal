# import boto3

# # Initialize S3 resource
# s3_resource = boto3.resource('s3')

# bucket_name = 'archive-bucket'
# # TODO: Create a new bucket and enable the versioning for it

import boto3

# Initialize S3 resource
s3_resource = boto3.resource('s3')

bucket_name = 'archive-bucket'
# TODO: Create a new bucket and enable the versioning for it
s3_resource.create_bucket(Bucket=bucket_name)
s3_resource.BucketVersioning(bucket_name).enable()