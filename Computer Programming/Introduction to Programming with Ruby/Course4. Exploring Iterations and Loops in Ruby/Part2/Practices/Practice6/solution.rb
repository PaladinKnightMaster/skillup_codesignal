# movie_list = ["The Godfather", "Titanic", "Inception", "Avatar", "The Dark Knight"]

# max_movies = 3

# processed_movies = 0

# # TODO: Iterate through the movie list with the each method
#     # TODO: Check if the number of processed movies has reached the maximum
#         # TODO: If the maximum number of movies has been processed, print a message "Processed maximum movies. Exiting loop." and exit the loop

#     # TODO: Increment the number of processed movies

#     # TODO: Skip the genre check for the movie "Avatar" printing message "Found Avatar. Watching these in 3D: skipping Genre check."

#     # TODO: Print a message for genre checking the movie



movie_list = ["The Godfather", "Titanic", "Inception", "Avatar", "The Dark Knight"]

max_movies = 3

processed_movies = 0

# TODO: Iterate through the movie list with the each method
movie_list.each do |movie|
    # TODO: Check if the number of processed movies has reached the maximum
    if processed_movies == max_movies
        # TODO: If the maximum number of movies has been processed, print a message "Processed maximum movies. Exiting loop." and exit the loop
        puts "Processed maximum movies. Exiting loop."
        break
    end

    # TODO: Increment the number of processed movies
    processed_movies += 1

    # TODO: Skip the genre check for the movie "Avatar" printing message "Found Avatar. Watching these in 3D: skipping Genre check."
    if movie == "Avatar"
        puts "Found Avatar. Watching these in 3D: skipping Genre check."
        next
    end

    # TODO: Print a message for genre checking the movie
    puts "Checking Genre: #{movie}"
end