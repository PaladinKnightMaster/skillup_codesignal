# import boto3

# # TODO: Initialize the S3 resource variable using boto3

# # TODO: Create a bucket named 'intergalactic-archive-us' in the default region

# # TODO: Create another bucket named 'intergalactic-archive-eu' in the eu-central-1 region

# # TODO: Print all bucket names available in your AWS account after the creation

# # TODO: Delete the 'intergalactic-archive-eu' bucket.

# # TODO: Print all remaining buckets after the deletion

import boto3

# TODO: Initialize the S3 resource variable using boto3
s3_resource = boto3.resource('s3')
# TODO: Create a bucket named 'intergalactic-archive-us' in the default region
s3_resource.create_bucket(Bucket='intergalactic-archive-us')
# TODO: Create another bucket named 'intergalactic-archive-eu' in the eu-central-1 region
s3_resource.create_bucket(Bucket='intergalactic-archive-eu', CreateBucketConfiguration={'LocationConstraint': 'eu-central-1'})
# TODO: Print all bucket names available in your AWS account after the creation
for bucket in s3_resource.buckets.all():
    # This will print the names of the remaining buckets
    print(bucket.name)
# TODO: Delete the 'intergalactic-archive-eu' bucket.
s3_resource.Bucket('intergalactic-archive-eu').delete()
# TODO: Print all remaining buckets after the deletion
for bucket in s3_resource.buckets.all():
    # This will print the names of the remaining buckets
    print(bucket.name)