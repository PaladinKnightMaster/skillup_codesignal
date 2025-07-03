# # Load necessary libraries
# suppressPackageStartupMessages(library(tidyr))
# suppressPackageStartupMessages(library(dplyr))

# # Create a sample tibble with columns:
# # StudentID, Math, Science, History
# data <- tibble(
#   StudentID = c(1, 2, 3, 4),
#   Math = c(80, 85, 78, 92),
#   Science = c(75, 88, 82, 95),
#   History = c(70, 89, 90, 85)
# )

# # TODO: Gather the Math, Science, and History scores into long format
# #       with names_to "Subject" and values_to "Score"

# # TODO: Print out the gathered long format data

# # TODO: Spread the long format data back to wide format,
# #       with names_from "Subject" and values_from "Score"

# # TODO: Print out the spread wide format data


# Load necessary libraries
suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(dplyr))

# Create a sample tibble with columns:
# StudentID, Math, Science, History
data <- tibble(
  StudentID = c(1, 2, 3, 4),
  Math = c(80, 85, 78, 92),
  Science = c(75, 88, 82, 95),
  History = c(70, 89, 90, 85)
)

# TODO: Gather the Math, Science, and History scores into long format
#       with names_to "Subject" and values_to "Score"
long_data <- data %>% pivot_longer(cols = Math:History, names_to = "Subject", values_to = "Score")

# TODO: Print out the gathered long format data
print(long_data)

# TODO: Spread the long format data back to wide format,
#       with names_from "Subject" and values_from "Score"
wide_data <- long_data %>% pivot_wider(names_from = Subject, values_from = Score)

# TODO: Print out the spread wide format data
print(wide_data)