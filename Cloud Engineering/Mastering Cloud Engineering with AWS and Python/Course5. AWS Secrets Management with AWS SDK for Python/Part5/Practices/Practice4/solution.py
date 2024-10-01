# import boto3

# # Initialize KMS client
# kms = boto3.client('kms')

# # Creating a KMS key
# kms_response = kms.create_key(
#     Description='Sample KMS key for Course',
#     KeyUsage='ENCRYPT_DECRYPT',
#     Origin='AWS_KMS'
# )

# # Extract Key Id
# key_id = kms_response['KeyMetadata']['KeyId']

# # TODO: Enable key rotation for the created KMS key

# # TODO: Verify the key rotation by describing the key and printing the 'KeyRotationEnabled' attribute

import boto3
import time

# Initialize KMS client
kms = boto3.client('kms')

# Creating a KMS key
kms_response = kms.create_key(
    Description='Sample KMS key for Course',
    KeyUsage='ENCRYPT_DECRYPT',
    Origin='AWS_KMS'
)

# Extract Key Id
key_id = kms_response['KeyMetadata']['KeyId']

# Enable key rotation for the created KMS key (for symmetric keys)
kms.enable_key_rotation(KeyId=key_id)

# Wait for a brief moment to ensure the key's metadata updates
time.sleep(5)

# Verify key rotation by describing the key and printing the 'KeyRotationEnabled' attribute
key_metadata = kms.describe_key(KeyId=key_id)
if 'KeyRotationEnabled' in key_metadata['KeyMetadata']:
    key_rotation_enabled = key_metadata['KeyMetadata']['KeyRotationEnabled']
    print(f"Key Rotation Enabled: {key_rotation_enabled}")
else:
    print("KeyRotationEnabled attribute not available. Ensure that this is a symmetric key.")
