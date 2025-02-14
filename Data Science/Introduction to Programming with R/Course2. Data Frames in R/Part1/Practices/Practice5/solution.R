# TODO: Create a data frame named 'star_wars_df' with columns 'ID', 'Name', and 'Age'
# Hint: You can use the 1:5 syntax to quickly create a sequence for the 'ID' column

# TODO: Populate the data frame with the following characters and ages:
# - Luke: 19
# - Leia: 19
# - Han: 32
# - Obi-Wan: 57
# - Yoda: 900

# TODO: Display the entire data frame

# TODO: Access and display the 'Name' column

# TODO: Access and display the second row




# TODO: Create a data frame named 'star_wars_df' with columns 'ID', 'Name', and 'Age'
# Hint: You can use the 1:5 syntax to quickly create a sequence for the 'ID' column
star_wars_df <- data.frame(
  ID = 1:5,
  Name = c("Luke", "Leia", "Han", "Obi-Wan", "Yoda"),
  Age = c(19, 19, 32, 57, 900)
)

# TODO: Populate the data frame with the following characters and ages:
# - Luke: 19
# - Leia: 19
# - Han: 32
# - Obi-Wan: 57
# - Yoda: 900
apply(star_wars_df, 1, function(row) {
  cat(row["Name"], ": ", row["Age"], "\n")
})

# TODO: Display the entire data frame
print(star_wars_df)

# TODO: Access and display the 'Name' column
print(star_wars_df$Name)

# TODO: Access and display the second row
print(star_wars_df[2, ])