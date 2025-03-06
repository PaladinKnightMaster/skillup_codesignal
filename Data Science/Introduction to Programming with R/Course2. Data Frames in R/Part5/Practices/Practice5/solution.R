# TODO: Create a data frame with the following columns: ID, Name, Age, and Grade
# The data frame should look as follows:
# ID: 1, 2, 3, 4, 5
# Name: "Harry", "Hermione", "Ron", "Ginny", "Neville"
# Age: 17, 18, 17, 16, 17
# Grade: 85, 95, 80, 88, 90

# TODO: Add an AgeGroup column using the cut() function
# Breaks should be c(16, 17, 18, 19)

# TODO: Use aggregate() to calculate average grade by AgeGroup and print the result

# TODO: Use aggregate() to calculate the total grade by AgeGroup and print the result

# TODO: Use aggregate() to calculate the count of students by AgeGroup and print the result




# TODO: Create a data frame with the following columns: ID, Name, Age, and Grade
# The data frame should look as follows:
# ID: 1, 2, 3, 4, 5
# Name: "Harry", "Hermione", "Ron", "Ginny", "Neville"
# Age: 17, 18, 17, 16, 17
# Grade: 85, 95, 80, 88, 90
df <- data.frame(
  ID = 1:5,
  Name = c("Harry", "Hermione", "Ron", "Ginny", "Neville"),
  Age = c(17, 18, 17, 16, 17),
  Grade = c(85, 95, 80, 88, 90)
)

# TODO: Add an AgeGroup column using the cut() function
# Breaks should be c(16, 17, 18, 19)
df$AgeGroup <- cut(df$Age, breaks=c(16, 17, 18, 19))

# TODO: Use aggregate() to calculate average grade by AgeGroup and print the result
avg_grade_by_age_group <- aggregate(Grade ~ AgeGroup, data=df, FUN=mean)
print(avg_grade_by_age_group)

# TODO: Use aggregate() to calculate the total grade by AgeGroup and print the result
total_grade_by_age_group <- aggregate(Grade ~ AgeGroup, data=df, FUN=sum)
print(total_grade_by_age_group)

# TODO: Use aggregate() to calculate the count of students by AgeGroup and print the result
count_by_age_group <- aggregate(ID ~ AgeGroup, data=df, FUN=length)
print(count_by_age_group)