# Updating Post Likes with Redis Watch

Now that you've learned how to update user balances in Redis using `watch`, let's apply the same concept to another scenario.

In this practice, we're focusing on updating the number of likes a post has received. The `updateLikes` function will ensure that the likes for a given `postId` key are updated only if it has not been modified by another client during the transaction. If it has been modified, the transaction will retry until it succeeds.

Fill in the missing parts of the provided code to implement the `watch` functionality correctly.