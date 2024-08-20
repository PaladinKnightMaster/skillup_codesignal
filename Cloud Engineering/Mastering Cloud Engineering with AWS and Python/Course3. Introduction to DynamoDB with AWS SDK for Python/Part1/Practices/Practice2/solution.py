# import boto3

# # Create an AWS session with explicit credentials and a region
# session = boto3.Session(
#     aws_access_key_id='YOUR_ACCESS_KEY_ID',
#     aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
#     region_name='us-west-2'
# )

# # TODO: Modify these resources and client creations to not rely on the explicit session above

# # Create a DynamoDB resource based on the session
# dynamodb_resource = session.resource('dynamodb')

# # Create a DynamoDB client based on the session
# dynamodb_client = session.client('dynamodb')

import boto3

# Create an AWS session with explicit credentials and a region
# session = boto3.Session(
#     aws_access_key_id='YOUR_ACCESS_KEY_ID',
#     aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
#     region_name='us-west-2'
# )

# TODO: Modify these resources and client creations to not rely on the explicit session above
resource = boto3.resource('dynamodb')
client =  boto3.client('dynamodb')
# Create a DynamoDB resource based on the session
# dynamodb_resource = session.resource('dynamodb')

# Create a DynamoDB client based on the session
# dynamodb_client = session.client('dynamodb')