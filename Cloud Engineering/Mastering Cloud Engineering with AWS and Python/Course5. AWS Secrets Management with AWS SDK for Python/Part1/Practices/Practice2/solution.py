# import boto3

# # Create custom session
# my_session = boto3.Session(
#     aws_access_key_id='test',
#     aws_secret_access_key='test',
#     region_name='us-west-2'
# )

# # TODO: Create Secrets Manager client based on this session

# # TODO: Create Parameter Store (SSM) client based on this session

# # TODO: Create KMS client based on this session

import boto3

# Create custom session
my_session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)

# TODO: Create Secrets Manager client based on this session
secrets_manager_custom = my_session.client('secretsmanager')
# TODO: Create Parameter Store (SSM) client based on this session
ssm = my_session.client('ssm')
# TODO: Create KMS client based on this session
kms = my_session.client('kms')