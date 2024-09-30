# import boto3

# # Initialize the boto3 SSM client
# ssm = boto3.client('ssm')

# # Create a plain text parameter for application's API URL
# ssm.put_parameter(
#     Name='/app_config/api_url',
#     Value='https://api.myapp.com',
#     Type='String',
# )

# # Create a parameter hierarchy for application's database config
# ssm.put_parameter(
#     Name='/app_config/database/host',
#     Value='db.myapp.com',
#     Type='String',
# )

# ssm.put_parameter(
#     Name='/app_config/database/user',
#     Value='mydbuser',
#     Type='String',
# )

# ssm.put_parameter(
#     Name='/app_config/database/password',
#     Value='mydbpassword',
#     Type='SecureString',
# )

# # TODO: Delete '/app_config/api_url' parameter individually
# # TODO: Delete parameters in a '/app_config/database' hierarchy in a batch

import boto3

# Initialize the boto3 SSM client
ssm = boto3.client('ssm')

# Create a plain text parameter for application's API URL
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.myapp.com',
    Type='String',
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

# Delete '/app_config/api_url' parameter individually
ssm.delete_parameter(
    Name='/app_config/api_url'
)

# Delete parameters in a '/app_config/database' hierarchy in a batch
ssm.delete_parameters(
    Names=[
        '/app_config/database/host',
        '/app_config/database/user',
        '/app_config/database/password'
    ]
)

print("Parameters deleted successfully.")
