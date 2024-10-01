# import boto3

# # TODO: Initialize a boto3 SSM client

# # TODO: Create parameters for application's API URL and API key

# # TODO: Update the API URL parameter

# # TODO: Read and print the API URL parameter

# # TODO: Tag the API key parameter

# # TODO: Create a parameter hierarchy for application's database config

# # TODO: List all parameters in '/app_config/database' hierarchy

# # TODO: Delete the API URL parameter and the parameters in the database hierarchy

import boto3

# Initialize a boto3 SSM client
ssm_client = boto3.client('ssm')

# Create parameters for application's API URL and API key
ssm_client.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.example.com',
    Type='String',
    Overwrite=True
)

ssm_client.put_parameter(
    Name='/app_config/api_key',
    Value='1234567890abcdef',
    Type='SecureString',
    Overwrite=True
)

# Update the API URL parameter
ssm_client.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.new-example.com',
    Type='String',
    Overwrite=True
)

# Read and print the API URL parameter
api_url_param = ssm_client.get_parameter(Name='/app_config/api_url', WithDecryption=False)
print("API URL:", api_url_param['Parameter']['Value'])

# Tag the API key parameter
ssm_client.add_tags_to_resource(
    ResourceType='Parameter',
    ResourceId='/app_config/api_key',
    Tags=[
        {'Key': 'Environment', 'Value': 'Production'},
        {'Key': 'Owner', 'Value': 'DevTeam'}
    ]
)

# Create a parameter hierarchy for application's database config
ssm_client.put_parameter(
    Name='/app_config/database/host',
    Value='db.example.com',
    Type='String',
    Overwrite=True
)

ssm_client.put_parameter(
    Name='/app_config/database/username',
    Value='dbuser',
    Type='String',
    Overwrite=True
)

ssm_client.put_parameter(
    Name='/app_config/database/password',
    Value='securepassword',
    Type='SecureString',
    Overwrite=True
)

# List all parameters in '/app_config/database' hierarchy
database_params = ssm_client.get_parameters_by_path(Path='/app_config/database', Recursive=True, WithDecryption=True)
print("Database Parameters:")
for param in database_params['Parameters']:
    print(f"{param['Name']}: {param['Value']}")

# Delete the API URL parameter and the parameters in the database hierarchy
ssm_client.delete_parameter(Name='/app_config/api_url')

# Deleting parameters in the database hierarchy
ssm_client.delete_parameters(
    Names=[
        '/app_config/database/host',
        '/app_config/database/username',
        '/app_config/database/password'
    ]
)
