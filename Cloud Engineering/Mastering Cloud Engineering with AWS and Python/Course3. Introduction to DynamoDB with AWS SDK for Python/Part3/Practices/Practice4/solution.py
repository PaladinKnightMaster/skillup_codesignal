# import boto3

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

# # Use wait_until_exists to ensure that your code won’t run until the table creation completes
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Students',
#     WaiterConfig={
#         'Delay': 2,       # Poll every 2 seconds
#         'MaxAttempts': 10  # Make a maximum of 10 attempts
#     }
# )

# # TODO: Use the batch_writer function to add three student records to the table.

import boto3

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

# Use wait_until_exists to ensure that your code won’t run until the table creation completes
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Students',
    WaiterConfig={
        'Delay': 2,       # Poll every 2 seconds
        'MaxAttempts': 10  # Make a maximum of 10 attempts
    }
)

# TODO: Use the batch_writer function to add three student records to the table.
with table.batch_writer() as batch:
    batch.put_item(
        Item={
            'student_id': 1,
            'name': 'John Doe',
            'age': 22,
            'major': 'Computer Science'
        }
    )
    batch.put_item(
        Item={
            'student_id': 2,
            'name': 'Emily Johnson',
            'age': 21,
            'major': 'Mathematics'
        }
    )
    batch.put_item(
        Item={
            'student_id': 3,
            'name': 'Jim Smith',
            'age': 23,
            'major': 'Physics'
        }
    )

# Listing all items in the created table
response = table.scan()

for item in response['Items']:
    print(item)
