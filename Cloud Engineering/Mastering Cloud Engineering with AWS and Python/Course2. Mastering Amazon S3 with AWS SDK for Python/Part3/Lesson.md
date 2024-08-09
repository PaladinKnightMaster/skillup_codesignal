# Managing AWS S3 Objects: Upload, Download, and Delete with Python and Boto3

## Introduction to S3 Objects
This lesson expands your AWS S3 knowledge to include managing objects (files) within buckets. We'll explore uploading, downloading, and deleting objects with Boto3, focusing on real-world applications like user uploads or maintaining an image archive.

## Uploading Files to S3 Buckets
For simplicity, we'll use Boto3's resource interface. Specify the bucket (`cosmo-user-uploads`), the object name within the bucket (`cosmo-profile-2023.jpg`), and the file's local path to upload.

```python
import boto3

s3_resource = boto3.resource('s3')
s3_resource.Bucket('cosmo-user-uploads').upload_file('path/to/local/file.jpg', 'cosmo-profile-2023.jpg')
```

## Listing Objects in an S3 Bucket
To efficiently manage data within S3 buckets, understanding how to list the objects stored is crucial. This capability enables tracking and organizing stored content, facilitating operations like batch processing or clean-up. Boto3's resource interface provides a straightforward method to enumerate objects in a bucket.

```python
for obj in s3_resource.Bucket('cosmo-user-uploads').objects.all():
    print(obj.key)
```
In this snippet, `cosmo-user-uploads` represents the bucket name. The loop iterates over each object in the bucket, printing the object's key (name).

## Downloading Files from S3 Buckets
To download files, specify the bucket, the object's key, and the local save path.

```python
s3_resource.Bucket('cosmo-user-uploads').download_file('cosmo-profile-2023.jpg', 'local/path/cosmo-profile.jpg')
```

## Retrieving Object Metadata
Each S3 object has metadata, such as content type and size. Access it as follows:

```python
# Get the S3 object
cosmo_object = s3_resource.Object('cosmo-images-archive-2023', 'cosmo-profile-2023.jpg')

# Get object's metadata
metadata = cosmo_object.metadata
```
Metadata includes details like content type (`image/jpeg`), size, and custom metadata added during upload.

## Deleting Files from S3 Buckets
Deleting unnecessary objects helps maintain organized buckets:

```python
# Deleting single object
s3_resource.Object('cosmo-user-uploads', 'temporary-file.jpg').delete()

# Deleting all objects in the bucket
s3_resource.Bucket(bucket_name).objects.all().delete()
```

## Handling S3 Exceptions Gracefully
When interacting with AWS S3, encountering errors is inevitable. Boto3 simplifies error management by offering S3-specific exceptions. This method enhances code clarity, linking exceptions directly to their corresponding S3 errors, making your error handling more intuitive and manageable.

```python
import boto3
from botocore.exceptions import ClientError

s3_resource = boto3.resource('s3')

try:
    s3_resource.Bucket('cosmo-user-uploads').delete()
except s3_resource.meta.client.exceptions.NoSuchBucket:
    print("Error: The specified bucket does not exist.")
except ClientError as e:
    # This captures other unexpected errors
    print(f"An unexpected error occurred: {e.response['Error']['Message']}")
```
This structured approach allows you to specifically catch errors like `NoSuchBucket`, which occur when the requested bucket doesn't exist. Additionally, it prepares your application to handle other, less common errors effectively, ensuring a robust interaction with S3 services.

## Lesson Summary
You've learned to manage S3 objects, from uploading and downloading to handling errors using S3-specific exceptions. These skills are foundational for cloud storage management with AWS, setting the stage for more advanced data handling techniques.
