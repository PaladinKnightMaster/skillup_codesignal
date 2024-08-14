import boto3

# Initialize the Boto3 S3 resource and client
s3_resource = boto3.resource('s3')
s3_client = boto3.client('s3')

# Create the bucket 'cosmo-archive-data' with versioning enabled
bucket_name = 'cosmo-archive-data'
bucket = s3_resource.create_bucket(Bucket=bucket_name)

# Enable versioning for the 'cosmo-archive-data' bucket
s3_resource.BucketVersioning(bucket_name).enable()

# Upload 'version1.txt' and print its version ID
obj_key = 'versioned_document.txt'
obj_v1 = bucket.Object(obj_key)
response_v1 = obj_v1.put(Body='This is the content of version 1.')
print(f"Uploaded 'version1.txt' with version ID: {response_v1['VersionId']}")

# Upload 'version2.txt' and print its version ID
obj_v2 = bucket.Object(obj_key)
response_v2 = obj_v2.put(Body='This is the content of version 2.')
print(f"Uploaded 'version2.txt' with version ID: {response_v2['VersionId']}")

# Retrieve the latest version of the document without specifying the version ID
latest_version = bucket.Object(obj_key).version_id
print(f"Retrieved latest version of 'versioned_document.txt': {latest_version}")

# Retrieve and print 'version1.txt' using its version ID
specific_version = s3_client.get_object(
    Bucket=bucket_name,
    Key=obj_key,
    VersionId=response_v1['VersionId']
)
print(f"Retrieved 'versioned_document.txt' with a specific version ID: {response_v1['VersionId']}")

# Download and print 'version1.txt' using its version ID
s3_client.download_file(bucket_name, obj_key, 'version1.txt', ExtraArgs={'VersionId': response_v1['VersionId']})

# Now, let's open and print the content of the downloaded file.
with open('version1.txt', 'r') as file:
    print(file.read())

# Download the latest version
s3_resource.Bucket(bucket_name).download_file(Key=obj_key, Filename='latest_version.txt')

# Now, let's open and print the content of the downloaded latest version file.
with open('latest_version.txt', 'r') as file:
    print(file.read())