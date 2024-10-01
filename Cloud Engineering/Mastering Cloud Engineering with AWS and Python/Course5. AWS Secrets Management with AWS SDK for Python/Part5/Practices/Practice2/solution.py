# import boto3

# # Initialize KMS client
# kms = boto3.client('kms')

# # Creating an AWS KMS key
# kms_key_response = kms.create_key(
#     Description='Sample KMS Key for Course',
#     KeyUsage='ENCRYPT_DECRYPT',
#     Origin='AWS_KMS'
# )

# # Extract Key Id
# key_id = kms_key_response['KeyMetadata']['KeyId']

# # TODO: Generate a data key

import boto3

# Initialize KMS client
kms = boto3.client('kms')

# Creating an AWS KMS key
kms_key_response = kms.create_key(
    Description='Sample KMS Key for Course',
    KeyUsage='ENCRYPT_DECRYPT',
    Origin='AWS_KMS'
)

# Extract Key Id
key_id = kms_key_response['KeyMetadata']['KeyId']

# TODO: Generate a data key
data_key_response = kms.generate_data_key(
    KeyId=key_id,
    KeySpec='AES_256'
)