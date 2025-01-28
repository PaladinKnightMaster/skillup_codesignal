# Manipulating and Accessing Vector Elements

Great job on the lesson! Before running the code let's understand what it does.

First, we'll create a numeric vector using the `c()` function:

```R
numeric_vec <- c(1, 2, 3, 4, 5) # Values should be separated by commas!
```

This defines a vector with numbers from 1 to 5.

Next, we'll create a character vector, again using the `c()` function:

```R
char_vec <- c("one", "two", "three", "four", "five")  # Here as well, values are separated by commas!
```

This defines a vector with the words "one" to "five."

Next, we'll print each of the entire vectors using the `print()` function:

```R
print(numeric_vec) # Prints the entire numeric vector
print(char_vec) # Prints the entire character vector
```

Lastly, we'll access specific elements of these vectors:

```R
print(numeric_vec[1]) # Prints the first element
print(char_vec[2:4]) # Prints elements 2 to 4
```

This prints the first element of `numeric_vec` and elements 2 to 4 of `char_vec`.

Indexing in R starts at 1. Therefore, `numeric_vec[1]` will return the first element, while `char_vec[2:4]` will return the second, third, and fourth elements of the vector.

Pay close attention to the syntax and let's run the code to solidify your understanding of working with vectors in R!