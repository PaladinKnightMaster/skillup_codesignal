# import boto3

# # Initialize a boto3 resource for DynamoDB
# dynamodb = boto3.resource('dynamodb')

# # The script below creates a table with ItemId as a String type.
# table = dynamodb.create_table(
#     TableName='Inventory',
#     KeySchema=[
#         {
#             'AttributeName': 'ItemId',
#             'KeyType': 'HASH' # Primary key
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'ItemId',
#             'AttributeType': 'S'
#         }
#     ],
#     BillingMode='PAY_PER_REQUEST' # On-Demand billing mode
# )

# print("Table creation initiated. Table status:", table.table_status)

import boto3

# Initialize a boto3 resource for DynamoDB
dynamodb = boto3.resource('dynamodb')

# The script below creates a table with ItemId as a String type.
table = dynamodb.create_table(
    TableName='Inventory',
    KeySchema=[
        {
            'AttributeName': 'ItemId',
            'KeyType': 'HASH' # Primary key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'ItemId',
            'AttributeType': 'S'
        }
    ],
    BillingMode='PROVISIONED',  # Switch to Provisioned billing mode
    ProvisionedThroughput={'ReadCapacityUnits': 10, 'WriteCapacityUnits': 10}  # Specify capacity
)

print("Table creation initiated. Table status:", table.table_status)