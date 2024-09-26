# import boto3

# # Initialize the Secrets Manager client
# client = boto3.client('secretsmanager')

# # Generate a simple random password
# new_password = client.get_random_password(PasswordLength=8)['RandomPassword']

# # Create a new secret with the generated password
# response_create = client.create_secret(
#     Name='MyTestSecret',
#     SecretString='{"username":"test", "password":"' + new_password + '"}'
# )

# print('Created Secret:', response_create)

import boto3

# Initialize the Secrets Manager client
client = boto3.client('secretsmanager')

# Generate a complex random password
new_password = client.get_random_password(
    PasswordLength=16,
    ExcludePunctuation=True,        # Ensure no punctuation is included
    ExcludeCharacters='@#"/',       # Exclude specific characters
    IncludeSpace=False,             # Exclude spaces just in case
    RequireEachIncludedType=True     # Ensure password contains lower, upper, digits, and special characters
)['RandomPassword']

# Create a new secret with the generated password
response_create = client.create_secret(
    Name='MyTestSecret',
    SecretString='{"username":"test", "password":"' + new_password + '"}'
)

print('Created Secret:', response_create)
