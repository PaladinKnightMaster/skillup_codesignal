# Multipart Upload of Different Sized Chunks to Amazon S3

In this task, we'll perform a multipart upload using different chunk sizes. First, we'll upload a chunk of size 5MB, then a chunk of size 6MB, and finally, we'll finish uploading by sending the remaining part of the file. Moreover, we'll not use any loop in this task to highlight how we can handle multipart uploads manually. The file we will upload is "cosmo-hadoop-course-data-set.zip" and the destination bucket is called "cosmo-archive-2023".

Your task has the following steps:

1. Initialize the multipart upload.
2. Upload the first chunk of size 5MB.
3. Upload the second chunk of size 6MB.
4. Upload the final chunk, which should contain the rest of the file.
5. Complete the multipart upload.
**Important Note**: Running scripts can alter the filesystem's state or modify the resources in our AWS simulator. To revert to the initial state, you can use the reset button located in the top right corner. However, keep in mind that resetting will erase any code changes. To preserve your code during a reset, consider copying it to the clipboard.