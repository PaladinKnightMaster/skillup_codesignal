# Mastering Multi-Part Uploads in Amazon S3 with Boto3 and Python

## Lesson Introduction
Learning about S3's versatility continues as we focus on Amazon S3's multi-part upload feature. Implementing this feature with `Boto3` will demonstrate the efficient handling of large files. By the end of this lesson, you will be more adept at managing sizable data sets.

## Understand Multi-part Uploads
The ability to divide a file into manageable components facilitates a more efficient upload process. This is particularly useful when transferring large files or when experiencing unstable network connectivity. Amazon S3 recommends using multi-part uploads for files larger than 100 MB, but it becomes a requirement for files exceeding 5 GB. Please note that the use of an S3 client, not an S3 resource, is necessary for performing multi-part uploads.

## Start a Multi-part Upload Session
To begin a multi-part upload, you need to create a multi-part upload session. Here is how you initiate a session and define the parts:

```Python
import boto3
import os

# Configure the S3 client
s3_client = boto3.client('s3')
bucket_name = 'my_bucket'
file_path = 'path/to/my_large_file.zip'
key = 'my_large_file.zip'

# Start a multi-part upload session
mpu = s3_client.create_multipart_upload(Bucket=bucket_name, Key=key)
parts = []
upload_id = mpu['UploadId']
```

## Calculate the Number of Parts and Perform Upload
Next, we calculate the number of parts and read those parts one by one. The size of each part, except the last, should be at least 5 MB and not more than 5 GB.

```Python
# Set the part size to 5 MB
part_size = 1024 * 1024 * 5
# Retrieve the total file size
file_size = os.path.getsize(file_path)
# Calculate the total number of parts needed for the upload
part_count = (file_size + part_size - 1) // part_size

# Open the file in binary read mode
with open(file_path, 'rb') as f:
    # Iterate over each part
    for part_no in range(1, part_count + 1):
        # Read the specified part size from the file
        data = f.read(part_size)
        # Upload the part to S3 and receive a response containing the ETag
        response = s3_client.upload_part(Bucket=bucket_name, Key=key, PartNumber=part_no, UploadId=upload_id, Body=data)
        # Append the part number and ETag to the 'parts' list for later reference in completing the upload
        parts.append({'PartNumber': part_no, 'ETag': response['ETag']})
```

## Complete the Multi-part Upload
After all the parts have been uploaded, you need to indicate that the upload process is complete:

```Python
# Complete the multi-part upload
s3_client.complete_multipart_upload(Bucket=bucket_name, Key=key, UploadId=upload_id, MultipartUpload={'Parts': parts})
```

## Lesson Summary
We delved into Amazon S3's multi-part upload functionality and executed these features using `Boto3`. By understanding multi-part uploads, we can handle the upload of large files more effectively. Expect some fun exercises ahead where we get our hands dirty with multi-part uploads.
