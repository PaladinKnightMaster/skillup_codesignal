# # Create a data frame
# df <- data.frame(
#   ID = 1:10,
#   Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
#   Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
#   Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000)
# )

# # Add an AgeGroup column
# df$AgeGroup <- cut(df$Age, breaks=c(20, 30, 50), right=FALSE)

# # Aggregate data: calculate average salary by age group
# avg_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=median)
# print(avg_salary_by_age_group)

# # Aggregate data: calculate total salary by age group
# total_salary_by_age_group <- aggregate(Salary ~ Age, data=df, FUN=sum)
# print(total_salary_by_age_group)


# Create a data frame
df <- data.frame(
  ID = 1:10,
  Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
  Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
  Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000)
)

# Add an AgeGroup column
df$AgeGroup <- cut(df$Age, breaks=c(20, 30, 40, 50), right=FALSE)

# Aggregate data: calculate average salary by age group
avg_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=mean)
print(avg_salary_by_age_group)

# Aggregate data: calculate total salary by age group
total_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=sum)
print(total_salary_by_age_group)