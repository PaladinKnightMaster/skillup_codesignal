# TODO: Create a hash with the following key-value pairs:
# Key: "The Great Gatsby" Value: Hash with the following key-value pairs: (author: "F. Scott Fitzgerald", year: 1925)
# Key: "To Kill a Mockingbird" Value: Hash with the following key-value pairs: (author: "Unknown", year: 1960)
# Key: "1984" Value: Hash with the following key-value pairs: (author: "George Orwell", year: 1949)
# Key: "Moby Dick" Value: Hash with the following key-value pairs: (author: "Herman Melville", year: 1851)

# TODO: Retrieve and print the author and year for "The Great Gatsby"

# TODO: Add a new book ("The Hobbit") with nested data including an additional field for rating; use these values (J.R.R. Tolkien, 1937, 5.0)

# TODO: Update the author for "To Kill a Mockingbird" to "Harper Lee"

# TODO: Delete the "Moby Dick" entry

 #TODO: print the modified hash



 # TODO: Create a hash with the following key-value pairs:
# Key: "The Great Gatsby" Value: Hash with the following key-value pairs: (author: "F. Scott Fitzgerald", year: 1925)
# Key: "To Kill a Mockingbird" Value: Hash with the following key-value pairs: (author: "Unknown", year: 1960)
# Key: "1984" Value: Hash with the following key-value pairs: (author: "George Orwell", year: 1949)
# Key: "Moby Dick" Value: Hash with the following key-value pairs: (author: "Herman Melville", year: 1851)

books = {
    "The Great Gatsby" => {"author" => "F. Scott Fitzgerald", "year" => 1925},
    "To Kill a Mockingbird" => {"author" => "Unknown", "year" => 1960},
    "1984" => {"author" => "George Orwell", "year" => 1949},
    "Moby Dick" => {"author" => "Herman Melville", "year" => 1851}
}

# TODO: Retrieve and print the author and year for "The Great Gatsby"
puts "#{books["The Great Gatsby"]["author"]}, #{books["The Great Gatsby"]["year"]}"

# TODO: Add a new book ("The Hobbit") with nested data including an additional field for rating; use these values (J.R.R. Tolkien, 1937, 5.0)
books["The Hobbit"] = {"author" => "J.R.R. Tolkien", "year" => 1937, "rating" => 5.0}

# TODO: Update the author for "To Kill a Mockingbird" to "Harper Lee"
books["To Kill a Mockingbird"]["author"] = "Harper Lee"

# TODO: Delete the "Moby Dick" entry
books.delete("Moby Dick")

 #TODO: print the modified hash
puts books