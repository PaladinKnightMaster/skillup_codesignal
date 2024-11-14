# Enhancing Transaction with Balance Limits

Now, let's enhance the `updateBalance` function by ensuring that transactions will not proceed if they push the balance above a certain limit or below zero.

Change the function so that the balance does not exceed a specified `maxBalance` and does not go below zero. If adding the increment would push the balance above `maxBalance` or below zero, the function should not update the balance and should return without making any changes.