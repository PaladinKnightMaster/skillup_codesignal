# Changing Travel Destination Check

Building on what you've learned so far, let's add another layer to our travel eligibility checks.

In the current functional code, we check if the traveler has a passport and then determine eligibility based on the Moon destination.

Update the `if` statement to use the `!=` operator to check if the destination is not `"Mars"` and provide the appropriate messages.

Before you start, let's have a brief overview of the `!=` operator. The `!=` operator is used to check if two values are not equal. If the values are not equal, the condition is true, and the code block under `if` is executed. If the values are equal, the condition is false, and the code block under `else` is executed instead. Here is a simple example:

```Ruby
if 5 != 10
    puts "5 is not equal to 10"
else
    puts "5 is equal to 10"
end
```

We will see the output `5 is not equal to 10` because the condition `5 != 10` is true.