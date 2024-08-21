# import boto3

# # Initialize a boto3 resource for DynamoDB
# dynamodb = boto3.resource('dynamodb')

# # The script below creates a table. Modify it to include Manufacturer as a range key.
# dynamodb.create_table(
#     TableName='Products',
#     KeySchema=[
#         {
#             'AttributeName': 'ProductId',
#             'KeyType': 'HASH'  # Primary key
#         },
#         # TODO: Define Manufacturer as the range key
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'ProductId',
#             'AttributeType': 'S'
#         },
#         # TODO: Add attribute definition for Manufacturer
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 10,
#         'WriteCapacityUnits': 10
#     }
# )

# # TODO: Implement a waiter to ensure the table is fully created before proceeding; make it poll every 2 seconds for a maximum of 10 attempts

# # TODO: List all DynamoDB tables to confirm the table creation

import boto3

# Initialize a boto3 resource for DynamoDB
dynamodb = boto3.resource('dynamodb')

# The script below creates a table. Modify it to include Manufacturer as a range key.
dynamodb.create_table(
    TableName='Products',
    KeySchema=[
        {
            'AttributeName': 'ProductId',
            'KeyType': 'HASH'  # Primary key
        },
        # TODO: Define Manufacturer as the range key
        {
            'AttributeName': 'Manufacturer',
            'KeyType': 'RANGE'
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'ProductId',
            'AttributeType': 'S'
        },
        # TODO: Add attribute definition for Manufacturer
        {
            'AttributeName': 'Manufacturer',
            'AttributeType': 'S'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)

# TODO: Implement a waiter to ensure the table is fully created before proceeding; make it poll every 2 seconds for a maximum of 10 attempts
waiter = dynamodb.meta.client.get_waiter('table_exists')
waiter.wait(TableName='Products', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})
# TODO: List all DynamoDB tables to confirm the table creation
tables = dynamodb.tables.all()
print("Existing tables:", [t.name for t in tables])