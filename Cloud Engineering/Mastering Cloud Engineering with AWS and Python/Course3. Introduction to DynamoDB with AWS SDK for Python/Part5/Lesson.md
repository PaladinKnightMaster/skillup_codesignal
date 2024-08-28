# Manipulating Data in DynamoDB: Update and Delete Operations

## Introduction
Welcome to the sixth lesson in our course, '**Introduction to DynamoDB with AWS SDK for Python**'. Up to this point, we've explored how to set up your environment with DynamoDB and Boto3, how to create and configure tables, and how to insert and retrieve data from these tables. Today, we're delving deeper into updating and deleting items from DynamoDB tables using AWS's `Boto3` library in Python. We'll also review how to delete multiple items at once. The ability to modify data is crucial when managing databases, especially when handling large quantities of data in the cloud.

## Updating Items in DynamoDB
In `Boto3`, the `update_item` method allows for modifications to items in a DynamoDB table. This method requires the primary key of the item to be updated and an `UpdateExpression` that defines the changes to be applied—whether setting new values, removing attributes, or modifying lists or set attributes.

Here's an example of updating a post in the 'UserPosts' table where 'John' is the primary key's username and '1' is the post_id:

```Python
table.update_item(
    Key={'username': 'John', 'post_id': 1},
    UpdateExpression='SET content = :val1',
    ExpressionAttributeValues={':val1': 'Updated World!'}
)
```
This operation updates the 'content' of John's post. Note that the full primary key must be specified for updates. Additionally, `update_item` operations consume write capacity units, and careful consideration is required to manage these costs. Aliases and reserved words must be handled carefully in expressions, and it's also possible to specify the consistency of the read after an update if required.

## Deleting Items from DynamoDB
To remove an item, `Boto3` uses the `delete_item` method. This requires the primary key of the item you wish to delete and can optionally include a `ConditionExpression` to specify conditions that must be met for the deletion to occur.

Here's how you would delete a post by John with post_id 2:

```Python
table.delete_item(Key={'username': 'John', 'post_id': 2})
```
This deletion operation also requires the full primary key and consumes write capacity units, similar to update operations. If conditions are specified and not met, the deletion will not proceed, helping prevent unintended data loss.

## Deleting Multiple Items At Once
The `batch_writer` allows for batch operations, including deletions, providing an efficient way to handle multiple deletions at once:

```Python
with table.batch_writer() as batch:
    batch.delete_item(Key={'username': 'John', 'post_id': 1})
    batch.delete_item(Key={'username': 'Anna', 'post_id': 1})
```
This method helps to reduce the number of write operations performed, thus conserving write capacity units.

## Summary and Upcoming Practices
Congratulations on completing this lesson! You've learned how to update and delete items in DynamoDB tables effectively. You've also discovered how to manage multiple deletions simultaneously.

Prepare for upcoming hands-on practice exercises to reinforce these concepts and enhance your skills in DynamoDB operations. Keep up the excellent work and see you in the next lesson for more advanced DynamoDB techniques!
