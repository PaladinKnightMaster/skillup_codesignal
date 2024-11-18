# Completing a Lua Script to Update Player Scores in Redis Using JavaScript

Great work so far! Let's continue by completing a Lua script in JavaScript that updates the scores of two players in a Redis database. The script should take two `keys` and two `arguments`, incrementing each player's score by the respective argument.

If a player's score does not exist, the script should initialize it with the respective argument.

Note: For simplicity, let's assume that if at least one of the scores is missing, both scores should be initialized.