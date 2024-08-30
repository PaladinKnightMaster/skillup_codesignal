import boto3
from boto3.dynamodb.conditions import Key

# Create a DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create the DynamoDB table
table = dynamodb.create_table(
    TableName='Movies',
    KeySchema=[
        {'AttributeName': 'year', 'KeyType': 'HASH'},  # Partition key
        {'AttributeName': 'title', 'KeyType': 'RANGE'}  # Sort key
    ],
    AttributeDefinitions=[
        {'AttributeName': 'year', 'AttributeType': 'N'},
        {'AttributeName': 'title', 'AttributeType': 'S'},
    ],
    ProvisionedThroughput={'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5}
)

# Wait for the table to be created or until 20 seconds have passed
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Make a maximum of 10 attempts
    }
)

# Populate table with data
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# Example with Query command 1: Simple Query
response_query_1 = table.query(
    KeyConditionExpression=Key('year').eq(2018)
)
print("Query 1 Results:", response_query_1['Items'])

# Example with Query command 2: Projection, using aliases to avoid reserved words, and consistent read
response_query_2 = table.query(
    KeyConditionExpression=Key('year').eq(2015),
    ProjectionExpression="#yr, title",
    ExpressionAttributeNames={"#yr": "year"},
    ConsistentRead=True
)
print("Query 2 Results:", response_query_2['Items'])

# Example with Scan command 1: Simple Scan
response_scan_1 = table.scan()
print("Scan 1 Results:", response_scan_1['Items'])

# Example with Scan command 2: Scan with FilterExpression
response_scan_2 = table.scan(
    FilterExpression="contains(title, :title_val)",
    ExpressionAttributeValues={':title_val': 'Movie'}
)
print("Scan 2 Results:", response_scan_2['Items'])