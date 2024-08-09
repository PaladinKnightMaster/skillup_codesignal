# import boto3

# # Instantiate the S3 resource object
# s3_resource = boto3.resource('s3')

# # TODO: Create a galactic data bucket in the 'eu-central-1' region instead of the default region
# galactic_bucket = s3_resource.create_bucket(Bucket='interstellar-galactic-data')
# print("Galactic bucket created successfully.")

import boto3

# Instantiate the S3 resource object
s3_resource = boto3.resource('s3')

# TODO: Create a galactic data bucket in the 'eu-central-1' region instead of the default region
galactic_bucket = s3_resource.create_bucket(Bucket='interstellar-galactic-data',  CreateBucketConfiguration={'LocationConstraint': 'eu-central-1'})
print("Galactic bucket created successfully.")