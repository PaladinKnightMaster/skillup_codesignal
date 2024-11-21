# Updating Player XP with Redis Lua Script

Your task is to write a Lua script that updates the total experience points (XP) of a player. If the player's XP already exists in the Redis store, increment it by a specified value. If it doesn't exist, set it to the specified value.