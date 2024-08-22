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
        'Delay': 2, # Poll every 2 seconds
        'MaxAttempts': 10 # Stop after 10 attempts
    }
)

# Put a data item in the table with PutItem
table.put_item(
    Item={
        'student_id': 1,
        'name': 'John Doe',
        'age': 22,
        'major': 'Computer Science'
    }
)

# Put multiple data items in the table with BatchWriteItem
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
            'age': 23,
            'major': 'Physics'
        }
    )

# Adding another item with a condition expression to ensure it doesn't overwrite an existing item
try:
    table.put_item(
        Item={
            'student_id': 1,
            'name': 'Jake Long',
            'age': 24,
            'major': 'Biology'
        },
        ConditionExpression='attribute_not_exists(student_id)'
    )
    print("Item added successfully.")
except boto3.exceptions.botocore.client.ClientError as e:
    if e.response['Error']['Code'] == 'ConditionalCheckFailedException':
        print("Item already exists with the same student_id.")
    else:
        raise

# List all items in the created table
response = table.scan()

for item in response['Items']:
    print(item)