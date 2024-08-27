# import boto3

# # Create DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Create the DynamoDB table.
# table = dynamodb.create_table(
#     TableName='Movies',
#     KeySchema=[
#         { 'AttributeName': 'year', 'KeyType': 'HASH' }, # Partition key
#         { 'AttributeName': 'title', 'KeyType': 'RANGE' }  # Sort key
#     ],
#     AttributeDefinitions=[
#         { 'AttributeName': 'year', 'AttributeType': 'N' },
#         { 'AttributeName': 'title', 'AttributeType': 'S' },
#     ],
#     ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
# )

# # Wait for the table to be created or until 20 seconds have passed
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Movies',
#     WaiterConfig={
#         'Delay': 2,  # Poll every 2 seconds
#         'MaxAttempts': 10  # Stop after 20 seconds
#     }
# )

# # Insert movies into the table
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})

# # TODO: Add the GetItem operation to retrieve the first movie using its primary key

# # TODO: Add the GetItem operation with ProjectionExpression to retrieve only the "title" attribute of the second movie

import boto3

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create the DynamoDB table.
table = dynamodb.create_table(
    TableName='Movies',
    KeySchema=[
        { 'AttributeName': 'year', 'KeyType': 'HASH' },  # Partition key
        { 'AttributeName': 'title', 'KeyType': 'RANGE' }  # Sort key
    ],
    AttributeDefinitions=[
        { 'AttributeName': 'year', 'AttributeType': 'N' },
        { 'AttributeName': 'title', 'AttributeType': 'S' },
    ],
    ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
)

# Wait for the table to be created or until 20 seconds have passed
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds
    }
)

# Insert movies into the table
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})

# Retrieve the first movie using its primary key
result = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'})
print("First Movie:", result.get('Item'))

# Retrieve only the "title" attribute of the second movie using ProjectionExpression
result_with_projection = table.get_item(
    Key={'year': 2017, 'title': 'The Bigger, Newer Movie'},
    ProjectionExpression='title'
)
print("Second Movie (Title Only):", result_with_projection.get('Item'))
