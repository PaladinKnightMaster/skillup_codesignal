# TODO: Prepare an entire script that does the following:
# Create an AWS KMS key
# Generate a data key
# Encrypt some data
# Describe the key
# List all Keys
# Enable key rotation for the AWS KMS key
# Schedule the AWS KMS key for deletion

import boto3
from botocore.exceptions import ClientError
import base64

# Initialize KMS client
kms = boto3.client('kms')

# Step 1: Create a KMS Key
try:
    create_key_response = kms.create_key(
        Description='Sample AWS KMS key for Encryption',
        KeyUsage='ENCRYPT_DECRYPT',
        Origin='AWS_KMS'
    )
    key_id = create_key_response['KeyMetadata']['KeyId']
    print(f"KMS Key created with KeyId: {key_id}")
except ClientError as e:
    print(f"Error creating KMS Key: {e}")

# Step 2: Generate a Data Key
try:
    data_key_response = kms.generate_data_key(
        KeyId=key_id,
        KeySpec='AES_256'
    )
    plaintext_data_key = data_key_response['Plaintext']
    encrypted_data_key = data_key_response['CiphertextBlob']
    print("Data key generated.")
except ClientError as e:
    print(f"Error generating data key: {e}")

# Step 3: Encrypt some data
sample_data = b"Hello, this is some sample data!"
try:
    encrypt_response = kms.encrypt(
        KeyId=key_id,
        Plaintext=sample_data
    )
    encrypted_data = encrypt_response['CiphertextBlob']
    print(f"Data encrypted: {base64.b64encode(encrypted_data).decode()}")
except ClientError as e:
    print(f"Error encrypting data: {e}")

# Step 4: Describe the Key
try:
    key_description = kms.describe_key(KeyId=key_id)
    print(f"Key Description: {key_description['KeyMetadata']}")
except ClientError as e:
    print(f"Error describing the key: {e}")

# Step 5: List all Keys
try:
    keys_response = kms.list_keys()
    keys = keys_response['Keys']
    print("Listing all keys:")
    for key in keys:
        print(f"KeyId: {key['KeyId']}")
except ClientError as e:
    print(f"Error listing keys: {e}")

# Step 6: Enable Key Rotation
try:
    kms.enable_key_rotation(KeyId=key_id)
    print(f"Key rotation enabled for KeyId: {key_id}")
except ClientError as e:
    print(f"Error enabling key rotation: {e}")

# Step 7: Schedule the KMS Key for Deletion
try:
    kms.schedule_key_deletion(
        KeyId=key_id,
        PendingWindowInDays=7  # Can range from 7 to 30 days
    )
    print(f"KeyId: {key_id} scheduled for deletion in 7 days.")
except ClientError as e:
    print(f"Error scheduling key for deletion: {e}")
