import boto3

# Initialize KMS client
kms = boto3.client('kms')

# Creating an AWS KMS key
cmk_response = kms.create_key(
    Description='Sample KMS key for Course',
    KeyUsage='ENCRYPT_DECRYPT',
    Origin='AWS_KMS'
)

# Extract Key Id
key_id = cmk_response['KeyMetadata']['KeyId']
print('Created key with Key ID: ', key_id)