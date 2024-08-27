import boto3
from botocore.exceptions import NoCredentialsError

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create the DynamoDB table.
table = dynamodb.create_table(
    TableName='Movies',
    KeySchema=[
        { 'AttributeName': 'year', 'KeyType': 'HASH' }, # Partition key
        { 'AttributeName': 'title', 'KeyType': 'RANGE' } # Sort key
    ],
    AttributeDefinitions=[
        { 'AttributeName': 'year', 'AttributeType': 'N' },
        { 'AttributeName': 'title', 'AttributeType': 'S' },
    ],
    ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
)

# Wait for table to be created or until 20 seconds have passed
table.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds, regardless of the result
    }
)

# Insert movies into the table
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# Get an item using GetItem
result = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'})
print(result.get('Item'))

# Using BatchGetItem
response = dynamodb.batch_get_item(
    RequestItems={
        'Movies': {
            'Keys': [
                { 'year': 2016, 'title': 'The Big New Movie' },
                { 'year': 2017, 'title': 'The Bigger, Newer Movie' }
            ],
            'ConsistentRead': True

        }
    }
)
print(response['Responses']['Movies'])