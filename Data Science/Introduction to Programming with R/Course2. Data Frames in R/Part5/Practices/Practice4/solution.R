# # Create a data frame
# df <- data.frame(
#   ID = 1:10,
#   Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
#   Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
#   Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000),
#   Position = c("Manager", "Developer", "Manager", "Analyst", "Developer", "Manager", "Developer", "Manager", "Analyst", "Developer")
# )

# # TODO: Add an AgeGroup column
# df$AgeGroup <- cut(_______________, breaks=c(20, 30, 40, 50), right=FALSE)

# # TODO: Aggregate data: calculate average salary by age group
# avg_salary_by_age_group <- aggregate(_______________ ~ AgeGroup, data=df, FUN=mean)
# print(avg_salary_by_age_group)

# # TODO: Aggregate data: calculate total salary by age group
# total_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=_______________)
# print(total_salary_by_age_group)


# Create a data frame
df <- data.frame(
  ID = 1:10,
  Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
  Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
  Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000),
  Position = c("Manager", "Developer", "Manager", "Analyst", "Developer", "Manager", "Developer", "Manager", "Analyst", "Developer")
)

# TODO: Add an AgeGroup column
df$AgeGroup <- cut(df$Age, breaks=c(20, 30, 40, 50), right=FALSE)

# TODO: Aggregate data: calculate average salary by age group
avg_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=mean)
print(avg_salary_by_age_group)

# TODO: Aggregate data: calculate total salary by age group
total_salary_by_age_group <- aggregate(Salary ~ AgeGroup, data=df, FUN=sum)
print(total_salary_by_age_group)