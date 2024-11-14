# Enhancing Transaction Control with Redis Unwatch

Your task is to complete the code that updates the stock of an item and prevents the stock from going negative.

When the stock update is invalid (i.e., it would lead to a negative stock), then use the `unwatch` command to cancel the transaction and break the loop.