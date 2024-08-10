import boto3
import os

# Initialize the boto3 S3 resource
s3 = boto3.resource('s3')

# Create a new bucket as the initial setup is empty
s3.create_bucket(Bucket='photo-archive-2023')

# Upload the image to the 'photo-archive-2023' bucket using the image already in the filesystem
image_path = '/usercode/FILESYSTEM/assets/prompt-engineering-course-logo.jpg'
s3.Bucket('photo-archive-2023').upload_file(image_path, 'prompt-engineering-course-logo.jpg')

# List objects in the bucket before deletion
print("Objects in bucket before deletion:")
for obj in s3.Bucket('photo-archive-2023').objects.all():
    print(obj.key)

# Ensure the downloads folder exists
downloads_folder = '/usercode/FILESYSTEM/downloads'
if not os.path.exists(downloads_folder):
    os.makedirs(downloads_folder)

# Download the image from the bucket to the downloads folder
s3.Bucket('photo-archive-2023').download_file('prompt-engineering-course-logo.jpg', f'{downloads_folder}/prompt-engineering-course-logo.jpg')

# Delete the image from the bucket
s3.Object('photo-archive-2023', 'prompt-engineering-course-logo.jpg').delete()

# List objects in the bucket after deletion
print("\nObjects in bucket after deletion:")
for obj in s3.Bucket('photo-archive-2023').objects.all():
    print(obj.key)