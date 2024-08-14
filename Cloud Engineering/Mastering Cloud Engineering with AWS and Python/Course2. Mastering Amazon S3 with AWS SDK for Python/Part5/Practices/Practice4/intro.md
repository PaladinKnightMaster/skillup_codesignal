# Preserving Logo Versions in AWS S3 Bucket

We're on a journey with AWS S3 versioning! You are provided with a partially completed Python script that interacts with an S3 bucket. The setup work has been done: an S3 bucket named `cosmo-course-logos` has been created, versioning is enabled for the bucket, and two different versions of a logo file have already been uploaded under the same key `versioned-course-logo.jpg`. Your objective is to execute the final steps of the script:

1. **Retrieve All Version IDs**: Implement the section of the script that fetches all version IDs for the object named `versioned-course-logo.jpg`. This step is crucial for identifying the available versions of the file.

2. **Download a Specific Version**: Based on the version IDs retrieved, modify the script to download the very first version of `versioned-course-logo.jpg` uploaded to the bucket. Note that, due to the reversed chronological order in which they are listed, the first version uploaded will be the last in the list. This downloaded file should be saved to the `/usercode/FILESYSTEM/downloads` folder, demonstrating your ability to access and restore specific versions of an object in a version-enabled S3 bucket.

**Important Note**: Running scripts can alter the file system's state or modify the resources in our AWS simulator. To revert to the initial state, you can use the **reset button** located in the top right corner. However, remember that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.