# Integrating Alien Civilizations' Knowledge: An Exercise in Queuing and Array Manipulation

Alright, Space Voyager, let's imagine you're helping two friendly alien civilizations exchange knowledge. The first civilization queues up facts, while the second civilization queues them in reverse. Your task is to write a function `alternatingEnqueue` to blend this knowledge cohesively.

The function will start with the first fact from the first civilization (the first element of the queue), followed by the last fact from the second civilization (the last element of their queue). With each subsequent step, it will take the next fact from the first civilization and the previously untouched fact from the second one.

This process continues until one civilization has no more facts to share. The function then enqueues the remaining facts from the civilization that still has facts left.