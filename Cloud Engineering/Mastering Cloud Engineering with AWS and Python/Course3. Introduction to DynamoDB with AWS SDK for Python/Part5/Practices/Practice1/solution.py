import boto3
import time
from botocore.exceptions import ClientError

# Initialize the boto3 DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Create table with username as HASH key and post_id as RANGE key
print("Creating `UserPosts` table...")
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

# Wait for table to be fully created
print("Waiting for `UserPosts` table to be created...")
dynamodb.meta.client.get_waiter('table_exists').wait(
    TableName='UserPosts',
    WaiterConfig={
        'Delay': 2,  # Poll every 2 seconds
        'MaxAttempts': 10  # Stop after 20 seconds
    }
)
print("`UserPosts` table created successfully.")

# Insert initial items into the table
print("Inserting items into `UserPosts` table...")
table.put_item(Item={'username': 'John', 'post_id': 1, 'content': 'Hello World!'})
table.put_item(Item={'username': 'John', 'post_id': 2, 'content': 'Another Post'})
table.put_item(Item={'username': 'Anna', 'post_id': 1, 'content': 'First Post'})
print("Items inserted successfully.")

# Update an item: modifying content of John's first post
print("Updating John's first post...")
table.update_item(
    Key={'username': 'John', 'post_id': 1},
    UpdateExpression='SET content = :val1',
    ExpressionAttributeValues={':val1': 'Updated World!'}
)
print("John's first post updated successfully.")

# More complicated update: change content and status of John's first post with condition
print("Performing more complicated update on John's first post...")
table.update_item(
    Key={'username': 'John', 'post_id': 1},
    UpdateExpression='SET content = :val1, #sts = :val2',
    ExpressionAttributeNames={'#sts': 'status'},
    ExpressionAttributeValues={':val1': 'Updated Hello World!', ':val2': 'updated'},
    ConditionExpression='attribute_exists(post_id) AND attribute_exists(username)'
)
print("More complicated update performed successfully.")

# Delete an item: remove John's second post
print("Deleting John's second post...")
table.delete_item(Key={'username': 'John', 'post_id': 2})
print("John's second post deleted successfully.")

# Delete an item with a condition: remove John's first post if its status is 'draft'
print("Deleting John's first post with condition...")
try:
    response = table.delete_item(
        Key={'username': 'John', 'post_id': 1},
        ConditionExpression="#sts = :val",
        ExpressionAttributeNames={'#sts': 'status'},
        ExpressionAttributeValues={':val': 'draft'}
    )
    print("John's first post deleted successfully.")
except ClientError as e:
    if e.response['Error']['Code'] == "ConditionalCheckFailedException":
        print("Delete failed: status does not match 'draft'")
    else:
        raise

# Batch delete items: delete John's first post and Anna's first post in a batch
print("Performing batch delete...")
with table.batch_writer() as batch:
    batch.delete_item(Key={'username': 'John', 'post_id': 1})
    batch.delete_item(Key={'username': 'Anna', 'post_id': 1})
print("Batch delete performed successfully.")