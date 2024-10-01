# import boto3

# # Initialize KMS client
# kms = boto3.client('kms')

# # Creating a KMS key
# cmk_response = kms.create_key(
#     Description='Sample KMS Key for Course',
#     KeyUsage='ENCRYPT_DECRYPT',
#     Origin='AWS_KMS'
# )

# # Extract Key Id
# key_id = cmk_response['KeyMetadata']['KeyId']

# # Generate data key
# data_key_response = kms.generate_data_key(
#     KeyId=key_id,
#     KeySpec='AES_256'
# )

# # TODO: Use describe_key to fetch metadata, extract 'KeyState' from 'KeyMetadata', and print it

import boto3

# Initialize KMS client
kms = boto3.client('kms')

# Creating a KMS key
cmk_response = kms.create_key(
    Description='Sample KMS Key for Course',
    KeyUsage='ENCRYPT_DECRYPT',
    Origin='AWS_KMS'
)

# Extract Key Id
key_id = cmk_response['KeyMetadata']['KeyId']

# Generate data key
data_key_response = kms.generate_data_key(
    KeyId=key_id,
    KeySpec='AES_256'
)

# Use describe_key to fetch metadata
key_metadata = kms.describe_key(KeyId=key_id)

# Extract and print KeyState from KeyMetadata
key_state = key_metadata['KeyMetadata']['KeyState']
print(f"Key State: {key_state}")
