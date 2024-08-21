# import boto3

# # TODO: Initialize the boto3 DynamoDB resource

# # TODO: Create the 'Users' table with Provisioned Throughput and a primary key of 'username'

# # TODO: Use `wait_until_exists()` for the 'Users' table

# # TODO: Create the 'Customers' table with On-Demand capacity and a primary key of 'customer_id'

# # TODO: Configure a custom waiter for the 'Customers' table which polls every 2 seconds and makes 10 attempts

# # TODO: List all the existing tables in DynamoDB

import boto3

# TODO: Initialize the boto3 DynamoDB resource
dynamodb = boto3.resource('dynamodb')
# TODO: Create the 'Users' table with Provisioned Throughput and a primary key of 'username'
users = dynamodb.create_table(
    TableName='Users',
    KeySchema=[
        {
            'AttributeName': 'username',
            'KeyType': 'HASH'  # Primary key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'username',
            'AttributeType': 'S'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 5,
        'WriteCapacityUnits': 5
    }
)
# TODO: Use `wait_until_exists()` for the 'Users' table
users.wait_until_exists()
# TODO: Create the 'Customers' table with On-Demand capacity and a primary key of 'customer_id'
dynamodb.create_table(
    TableName='Customers',
    KeySchema=[
        {
            'AttributeName': 'customer_id',
            'KeyType': 'HASH'  # Primary key
        },
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'customer_id',
            'AttributeType': 'S'
        },
    ],
    BillingMode='PAY_PER_REQUEST'  # On-Demand billing mode
)
# TODO: Configure a custom waiter for the 'Customers' table which polls every 2 seconds and makes 10 attempts
waiter = dynamodb.meta.client.get_waiter('table_exists')
waiter.wait(TableName='Customers', WaiterConfig={'Delay': 2, 'MaxAttempts': 10})
# TODO: List all the existing tables in DynamoDB
for table in dynamodb.tables.all():
    print(table.name)