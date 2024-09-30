# import boto3

# # Initialize the boto3 SSM client
# ssm = boto3.client('ssm')

# # Create a plain text parameter for application's API URL
# ssm.put_parameter(
#     Name='/app_config/api_url',
#     Value='https://api.myapp.com',
#     Type='String',
# )

# # Create an encrypted parameter for application's API key
# ssm.put_parameter(
#     Name='/app_config/api_key',
#     Value='my_encrypted_api_key',
#     Type='SecureString',
# )

# # TODO: Retrieve and print the values of the '/app_config/api_url' and '/app_config/api_key' parameters

import boto3

# Initialize the boto3 SSM client
ssm = boto3.client('ssm')

# Create a plain text parameter for application's API URL
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.myapp.com',
    Type='String',
)

# Create an encrypted parameter for application's API key
ssm.put_parameter(
    Name='/app_config/api_key',
    Value='my_encrypted_api_key',
    Type='SecureString',
)

# TODO: Retrieve and print the values of the '/app_config/api_url' and '/app_config/api_key' parameters
response = ssm.get_parameters(
    Names=['/app_config/api_url', '/app_config/api_key'],
    WithDecryption=True
)

for param in response['Parameters']:
    print('Name:', param['Name'], 'Value:', param['Value'])
