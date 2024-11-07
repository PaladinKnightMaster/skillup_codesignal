# Exploring Bitmaps in Redis Using JavaScript

Great job on understanding the basics of bitmaps!

Let's run the code you saw in the lesson and observe the output to deepen your understanding of this concept.

Here's a brief reminder of the `setBit` and `getBit` commands:

* `setBit(key, offset, value)` sets the bit at the offset in the string stored at `key` to `value` (either 0 or 1).
* `getBit(key, offset)` retrieves the bit value at the `offset` from the string stored at `key`.

We'll set the active status for three users and then fetch the statuses of two of those users.