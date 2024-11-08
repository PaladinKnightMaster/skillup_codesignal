# Calculating Distance Between Two Cities Using Redis Geospatial Indexes

Great job on learning the basics of geospatial indexing in Redis! Now, let's put that knowledge into practice.

Geospatial indexes allow you to store and query geographic locations efficiently. The two main commands you'll use are:

* `geoAdd`: Adds geospatial items with longitude, latitude, and a name.
* `geoDist`: Calculates the distance between two items in the sorted set.

In this exercise, you'll run the provided code to:

1. Connect to Redis.
2. Use `geoAdd` to add two cities (Palermo and Catania) with their coordinates.
3. Calculate the distance between these cities using `geoDist`.

Simply run the code to see everything in action.