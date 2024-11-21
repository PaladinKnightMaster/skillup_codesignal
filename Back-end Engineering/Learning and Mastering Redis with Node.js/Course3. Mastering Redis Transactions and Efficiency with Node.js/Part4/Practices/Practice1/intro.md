# Running a Lua Script in Redis with Node.js

You have learned about Lua scripting in Redis. Now let's run the code you saw in the lesson. Pay close attention to the output, as it will enhance your understanding.

In this code:

* `luaScript` is a Lua script that:
    * Fetches the current value of the key `KEYS[1]`.
    * If the key exists, it converts the value to a number and adds `ARGV[1]` to it, then sets the new value back to the key.
    * If the key doesn't exist, it sets the key to `ARGV[1]`.

The JavaScript code executes this Lua script using the Redis client, where `client.evalSha` runs the script by its SHA1 hash, provides the keys it operates on, and the arguments.

Let's run the code to see how Redis Lua scripting works.