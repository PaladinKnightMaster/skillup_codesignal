# import boto3

# # Initialize a boto3 client for DynamoDB
# dynamodb = boto3.client('dynamodb')

# dynamodb.create_table(
#     TableName='Orders',
#     KeySchema=[
#         {
#             'AttributeName': 'OrderID',
#             'KeyType': 'HASH'  # Primary key
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'OrderId',
#             'AttributeType': 'S'
#         }
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 10,
#         'WriteCapacityUnits': 10
#     }
# )

import boto3

# Initialize a boto3 client for DynamoDB
dynamodb = boto3.client('dynamodb')

dynamodb.create_table(
    TableName='Orders',
    KeySchema=[
        {
            'AttributeName': 'OrderId',
            'KeyType': 'HASH'  # Primary key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'OrderId',
            'AttributeType': 'S'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)