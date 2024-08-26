# import boto3

# # Create DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Create the DynamoDB table.
# table = dynamodb.create_table(
#     TableName='Movies',
#     KeySchema=[
#         { 'AttributeName': 'year', 'KeyType': 'HASH' }, # Partition key
#         { 'AttributeName': 'title', 'KeyType': 'RANGE' } # Sort key
#     ],
#     AttributeDefinitions=[
#         { 'AttributeName': 'year', 'AttributeType': 'N' },
#         { 'AttributeName': 'title', 'AttributeType': 'S' },
#     ],
#     ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
# )

# # Wait for table to be created with custom waiter
# table.meta.client.get_waiter('table_exists').wait(
#     TableName='Movies',
#     WaiterConfig={
#         'Delay': 2,           # Poll every 2 seconds
#         'MaxAttempts': 10     # Make maximum 10 attempts
#     }
# )

# # Insert movies into the table
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
# table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
# table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
# table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
# table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# # TODO: Retrieve 'The Big New Movie' from 2016 using a simple GetItem.
# # TODO: Retrieve 'The Big New Movie' from 2016 using GetItem with ProjectionExpression for 'title' and 'genre'.
# # TODO: Retrieve 'The Big New Movie' from 2016 using a strongly consistent read.
# # TODO: Use BatchGetItem to retrieve 'The Big New Movie' from 2016 and 'The Bigger, Newer Movie' from 2017 with consistent read.

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

# Wait for table to be created with custom waiter
table.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={
        'Delay': 2,           # Poll every 2 seconds
        'MaxAttempts': 10     # Make maximum 10 attempts
    }
)

# Insert movies into the table
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# Retrieve 'The Big New Movie' from 2016 using a simple GetItem.
result_simple_get = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'})
print("Simple GetItem:", result_simple_get.get('Item'))

# Retrieve 'The Big New Movie' from 2016 using GetItem with ProjectionExpression for 'title' and 'genre'.
# Note: Since genre isn't defined, this will only return title
result_projection = table.get_item(
    Key={'year': 2016, 'title': 'The Big New Movie'},
    ProjectionExpression='title, genre'  # Example assumes 'genre' might be a field
)
print("GetItem with ProjectionExpression:", result_projection.get('Item'))

# Retrieve 'The Big New Movie' from 2016 using a strongly consistent read.
result_strong_consistent = table.get_item(
    Key={'year': 2016, 'title': 'The Big New Movie'},
    ConsistentRead=True
)
print("Strongly Consistent GetItem:", result_strong_consistent.get('Item'))

# Use BatchGetItem to retrieve 'The Big New Movie' from 2016 and 'The Bigger, Newer Movie' from 2017 with consistent read.
response_batch_get = dynamodb.batch_get_item(
    RequestItems={
        'Movies': {
            'Keys': [
                { 'year': 2016, 'title': 'The Big New Movie' },
                { 'year': 2017, 'title': 'The Bigger, Newer Movie' }
            ],
            'ConsistentRead': True  # Enable strong consistency for batch read
        }
    }
)
print("BatchGetItem with Strong Consistency:", response_batch_get['Responses']['Movies'])
