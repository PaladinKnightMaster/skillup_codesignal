# import boto3

# # Initialize the boto3 Secrets Manager client
# sm = boto3.client('secretsmanager')

# # Create a new secret with a simple password
# response = sm.create_secret(Name='CosmoSecret', SecretString='simplePassword')

# # TODO: Generate a new highly secure password
# # TODO: Update the secret with the new password

import boto3

# Initialize the boto3 Secrets Manager client
sm = boto3.client('secretsmanager')

# Create a new secret with a simple password (this would only be used initially)
response = sm.create_secret(Name='CosmoSecret', SecretString='simplePassword')
print('Created Secret with simple password:', response)

# Generate a new highly secure password
new_password = sm.get_random_password(
    PasswordLength=16,               # 16 characters long password
    ExcludePunctuation=True,         # Exclude punctuation for simplicity
    ExcludeCharacters='@#"/',        # Exclude specific characters
    RequireEachIncludedType=True     # Ensure lower, upper, digits, and special characters are included
)['RandomPassword']

# Update the secret with the new password
response_update = sm.update_secret(
    SecretId='CosmoSecret',          # Secret ID to update
    SecretString='{"username":"cosmo", "password":"' + new_password + '"}'
)

print('Updated Secret with new secure password:', response_update)
