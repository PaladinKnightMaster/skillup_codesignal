# Decrement Available Copies of a Book Using Lua in Redis

Now, let's work on decreasing the available copies of a book when a copy is borrowed.

Complete the given Lua script, ensuring the count does not go below zero.

Before you proceed, let's see how conditional statements work in Lua. Here is an example of an `if` statement in Lua:

```Lua
local x = 10
if x > 5 then
    print("x is greater than 5")
else
    print("x is less than or equal to 5")
end
```