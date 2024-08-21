import boto3
from botocore.config import Config

# Initialize the boto3 resource for DynamoDB
dynamodb = boto3.resource('dynamodb')

# Create the 'Users' table
table = dynamodb.create_table(
    TableName='Users',
    KeySchema=[
        {
            'AttributeName': 'username',
            'KeyType': 'HASH'  # Partition key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'username',
            'AttributeType': 'S'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 5,
        'WriteCapacityUnits': 5
    }
)

# Wait for the table to exist without specifying additional parameters
table.wait_until_exists()

print("Table 'Users' has been created.")