import boto3

# Initialize the Secrets Manager client
client = boto3.client('secretsmanager')

# Create a new secret version 1
client.create_secret(Name='MyPassword', SecretString='simple password 1')

# Update the secret to version 2
client.update_secret(SecretId='MyPassword', SecretString='simple password 2')

# Generate a strong random password for version 3
strong_password = client.get_random_password(PasswordLength=16)['RandomPassword']

# Update the secret to version 3 and use the generated password
updated_secret_v3 = client.update_secret(SecretId='MyPassword', SecretString=strong_password)

# List Secret versions
versions_response = client.list_secret_version_ids(SecretId='MyPassword')
print('Versions of Secret:', versions_response['Versions']) # Note that only the 2 last versions are returned!

# Retrieve the previous value of the secret using the AWSPREVIOUS staging label
previous_secret_value = client.get_secret_value(SecretId='MyPassword', VersionStage='AWSPREVIOUS')['SecretString']
print('\nPrevious Secret Value (version 2):', previous_secret_value)

# Delete the secret
client.delete_secret(
    SecretId='MyPassword',
    ForceDeleteWithoutRecovery=False,
    RecoveryWindowInDays=7
)

# Restore the secret
response_restore = client.restore_secret(SecretId='MyPassword')
print('\nRestored Secret:', response_restore)

# Tag the secret
response_tag = client.tag_resource(
    SecretId='MyPassword',
    Tags=[{'Key': 'Environment', 'Value': 'Test'}]
)
print('\nTagged Secret:', response_tag)

# Remove tag from the secret
response_untag = client.untag_resource(
    SecretId='MyPassword',
    TagKeys=['Environment']
)
print('\nUntagged Secret:', response_untag)