# import boto3
# from boto3.dynamodb.conditions import Key, Attr

# # Create a DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Create the DynamoDB table
# table = dynamodb.create_table(
#     TableName='Movies',
#     KeySchema=[
#         {'AttributeName': 'year', 'KeyType': 'HASH'},  # Partition key
#         {'AttributeName': 'title', 'KeyType': 'RANGE'}  # Sort key
#     ],
#     AttributeDefinitions=[
#         {'AttributeName': 'year', 'AttributeType': 'N'},
#         {'AttributeName': 'title', 'AttributeType': 'S'}
#     ],
#     ProvisionedThroughput={'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5}
# )

# # Wait for the table to be created with custom configuration
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Movies',
#     WaiterConfig={'Delay': 2,'MaxAttempts': 10}
# )

# # Populate table with data
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
# table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
# table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
# table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
# table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# # TODO: Write a query to retrieve all movies released in 2018 and print them

# # TODO: Write a query to retrieve all movies from 2017 with titles starting with "The" and print them

import boto3
from boto3.dynamodb.conditions import Key, Attr

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
        {'AttributeName': 'title', 'AttributeType': 'S'}
    ],
    ProvisionedThroughput={'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5}
)

# Wait for the table to be created with custom configuration
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={'Delay': 2,'MaxAttempts': 10}
)

# Populate table with data
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie'})

# TODO: Write a query to retrieve all movies released in 2018 and print them
result = table.query(
    KeyConditionExpression=Key('year').eq(2018)
)
print("Result for all movies released in 2018:", result['Items'])
# TODO: Write a query to retrieve all movies from 2017 with titles starting with "The" and print them
result = table.query(
    KeyConditionExpression=Key('year').eq(2017) & Key('title').begins_with('The')
)
print("Result for all movies from 2017 with titles starting with 'The':", result['Items'])