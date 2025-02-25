# TODO: Create a data frame with columns: StudentID, StudentName, Age, and Grades.
# Example data:
# StudentID: 1 to 5
# StudentName: "Anna", "Brian", "Cara", "Daniel", "Ella"
# Age: 20, 23, 21, 22, 24
# Grades: 85, 92, 88, 75, 95

# TODO: Calculate the mean age of students.
# Print the result.

# TODO: Calculate the maximum and minimum grades.
# Print the results.

# TODO: Calculate the median grade.
# Print the result.

# TODO: Count the total number of student names.
# Print the result.




# TODO: Create a data frame with columns: StudentID, StudentName, Age, and Grades.
# Example data:
# StudentID: 1 to 5
# StudentName: "Anna", "Brian", "Cara", "Daniel", "Ella"
# Age: 20, 23, 21, 22, 24
# Grades: 85, 92, 88, 75, 95
df <- data.frame(
  StudentID = 1:5,
  StudentName = c("Anna", "Brian", "Cara", "Daniel", "Ella"),
  Age = c(20, 23, 21, 22, 24),
  Grades = c(85, 92, 88, 75, 95)
)

# TODO: Calculate the mean age of students.
# Print the result.
mean_age <- mean(df$Age)
print(mean_age)

# TODO: Calculate the maximum and minimum grades.
# Print the results.
max_grade <- max(df$Grades)
min_grade <- min(df$Grades)
print(max_grade)
print(min_grade)

# TODO: Calculate the median grade.
# Print the result.
median_grade <- median(df$Grades)
print(median_grade)

# TODO: Count the total number of student names.
# Print the result.
num_names <- length(df$StudentName)
print(num_names)