# import boto3

# # Initialize S3 resource
# s3_resource = boto3.resource('s3')

# bucket_name = 'cosmo-archive-bucket-2023'
# s3_resource.create_bucket(Bucket=bucket_name)
# s3_resource.BucketVersioning(bucket_name).enable()

# # TO DO: Suspend the versioning
# # TO DO: Print the bucket versioning status

import boto3

# Initialize S3 resource
s3_resource = boto3.resource('s3')

bucket_name = 'cosmo-archive-bucket-2023'
s3_resource.create_bucket(Bucket=bucket_name)
s3_resource.BucketVersioning(bucket_name).enable()

# TO DO: Suspend the versioning
s3_resource.BucketVersioning(bucket_name).suspend()
# TO DO: Print the bucket versioning status
print(s3_resource.BucketVersioning(bucket_name).status)