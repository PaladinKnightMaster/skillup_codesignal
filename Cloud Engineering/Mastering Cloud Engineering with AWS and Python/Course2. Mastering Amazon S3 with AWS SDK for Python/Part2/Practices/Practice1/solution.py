import boto3

s3_resource = boto3.resource('s3')

s3_resource.create_bucket(Bucket='cosmo-galaxy-photos-2024') # Creating bucket in the default us-east-1 region
s3_resource.create_bucket(Bucket='cosmo-widget-data', CreateBucketConfiguration={'LocationConstraint': 'us-west-2'})  # Creating bucket in the us-west-2 region
s3_resource.create_bucket(Bucket='cosmo-doc-archive-2020', CreateBucketConfiguration={'LocationConstraint': 'eu-central-1'})  # Creating bucket in the eu-central-1 region

print("Buckets before deletion:")
for bucket in s3_resource.buckets.all():
    print(bucket.name)

s3_resource.Bucket('cosmo-doc-archive-2020').delete()

print("\nBuckets after deletion:")
for bucket in s3_resource.buckets.all():
    print(bucket.name)

"""
Expected output:

Buckets before deletion:
cosmo-galaxy-photos-2024
cosmo-widget-data
cosmo-doc-archive-2020

Buckets after deletion:
cosmo-galaxy-photos-2024
cosmo-widget-data
"""