# import boto3
# import logging

# # TODO: Set up logging to capture DEBUG information for S3 client interactions
# # Hint: Configure logging using Python’s logging module and boto3.set_stream_logger() for S3 at DEBUG level

# s3 = boto3.client('s3')

# # Attempt an S3 operation to generate and capture detailed logs
# try:
#     s3.list_buckets()
# except Exception as e:
#     # Use logging to report errors
#     logging.error("An error occurred: ", exc_info=e)

import boto3
import logging

# TODO: Set up logging to capture DEBUG information for S3 client interactions
# Hint: Configure logging using Python’s logging module and boto3.set_stream_logger() for S3 at DEBUG level

boto3.set_stream_logger('boto3', logging.DEBUG)

s3 = boto3.client('s3')

# Attempt an S3 operation to generate and capture detailed logs
try:
    s3.list_buckets()
except Exception as e:
    # Use logging to report errors
    logging.error("An error occurred: ", exc_info=e)