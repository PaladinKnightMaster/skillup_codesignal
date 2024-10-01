# import boto3

# # Initialize the boto3 SSM client
# ssm = boto3.client('ssm')

# # Create a parameter for an application's database config
# ssm.put_parameter(
#     Name='/app_config/database/host',
#     Value='db.myapp.com',
#     Type='String',
# )

# # TODO: Add a line of code to tag the '/app_config/database/host' parameter

import boto3

# Initialize the boto3 SSM client
ssm = boto3.client('ssm')

# Create a parameter for an application's database config
ssm.put_parameter(
    Name='/app_config/database/host',
    Value='db.myapp.com',
    Type='String',
)

# Add a tag to the '/app_config/database/host' parameter
ssm.add_tags_to_resource(
    ResourceType='Parameter',
    ResourceId='/app_config/database/host',
    Tags=[
        {
            'Key': 'owner',
            'Value': 'Cosmo'
        }
    ]
)

print("Tag added successfully.")
