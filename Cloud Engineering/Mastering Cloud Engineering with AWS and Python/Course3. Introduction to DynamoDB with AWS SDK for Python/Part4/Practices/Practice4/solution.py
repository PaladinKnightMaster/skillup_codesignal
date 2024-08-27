# import boto3

# # Create DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Table creation
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

# # Wait for table to be created, polling every 2 seconds and making 10 attempts maximum
# table.meta.client.get_waiter('table_exists').wait(TableName='Movies', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})

# # Insert movies into the table
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
# table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
# table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
# table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
# table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# # TODO: Add BatchGetItem operation to fetch 'The Big New Movie' and 'The Bigger, Newer Movie'
# # Print retrieved items

import boto3

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Table creation
table = dynamodb.create_table(
    TableName='Movies',
    KeySchema=[
        { 'AttributeName': 'year', 'KeyType': 'HASH' }, # Partition key
        { 'AttributeName': 'title', 'KeyType': 'RANGE' }  # Sort key
    ],
    AttributeDefinitions=[
        { 'AttributeName': 'year', 'AttributeType': 'N' },
        { 'AttributeName': 'title', 'AttributeType': 'S' },
    ],
    ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
)

# Wait for table to be created, polling every 2 seconds and making 10 attempts maximum
table.meta.client.get_waiter('table_exists').wait(TableName='Movies', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})

# Insert movies into the table
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# BatchGetItem operation to fetch 'The Big New Movie' and 'The Bigger, Newer Movie'
response = dynamodb.batch_get_item(
    RequestItems={
        'Movies': {
            'Keys': [
                { 'year': 2016, 'title': 'The Big New Movie' },
                { 'year': 2017, 'title': 'The Bigger, Newer Movie' }
            ]
        }
    }
)

# Print retrieved items
retrieved_movies = response['Responses']['Movies']
for movie in retrieved_movies:
    print(movie)
