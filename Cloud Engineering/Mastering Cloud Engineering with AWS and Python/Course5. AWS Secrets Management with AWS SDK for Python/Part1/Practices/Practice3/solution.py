# import boto3

# # TODO: Create default Secrets Manager client

# # TODO: Create default Parameter Store (SSM) client

# # TODO: Create default KMS client

# # TODO: Create custom session

# # TODO: Create Secrets Manager client based on this session

# # TODO: Create Parameter Store (SSM) client based on this session

# # TODO: Create KMS client based on this session

import boto3

# TODO: Create default Secrets Manager client
secrets_manager_default = boto3.client('secretsmanager')
# TODO: Create default Parameter Store (SSM) client
ssm_default = boto3.client('ssm')
# TODO: Create default KMS client
kms_default = boto3.client('kms')
# TODO: Create custom session
custom_session = boto3.Session(
    aws_access_key_id='test',
    aws_secret_access_key='test',
    region_name='us-west-2'
)
# TODO: Create Secrets Manager client based on this session
secrets_manager_client = custom_session.client('secretsmanager')
# TODO: Create Parameter Store (SSM) client based on this session
ssm = custom_session.client('ssm')
# TODO: Create KMS client based on this session
kms = custom_session.client('kms')