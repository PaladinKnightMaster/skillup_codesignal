import boto3

# Creating a default session and printing its region
default_session = boto3.Session()
print(f"Default session created. Region: {default_session.region_name}")

# Creating a custom session with specified credentials and printing its region
# Note: In a real application, use secure methods to manage your credentials
custom_credentials_session = boto3.Session(
    aws_access_key_id='YOUR_ACCESS_KEY_ID',
    aws_secret_access_key='YOUR_SECRET_ACCESS_KEY',
    region_name='us-east-1' # Specifying a region is optional here but included for demonstration
)
print(f"Custom credentials session created. Region: {custom_credentials_session.region_name}")

# Creating a session with a specified region and printing its region
region_specific_session = boto3.Session(region_name='us-west-2')
print(f"Region-specific session created. Region: {region_specific_session.region_name}")