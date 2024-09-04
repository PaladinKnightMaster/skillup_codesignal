# import boto3
# from boto3.dynamodb.conditions import Attr

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

# # Wait for the table to be created
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='Movies',
#     WaiterConfig={
#         'Delay': 2,  # poll every 2 seconds
#         'MaxAttempts': 10  # maximum 10 attempts
#     }
# )

# # Populate table with data including the genre attribute
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie', 'genre': 'Comedy'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie', 'genre': 'Action'})
# table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie', 'genre': 'Action'})
# table.put_item(Item={'year': 2017, 'title': 'One More Movie', 'genre': 'Drama'})
# table.put_item(Item={'year': 2015, 'title': 'An Old Movie', 'genre': 'Romance'})
# table.put_item(Item={'year': 2018, 'title': 'Another New Movie', 'genre': 'Action'})

# # TODO: Write a simple Scan operation to find all movies.
# # TODO: Write a Scan operation to find all 'Action' movies.
# # TODO: Write a Scan operation to find all movies released after 2016.

import boto3
from boto3.dynamodb.conditions import Attr

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

# Wait for the table to be created
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='Movies',
    WaiterConfig={
        'Delay': 2,  # poll every 2 seconds
        'MaxAttempts': 10  # maximum 10 attempts
    }
)

# Populate table with data including the genre attribute
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie', 'genre': 'Comedy'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie', 'genre': 'Action'})
table.put_item(Item={'year': 2017, 'title': 'Yet Another Movie', 'genre': 'Action'})
table.put_item(Item={'year': 2017, 'title': 'One More Movie', 'genre': 'Drama'})
table.put_item(Item={'year': 2015, 'title': 'An Old Movie', 'genre': 'Romance'})
table.put_item(Item={'year': 2018, 'title': 'Another New Movie', 'genre': 'Action'})

# TODO: Write a simple Scan operation to find all movies.
result = table.scan()
print("Result for all movies:", result['Items'])
# TODO: Write a Scan operation to find all 'Action' movies.
result = table.scan(FilterExpression=Attr('genre').eq('Action'))
print("Result for all 'Action' movies:", result['Items'])
# TODO: Write a Scan operation to find all movies released after 2016.
result = table.scan(FilterExpression=Attr('year').gt(2016))
print("Result for all movies released after 2016:", result['Items'])