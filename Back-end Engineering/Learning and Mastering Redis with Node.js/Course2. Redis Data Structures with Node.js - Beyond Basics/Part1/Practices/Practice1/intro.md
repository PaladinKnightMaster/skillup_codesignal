# Counting Elements in a Redis Set

Let's learn how to count the number of elements in a set in Redis. To do this, you can use the `sCard` command. Here is an example:

```JavaScript
await client.sCard('set_name');
```

With this, let's modify the code so that instead of printing the set of countries, we print the number of countries in the set.