# import boto3

# # Initialize the boto3 SSM client
# ssm = boto3.client('ssm')

# # Create a plain text parameter for application's API URL
# ssm.put_parameter(
#     Name='/app_config/api_url',
#     Value='https://api.myapp.com',
#     Type='String',
# )

# # TODO: Update the '/app_config/api_url' parameter to 'https://api.newapp.com'
# # TODO: Fetch and print the updated API URL parameter value

import boto3

# Initialize the boto3 SSM client
ssm = boto3.client('ssm')

# Create a plain text parameter for application's API URL
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.myapp.com',
    Type='String',
)

# Update the '/app_config/api_url' parameter to 'https://api.newapp.com'
ssm.put_parameter(
    Name='/app_config/api_url',
    Value='https://api.newapp.com',
    Type='String',
    Overwrite=True  # This ensures the parameter is updated
)

# Fetch and print the updated API URL parameter value
response = ssm.get_parameter(
    Name='/app_config/api_url',
    WithDecryption=False  # In case it's a plain string, no decryption needed
)

# Print the updated parameter value
print(f"Updated API URL: {response['Parameter']['Value']}")
