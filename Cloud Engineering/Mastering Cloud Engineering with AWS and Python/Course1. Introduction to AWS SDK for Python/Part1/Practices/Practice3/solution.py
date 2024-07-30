# import boto3

# # TODO: Create a boto3 session with the region set to "us-west-2".

import boto3

# TODO: Create a boto3 session with the region set to "us-west-2".
session = boto3.Session(region_name="us-west-2")
print(f"Created session with region: {session.region_name}")