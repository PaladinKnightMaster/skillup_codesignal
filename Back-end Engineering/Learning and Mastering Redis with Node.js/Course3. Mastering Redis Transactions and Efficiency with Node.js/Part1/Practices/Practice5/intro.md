# Batching Commands with Redis Pipelines

Great progress! Now, let's put everything you've learned into practice.

Write a Redis pipeline script from scratch. The script should set the initial values for `item` and `quantity`, then batch commands in a pipeline to update these values together. Specifically, you should decrement `quantity` and set `item` to `Laptop`.