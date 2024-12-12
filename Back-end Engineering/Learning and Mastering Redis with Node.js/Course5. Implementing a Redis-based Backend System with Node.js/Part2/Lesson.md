# Using Sorted Sets for Leaderboards

## Using Sorted Sets for Leaderboards
Welcome to the next exciting part of our Redis-based backend system project. In this unit, we will focus on building leaderboard functionality using Redis's sorted sets. Building a leaderboard is a popular use case for many applications, such as games and competitive platforms. You've got a good handle on managing user data from previous lessons, so let's build on that foundation.

## What You'll Build
Let's briefly review what we’ll focus on in this unit. Our main tasks will be:

1. **Adding user scores to a leaderboard**: We will store user scores using Redis sorted sets.
2. **Retrieving the leaderboard**: We will fetch and display the top users and their scores.
3. **Getting a user's rank and score**: We will retrieve the ranking and score of a specific user.

Below are some key parts of the code you will be working with to perform these tasks.

```JavaScript
import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

await client.zAdd('leaderboard', [{ score: 100, value: 'user1' }]);
await client.zAdd('leaderboard', [{ score: 200, value: 'user2' }]);
await client.zAdd('leaderboard', [{ score: 150, value: 'user3' }]);

const leaderboard = await client.zRangeWithScores('leaderboard', -2, -1);
console.log(leaderboard); // Output: [ { value: 'user3', score: 150 }, { value: 'user2', score: 200 } ]

const rank = await client.zRevRank('leaderboard', 'user3');
const score = await client.zScore('leaderboard', 'user3');
console.log(rank, score); // Output: 1 150

await client.disconnect();
```

This example demonstrates how to add a score for a user, retrieve the top scores, and fetch a user’s rank and score. You are familiar with the `zAdd` and `zRangeWithScores` commands from previous lessons. These commands are used to add scores and retrieve the leaderboard, respectively.

Now let's understand the `zRevRank` and `zScore` commands. The `zRevRank` command returns the rank of a member in a sorted set, with the highest score being ranked first. The `zScore` command retrieves the score of a member in a sorted set. They both get the set name and the member as parameters.

Now that you have an overview, let's dive into the practice section to start implementing these components. Your hands-on work will strengthen your understanding, setting you up for success in creating robust backend features.