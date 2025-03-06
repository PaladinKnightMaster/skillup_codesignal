# # Create a data frame
# df <- data.frame(
#   ID = 1:10,
#   Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
#   Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
#   Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000)
# )

# # TODO: Change the age groups to reflect the new breaks [20, 25), [25, 35), and [35, 45)
# df$AgeGroup <- cut(df$Age, breaks=c(20, 30, 40, 50), right=FALSE)

# # Aggregate data: calculate count of people by age group
# count_by_age_group <- aggregate(ID ~ AgeGroup, data=df, FUN=length)
# print(count_by_age_group)


# Create a data frame
df <- data.frame(
  ID = 1:10,
  Name = c("John", "Jane", "Alex", "Emily", "David", "Eva", "Liam", "Noah", "Sophia", "Mason"),
  Age = c(28, 22, 35, 29, 40, 25, 34, 37, 28, 31),
  Salary = c(50000, 60000, 70000, 80000, 90000, 55000, 72000, 78000, 59000, 65000)
)

# TODO: Change the age groups to reflect the new breaks [20, 25), [25, 35), and [35, 45)
df$AgeGroup <- cut(df$Age, breaks=c(20, 25, 35, 45), right=FALSE)

# Aggregate data: calculate count of people by age group
count_by_age_group <- aggregate(ID ~ AgeGroup, data=df, FUN=length)
print(count_by_age_group)