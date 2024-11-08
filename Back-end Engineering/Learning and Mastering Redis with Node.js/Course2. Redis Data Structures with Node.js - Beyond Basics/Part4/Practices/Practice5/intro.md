# Geospatial Indexing in Redis with JavaScript

Let's now write the entire geospatial indexing code from scratch to reinforce what you've learned.

Your task is to:

1. Connect to Redis.
2. Use `geoAdd` to add two cities with their coordinates.
3. Calculate the distance between these cities using `geoDist` and print the result.

Add the following cities:

* New York (Longitude: `-74.0060`, Latitude: `40.7128`)
* Los Angeles (Longitude: `-118.2437`, Latitude: `34.0522`)

Calculate the distance between New York and Los Angeles in miles and print the result.