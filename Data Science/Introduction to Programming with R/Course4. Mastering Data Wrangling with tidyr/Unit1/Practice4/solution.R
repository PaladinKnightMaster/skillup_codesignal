# suppressPackageStartupMessages(library(tidyr))
# suppressPackageStartupMessages(library(dplyr))

# grades <- tibble(
#   StudentID = c(1, 2, 3, 4),
#   History = c(82, 90, 88, 85),
#   Geography = c(79, 85, 89, 92)
# )

# # TODO: Use pivot_longer to gather History and Geography columns into long format
# long_grades <- grades %>% pivot_longer(cols = _______:_________, names_to = "Subject", values_to = "Mark")
# print("Data in long format:")
# print(long_grades)

# # TODO: Use pivot_wider to spread the long format data back to wide format based on Subject
# wide_grades <- long_grades %>% pivot_wider(names_from = ___________, values_from = ___________)
# print("Data in wide format:")
# print(wide_grades)

suppressPackageStartupMessages(library(tidyr))
suppressPackageStartupMessages(library(dplyr))

grades <- tibble(
  StudentID = c(1, 2, 3, 4),
  History = c(82, 90, 88, 85),
  Geography = c(79, 85, 89, 92)
)

# TODO: Use pivot_longer to gather History and Geography columns into long format
long_grades <- grades %>% pivot_longer(cols = History:Geography, names_to = "Subject", values_to = "Mark")
print("Data in long format:")
print(long_grades)

# TODO: Use pivot_wider to spread the long format data back to wide format based on Subject
wide_grades <- long_grades %>% pivot_wider(names_from = Subject, values_from = Mark)
print("Data in wide format:")
print(wide_grades)