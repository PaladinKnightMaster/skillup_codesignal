# Understanding Nested Hashes

## More Practice with Hashes
Welcome back! You've already familiarized yourself with hashes and their operations. Now, let's apply that knowledge further as we do more practice with hashes in Ruby. Hashes provide another level of organization by allowing us to associate keys with values, which is often more useful than just a list.

## What You'll Learn
In this lesson, we'll reinforce and expand your understanding of hashes by:

- **Retrieving** nested data from a hash.
- **Adding** new entries to a nested hash.
- **Updating** existing entries within a nested hash.
- **Deleting** elements from a nested hash.

We'll use the context of a travel application that manages details about airports. Ready to see some examples?

Here's how you can define a hash with nested data:

```Ruby
airport_codes = {
    "JFK" => {"city" => "New York", "country" => "USA"},
    "LAX" => {"city" => "Los Angeles", "country" => "USA"},
    "LHR" => {"city" => "London", "country" => "UK"},
    "HND" => {"city" => "Tokyo", "country" => "Japan"}
}
```

Notice how each airport code is associated with a nested hash containing the city and country. This structure allows you to store and access detailed information about each airport efficiently. In other words the nested hash is a value for the key in the main hash.

Imagine you need to retrieve the city and country for London Heathrow Airport (`LHR`):

```Ruby
puts "#{airport_codes["LHR"]["city"]}, #{airport_codes["LHR"]["country"]}"
```

Running this code will display `London, UK`.

## Why It Matters
Nested hashes are a powerful tool for organizing and managing complex data. They allow you to store related information together, making it easier to access and manipulate. This is especially useful when working with large datasets or when you need to represent hierarchical relationships.

They allow you to do complex operations like:

- Add new entries easily to keep your data up-to-date:

```Ruby
airport_codes["BOM"] = {"city" => "Mumbai", "country" => "India", "rating" => "5.0"}
```

- Update existing entries seamlessly to reflect changes accurately:

```Ruby
airport_codes["LAX"]["country"] = "United States"
```

- Delete obsolete or incorrect entries without a hitch:

```Ruby
airport_codes.delete("HND")
```

By mastering these operations, you can handle complex data structures effortlessly and keep your datasets accurate and flexible. This is crucial for many real-world applications, from web development to data analysis.

Excited to deepen your skills? Let's jump into the practice section and start experimenting together!
