# import boto3

# # Initialize the boto3 DynamoDB resource
# dynamodb = boto3.resource('dynamodb')

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

# # Wait for table to be fully created, polling every 2 seconds for up to 20 seconds
# dynamodb.meta.client.get_waiter('table_exists').wait(
#     TableName='UserPosts',
#     WaiterConfig={
#         'Delay': 2,  # Poll every 2 seconds
#         'MaxAttempts': 10  # Stop after 20 seconds
#     }
# )

# print("Table UserPosts created and ready for operations.")

# # Insert initial items into the table
# table.put_item(Item={'username': 'John', 'post_id': 1, 'content': 'Hello World!'})
# table.put_item(Item={'username': 'John', 'post_id': 2, 'content': 'Another Post'})
# table.put_item(Item={'username': 'Anna', 'post_id': 1, 'content': 'First Post'})

# print("Initial items added to the table UserPosts.")

# # TO DO: Delete John's second post using a single item delete.

# # TO DO: Delete John's first post and Anna's first post by using batch delete

import boto3

# Initialize the boto3 DynamoDB resource
dynamodb = boto3.resource('dynamodb')

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

# Wait for table to be fully created, polling every 2 seconds for up to 20 seconds
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='UserPosts',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds
    }
)

print("Table UserPosts created and ready for operations.")

# Insert initial items into the table
table.put_item(Item={'username': 'John', 'post_id': 1, 'content': 'Hello World!'})
table.put_item(Item={'username': 'John', 'post_id': 2, 'content': 'Another Post'})
table.put_item(Item={'username': 'Anna', 'post_id': 1, 'content': 'First Post'})

print("Initial items added to the table UserPosts.")

# TO DO: Delete John's second post using a single item delete.
table.delete_item(Key={'username': 'John', 'post_id': 2})
print("John's second post deleted.")
# TO DO: Delete John's first post and Anna's first post by using batch delete
with table.batch_writer() as batch:
    batch.delete_item(Key={'username': 'John', 'post_id': 1})
    batch.delete_item(Key={'username': 'Anna', 'post_id': 1})
print("John's first post and Anna's first post deleted using batch delete.")
