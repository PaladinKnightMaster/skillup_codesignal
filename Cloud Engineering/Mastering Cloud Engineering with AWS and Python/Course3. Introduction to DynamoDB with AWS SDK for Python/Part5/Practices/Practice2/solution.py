# import boto3
# import time

# # Initialize the boto3 DynamoDB resource
# dynamodb = boto3.resource('dynamodb')
# print("DynamoDB resource initialized.")

# # Create table with username as HASH key and post_id as RANGE key
# table = dynamodb.create_table(
#     TableName='UserPosts',
#     KeySchema=[
#         {'AttributeName': 'username', 'KeyType': 'HASH'},
#         {'AttributeName': 'post_id', 'KeyType': 'RANGE'}
#     ],
#     AttributeDefinitions=[
#         {'AttributeName': 'username', 'AttributeType': 'S'},
#         {'AttributeName': 'post_id', 'AttributeType': 'N'}
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 10,
#         'WriteCapacityUnits': 10
#     }
# )
# print("Table 'UserPosts' creation initiated.")

# # Wait for table to be fully created
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='UserPosts',
#     WaiterConfig={
#         'Delay': 2,  # Poll every 2 seconds
#         'MaxAttempts': 10  # Stop after 20 seconds
#     }
# )
# print("Table 'UserPosts' is active.")

# # Insert initial items into the table
# table.put_item(Item={'username': 'John', 'post_id': 1, 'content': 'Hello World!'})
# print("Item inserted: John's first post.")
# table.put_item(Item={'username': 'John', 'post_id': 2, 'content': 'Another Post'})
# print("Item inserted: John's second post.")
# table.put_item(Item={'username': 'Anna', 'post_id': 1, 'content': 'First Post'})
# print("Item inserted: Anna's first post.")

# # TODO: Modify following update to also change the content of John's first post along with the status.
# table.update_item(
#     Key={'username': 'John', 'post_id': 1},
#     UpdateExpression='SET #sts = :val2',
#     ExpressionAttributeNames={'#sts': 'status'},
#     ExpressionAttributeValues={':val2': 'updated'}
# )
# print("John's first post status updated.")

import boto3
import time

# Initialize the boto3 DynamoDB resource
dynamodb = boto3.resource('dynamodb')
print("DynamoDB resource initialized.")

# Create table with username as HASH key and post_id as RANGE key
table = dynamodb.create_table(
    TableName='UserPosts',
    KeySchema=[
        {'AttributeName': 'username', 'KeyType': 'HASH'},
        {'AttributeName': 'post_id', 'KeyType': 'RANGE'}
    ],
    AttributeDefinitions=[
        {'AttributeName': 'username', 'AttributeType': 'S'},
        {'AttributeName': 'post_id', 'AttributeType': 'N'}
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 10,
        'WriteCapacityUnits': 10
    }
)
print("Table 'UserPosts' creation initiated.")

# Wait for table to be fully created
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='UserPosts',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds
    }
)
print("Table 'UserPosts' is active.")

# Insert initial items into the table
table.put_item(Item={'username': 'John', 'post_id': 1, 'content': 'Hello World!'})
print("Item inserted: John's first post.")
table.put_item(Item={'username': 'John', 'post_id': 2, 'content': 'Another Post'})
print("Item inserted: John's second post.")
table.put_item(Item={'username': 'Anna', 'post_id': 1, 'content': 'First Post'})
print("Item inserted: Anna's first post.")

# TODO: Modify following update to also change the content of John's first post along with the status.
table.update_item(
    Key={'username': 'John', 'post_id': 1},
    UpdateExpression='SET #sts = :val2, #cnt = :val3',
    ExpressionAttributeNames={
        '#sts': 'status',
        '#cnt': 'content'
    },
    ExpressionAttributeValues={
        ':val2': 'updated',
        ':val3': 'Updated content for John\'s first post'
    }
)
print("John's first post status and content updated.")