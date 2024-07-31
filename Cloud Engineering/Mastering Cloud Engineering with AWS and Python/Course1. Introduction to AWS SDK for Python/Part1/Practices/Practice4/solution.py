# import boto3

# # TODO: Use boto3 to initialize an EC2 resource with the default session.

# # TODO: Create a custom session targeting the 'us-west-2' region.

# # TODO: Use the custom session you created to initialize another EC2 resource.

import boto3

# TODO: Use boto3 to initialize an EC2 resource with the default session.
default_session = boto3.Session()
ec2_resource = default_session.resource('ec2')

# TODO: Create a custom session targeting the 'us-west-2' region.
custom_session = boto3.Session(region_name='us-west-2')

# TODO: Use the custom session you created to initialize another EC2 resource.
ec2_resource = custom_session.resource('ec2')