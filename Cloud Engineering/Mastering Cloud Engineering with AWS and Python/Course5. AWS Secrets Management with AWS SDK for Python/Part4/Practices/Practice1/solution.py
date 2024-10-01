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

# Update the API URL parameter
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.newurl.com',
    Type='String',
    Overwrite=True,
)

# Read the API URL parameter
response = ssm.get_parameter(
    Name='/app_config/api_url',
    WithDecryption=False
)
print('API URL:', response['Parameter']['Value'])

# Tag the encrypted API key parameter
ssm.add_tags_to_resource(
    ResourceType='Parameter',
    ResourceId='/app_config/api_key',
    Tags=[{'Key': 'Environment', 'Value': 'Prod'}]
)

# Create a parameter hierarchy for application's database config
ssm.put_parameter(
    Name='/app_config/database/host',
    Value='db.myapp.com',
    Type='String',
)

ssm.put_parameter(
    Name='/app_config/database/user',
    Value='mydbuser',
    Type='String',
)

ssm.put_parameter(
    Name='/app_config/database/password',
    Value='mydbpassword',
    Type='SecureString',
)

# List all parameters in '/app_config/database' hierarchy
response = ssm.get_parameters_by_path(
    Path='/app_config/database',
    WithDecryption=False
)
for param in response['Parameters']:
    print('Name:', param['Name'], 'Value:', '[SECURE]' if param['Type'] == 'SecureString' else param['Value'])

# Delete the API URL parameter
ssm.delete_parameter(Name='/app_config/api_url')

# Delete parameters in the database hierarchy
ssm.delete_parameters(Names=[
    '/app_config/database/host',
    '/app_config/database/user',
    '/app_config/database/password'
])