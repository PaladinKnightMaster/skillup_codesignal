# TODO: Create an array 'favorite_books' with books: Harry Potter", "Percy Jackson", "The Hunger Games".

# TODO: Set a variable 'book_to_check' to one of the books in the 'favorite_books' array.

# TODO: Write an if-else statement to check if 'favorite_books' contains 'book_to_check'.
# If it does, print a message acknowledging it as one of your favorite books.
# If not, print a message stating it is not in your list of favorite books.



# TODO: Create an array 'favorite_books' with books: Harry Potter", "Percy Jackson", "The Hunger Games".
favorite_books = ["Harry Potter", "Percy Jackson", "The Hunger Games"]

# TODO: Set a variable 'book_to_check' to one of the books in the 'favorite_books' array.
book_to_check = "Harry Potter"

# TODO: Write an if-else statement to check if 'favorite_books' contains 'book_to_check'.
# If it does, print a message acknowledging it as one of your favorite books.
# If not, print a message stating it is not in your list of favorite books.
if favorite_books.include?(book_to_check)
  puts "#{book_to_check} is one of your favorite books."
else
  puts "#{book_to_check} is not in your list of favorite books."
end