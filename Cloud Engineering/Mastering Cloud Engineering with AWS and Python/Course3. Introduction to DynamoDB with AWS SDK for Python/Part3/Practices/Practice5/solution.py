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

# # Wait for the table to be created
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Students',
#     WaiterConfig={
#         'Delay': 2,
#         'MaxAttempts': 10
#     }
# )

# # TO DO: Add a student item to the table
# # TO DO: Use a BatchWriteItem operation to add multiple student items to the table
# # TO DO: Try to add another item with the same primary key as an existing item using a condition expression to avoid overwriting
# # TO DO: List and print all items in the created table

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

# Wait for the table to be created
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Students',
    WaiterConfig={
        'Delay': 2,
        'MaxAttempts': 10
    }
)

# TO DO: Add a student item to the table
table.put_item(
    Item={
        'student_id': 1,
        'name': 'John Doe',
        'age': 22,
        'major': 'Computer Science'
    }
)
# TO DO: Use a BatchWriteItem operation to add multiple student items to the table
with table.batch_writer() as batch:
    batch.put_item(
        Item={
            'student_id': 2,
            'name': 'Jane Doe',
            'age': 21,
            'major': 'Mathematics'
        }
    )
    batch.put_item(
        Item={
            'student_id': 3,
            'name': 'Jim Smith',
            'age': 20,
            'major': 'Physics'
        }
    )
# TO DO: Try to add another item with the same primary key as an existing item using a condition expression to avoid overwriting
try:
    table.put_item(
        Item={
            'student_id': 2,
            'name': 'Jane Doe',
            'age': 21,
            'major': 'Mathematics'
        },
        ConditionExpression='attribute_not_exists(student_id)'
    )
    print("Item added successfully.")
except Exception as e:
    print(e)
# TO DO: List and print all items in the created table
response = table.scan()

for item in response['Items']:
    print(item)