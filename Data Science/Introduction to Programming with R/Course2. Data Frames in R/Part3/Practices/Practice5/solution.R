# TODO: Create a data frame containing information about 4 superheroes with their ID, Name, and Age
# The superheroes are: "Wolverine" (Age: 200), "Groot" (Age: 1005), "Thor" (Age: 1500), and "Deadpool" (Age: 35).

# TODO: Filter and display rows for superheroes older than 1000 years

# TODO: Filter and display rows for superheroes younger than 200 years

# TODO: Sort and display the data frame by Age in ascending order

# TODO: Sort and display the data frame by Age in descending order





# TODO: Create a data frame containing information about 4 superheroes with their ID, Name, and Age
# The superheroes are: "Wolverine" (Age: 200), "Groot" (Age: 1005), "Thor" (Age: 1500), and "Deadpool" (Age: 35).
df <- data.frame(
  ID = 1:4,
  Name = c("Wolverine", "Groot", "Thor", "Deadpool"),
  Age = c(200, 1005, 1500, 35)
)

# TODO: Filter and display rows for superheroes older than 1000 years
older_than_1000 <- df[df$Age > 1000, ]
print(older_than_1000)

# TODO: Filter and display rows for superheroes younger than 200 years
younger_than_200 <- df[df$Age < 200, ]
print(younger_than_200)

# TODO: Sort and display the data frame by Age in ascending order
print(df[order(df$Age), ])

# TODO: Sort and display the data frame by Age in descending order
print(df[order(df$Age, decreasing = TRUE), ])