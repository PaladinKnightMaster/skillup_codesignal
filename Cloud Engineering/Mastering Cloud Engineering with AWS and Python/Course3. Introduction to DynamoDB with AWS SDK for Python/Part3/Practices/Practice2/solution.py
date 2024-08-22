# import boto3
# import time

# # Create a DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Create the DynamoDB table
# table = dynamodb.create_table(
#     TableName='Students',
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'student_id',
#             'AttributeType': 'N'
#         }
#     ],
#     KeySchema=[
#         {
#             'AttributeName': 'student_id',
#             'KeyType': 'HASH'
#         }
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 5,
#         'WriteCapacityUnits': 5
#     }
# )

# # Wait for the table to be created
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Students',
#     WaiterConfig={
#         'Delay': 2,  # Poll every 2 seconds
#         'MaxAttempts': 10  # Stop after 20 seconds
#     }
# )

# # TODO: Modify the PutItem code below to change the name from 'John Doe' to 'John Smith' and add a new attribute 'email' with the value 'john.smith@example.com'

# # Put a data item in the table with PutItem
# table.put_item(
#     Item={
#         'student_id': 1,
#         'name': 'John Doe',
#         'age': 22,
#         'major': 'Computer Science'
#         # Add new attribute 'email' here
#     }
# )

# # List all items in the created table
# response = table.scan()

# for item in response['Items']:
#     print(item)

import boto3
import time

# Create a DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create the DynamoDB table
table = dynamodb.create_table(
    TableName='Students',
    AttributeDefinitions=[
        {
            'AttributeName': 'student_id',
            'AttributeType': 'N'
        }
    ],
    KeySchema=[
        {
            'AttributeName': 'student_id',
            'KeyType': 'HASH'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 5,
        'WriteCapacityUnits': 5
    }
)

# Wait for the table to be created
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Students',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds
    }
)

# TODO: Modify the PutItem code below to change the name from 'John Doe' to 'John Smith' and add a new attribute 'email' with the value 'john.smith@example.com'

# Put a data item in the table with PutItem
table.put_item(
    Item={
        'student_id': 1,
        'name': 'John Smith',
        'age': 22,
        'major': 'Computer Science',
        # Add new attribute 'email' here
        'email': 'john.smith@example.com'
    }
)

# List all items in the created table
response = table.scan()

for item in response['Items']:
    print(item)