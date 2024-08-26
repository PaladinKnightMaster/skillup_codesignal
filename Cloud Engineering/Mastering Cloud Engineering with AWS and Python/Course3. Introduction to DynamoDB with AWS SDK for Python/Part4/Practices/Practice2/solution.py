# # import boto3

# # # Create DynamoDB resource
# # dynamodb = boto3.resource('dynamodb')

# # # Create the DynamoDB table.
# # table = dynamodb.create_table(
# #     TableName='Movies',
# #     KeySchema=[
# #         { 'AttributeName': 'year', 'KeyType': 'HASH' },
# #         { 'AttributeName': 'title', 'KeyType': 'RANGE' }
# #     ],
# #     AttributeDefinitions=[
# #         { 'AttributeName': 'year', 'AttributeType': 'N' },
# #         { 'AttributeName': 'title', 'AttributeType': 'S' },
# #     ],
# #     ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
# # )

# # # Wait for table to be created with a maximum of 10 attempts every 2 seconds
# # table.meta.client.get_waiter('table_exists').wait(TableName='Movies', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})

# # # Insert movies into the table
# # table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# # table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})

# # # Get an item using GetItem
# # # TODO: Add strong consistency preference here
# # result = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'})
# # print(result.get('Item'))

# # # Using BatchGetItem
# # # TODO: Add strong consistency preference here
# # response = dynamodb.batch_get_item(
# #     RequestItems={
# #         'Movies': {
# #             'Keys': [
# #                 { 'year': 2016, 'title': 'The Big New Movie' },
# #                 { 'year': 2017, 'title': 'The Bigger, Newer Movie' }
# #             ],
# #         }
# #     }
# # )
# # print(response['Responses']['Movies'])

# import boto3

# # Create DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

# # Create the DynamoDB table.
# table = dynamodb.create_table(
#     TableName='Movies',
#     KeySchema=[
#         { 'AttributeName': 'year', 'KeyType': 'HASH' },
#         { 'AttributeName': 'title', 'KeyType': 'RANGE' }
#     ],
#     AttributeDefinitions=[
#         { 'AttributeName': 'year', 'AttributeType': 'N' },
#         { 'AttributeName': 'title', 'AttributeType': 'S' },
#     ],
#     ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
# )

# # Wait for table to be created with a maximum of 10 attempts every 2 seconds
# table.meta.client.get_waiter('table_exists').wait(TableName='Movies', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})

# # Insert movies into the table
# table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
# table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})

# # Get an item using GetItem
# # TODO: Add strong consistency preference here
# result = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'})
# print(result.get('Item'))

# # Using BatchGetItem
# # TODO: Add strong consistency preference here
# response = dynamodb.batch_get_item(
#     RequestItems={
#         'Movies': {
#             'Keys': [
#                 { 'year': 2016, 'title': 'The Big New Movie' },
#                 { 'year': 2017, 'title': 'The Bigger, Newer Movie' }
#             ],
#         }
#     }
# )
# print(response['Responses']['Movies'])

import boto3

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create the DynamoDB table.
table = dynamodb.create_table(
    TableName='Movies',
    KeySchema=[
        { 'AttributeName': 'year', 'KeyType': 'HASH' },
        { 'AttributeName': 'title', 'KeyType': 'RANGE' }
    ],
    AttributeDefinitions=[
        { 'AttributeName': 'year', 'AttributeType': 'N' },
        { 'AttributeName': 'title', 'AttributeType': 'S' },
    ],
    ProvisionedThroughput={ 'ReadCapacityUnits': 5, 'WriteCapacityUnits': 5 }
)

# Wait for table to be created with a maximum of 10 attempts every 2 seconds
table.meta.client.get_waiter('table_exists').wait(TableName='Movies', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})

# Insert movies into the table
table.put_item(Item={'year': 2016, 'title': 'The Big New Movie'})
table.put_item(Item={'year': 2017, 'title': 'The Bigger, Newer Movie'})

# Get an item using GetItem with strong consistency
result = table.get_item(Key={'year': 2016, 'title': 'The Big New Movie'}, ConsistentRead=True)
print(result.get('Item'))

# Using BatchGetItem with strong consistency
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
