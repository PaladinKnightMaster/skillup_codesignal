# Creating Data in DynamoDB: Inserting Items with PutItem and BatchWriteItem Operations

## Introduction to DynamoDB Data Manipulation

Welcome back! In our previous discussions, we've explored the essentials of setting up DynamoDB tables and the key concepts behind AWS's NoSQL database service. Today, we dive into the practical aspects of DynamoDB by learning how to add data to our tables. We'll focus on using the `PutItem` and `BatchWriteItem` operations to insert single and multiple items, respectively.

Our practical examples will utilize a `Students` table, structured with the following attributes: `student_id` (serving as the primary key), `name`, `age`, and `major`. Here's a quick glance at the existing data setup:

| student_id (PK) | name  | age | major            |
|-----------------|-------|-----|------------------|
| 1               | Alice | 20  | Computer Science |
| 2               | Bob   | 22  | Mathematics      |

This session aims to expand this table by adding more student records, allowing us to apply our learning in a hands-on manner. Let's get started by adding new entries and examining how DynamoDB handles these data manipulation tasks.

## Creating an Item in DynamoDB with "PutItem" Operation
Let's start by adding a new student, John, who is studying Physics, to our `Students` table. To do this, we'll use the `PutItem` operation, which is designed for creating a single item within your DynamoDB table. Here's how you can add John's details:

```Python
table.put_item(
    Item={
        'student_id': 3,
        'name': 'John',
        'age': 21,
        'major': 'Physics'
    }
)
```
In this example, the `put_item` method on the `table` object is used to insert a new record. The `Item` parameter is a dictionary that specifies the attributes of the student—each key in the dictionary corresponds to an attribute in our DynamoDB table.

This operation is straightforward and effective for adding individual records, making it ideal for situations where you need to insert data sporadically or one item at a time. However, it's important to be aware of a few considerations:

* **Item Size Limits**: Each item, including all its attributes, cannot exceed 400 KB.
* **Consistency**: By default, `PutItem` operations ensure eventual consistency. You can opt for strongly consistent reads if your application requires it, albeit at double the read cost.
* **Throughput Consumption**: Each `PutItem` request consumes write capacity units based on the item size. In provisioned capacity mode, managing this carefully is necessary to avoid throttling.

## Adding Multiple Items to DynamoDB with "BatchWriteItem" Operation
Now, imagine having several students to add at once. Using `PutItem` for each could be time-consuming. Instead, DynamoDB offers `BatchWriteItem`, allowing you to add multiple students simultaneously in an efficient manner.

Here is how we can use `BatchWriteItem` to add multiple students:

```Python
with table.batch_writer() as batch:
    batch.put_item(Item={'student_id': 4, 'name': 'Emma', 'age': 23, 'major': 'Biology'})
    batch.put_item(Item={'student_id': 5, 'name': 'Liam', 'age': 22, 'major': 'Chemistry'})
```

In this example, we create a batch writer using the `batch_writer()` method. Inside it, we use `put_item()` as before. While `BatchWriteItem` is highly efficient for handling multiple entries, there are some limitations to consider:

* **Maximum Items**: Each batch can include up to 25 items.
* **Maximum Size**: The total request size for a batch cannot exceed 16 MB.
* **Atomicity**: The operations within a batch are not atomic, meaning some items might be written successfully while others could fail.
* **Error Handling**: If any item in the batch fails, manual retries and error checking are necessary as DynamoDB does not automatically retry failed operations.
Understanding these limitations is crucial for effectively using `BatchWriteItem` and ensuring data consistency and handling potential errors properly.

## Using Conditional Expressions in DynamoDB
Conditional expressions in DynamoDB allow you to specify conditions that must be met for an operation to execute, enhancing data integrity and operational control. These are particularly useful with the `PutItem` operation to ensure conditions are met before inserting or updating data. Conditional expressions can prevent unnecessary writes and enforce business rules at the data layer.

For example, when adding a student to the `Students` table, you might want to ensure that a student with the same ID does not already exist to prevent unintentional overwriting. DynamoDB's default behavior for the `PutItem` operation is to replace an existing item if the primary key matches. Here’s how you can use a conditional expression to prevent overwriting an existing item:

```Python
try:
    # Add a new student only if the student_id does not exist
    response = table.put_item(
        Item={
            'student_id': 3,
            'name': 'John',
            'age': 21,
            'major': 'Physics'
        },
        ConditionExpression='attribute_not_exists(student_id)'
    )
    print("Item added successfully:", response)
except dynamodb.meta.client.exceptions.ConditionalCheckFailedException:
    print("Item already exists.")
```

In this example, the `put_item` method includes a `ConditionExpression` that checks if the `student_id` attribute does not exist in the table. If the condition is met, the new item is added; otherwise, the operation fails, and a `ConditionalCheckFailedException` is raised. This mechanism ensures that an existing student record is not unintentionally overwritten.

## Handling Exceptions for DynamoDB's "PutItem" Operation
When performing write operations in DynamoDB using the `PutItem` method, it's important to manage exceptions effectively, particularly when dealing with issues related to provisioned throughput limits. Here’s how to handle these specific exceptions in Python using Boto3:

```Python
try:
    # Add a new item
    response = table.put_item(
        Item={
            'student_id': 3,
            'name': 'John',
            'age': 21,
            'major': 'Physics'
        }
    )
    print("Item added:", response)
except ClientError as e:
    if e.response['Error']['Code'] == 'ProvisionedThroughputExceededException':
        print("Throughput limit exceeded. Please try again later.")
    else:
        raise Exception("Failed to add item due to:", e.response['Error']['Message'])
```

This script uses a `try-except` block to capture `ClientError`. If the exception is related to exceeding the provisioned throughput (e.g., too many writes too quickly), a specific message is displayed advising to retry later. For other exceptions, a general error is raised, providing clarity on the issue encountered. This approach ensures that your application handles DynamoDB interactions gracefully, maintaining stability even when operational limits are reached.

## Short Introduction to "Scan" Operation
Before we wrap up this lesson, let's review how we might view all the data in our table. In upcoming sessions, we will discuss the `Scan` operation, which enables us to read all the items in a DynamoDB table. Here's a sneak peek at it:

```Python
response = table.scan()

for item in response['Items']:
    print(item)
```

This piece of code will print out all items in the table. We won't delve into `Scan` details in this lesson, but we'll use it in our examples to check the data in our table.

## Summary and Upcoming Topics
Great work on making it this far! In this lesson, you learned to create items in a DynamoDB table using both `PutItem` and `BatchWriteItem`. Also, we've added data to our `Students` table and used the `Scan` operation to view them.

Now, why not try creating some items on your own in the CodeSignal IDE? Upcoming practice exercises will ask you to create items, which will help solidify what we've covered in this lesson.

Our next topics will involve other operations to manage our table: specifically retrieving, updating, and deleting data. We'll continue working with our `Students` table and the Boto3 library in Python.

Keep practicing, and see you in the next lesson!
