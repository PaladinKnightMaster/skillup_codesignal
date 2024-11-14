# Concurrent Key Updates with Redis Transactions

This script simulates a scenario where two functions update the same key concurrently: one function using transactions and the `watch` command, and another function running in a separate interval making simple updates.

By running this code, you will observe how `watch` helps prevent conflicting updates and ensures data integrity in the presence of concurrent modifications.

Pay careful attention to how the `watch` and `unwatch` commands interact, and how they prevent the transaction from executing when the watched key changes.