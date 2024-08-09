# import boto3

# # Initialize S3 resource
# s3_resource = boto3.resource('s3')

# # Create three buckets for various interstellar operations
# s3_resource.create_bucket(Bucket='interstellar-research-data')
# s3_resource.create_bucket(Bucket='interstellar-operations-archive')
# s3_resource.create_bucket(Bucket='interstellar-navigation-logs')

# # TODO: Delete the 'interstellar-operations-archive' bucket to optimize our storage.

# print("Remaining buckets after deletion:")
# for bucket in s3_resource.buckets.all():
#     # This will print the names of the remaining buckets
#     print(bucket.name)

import boto3

# Initialize S3 resource
s3_resource = boto3.resource('s3')

# Create three buckets for various interstellar operations
s3_resource.create_bucket(Bucket='interstellar-research-data')
s3_resource.create_bucket(Bucket='interstellar-operations-archive')
s3_resource.create_bucket(Bucket='interstellar-navigation-logs')

# TODO: Delete the 'interstellar-operations-archive' bucket to optimize our storage.
s3_resource.Bucket('interstellar-operations-archive').delete()
print("Remaining buckets after deletion:")
for bucket in s3_resource.buckets.all():
    # This will print the names of the remaining buckets
    print(bucket.name)