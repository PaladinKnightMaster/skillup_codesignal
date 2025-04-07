# Fix Mutate and Relocate Functions

You've done great so far! Now, let's improve your debugging skills.

You are given some R code using the `dplyr` package to mutate and relocate columns in a dataframe. Unfortunately, the code contains one or two bugs that prevent it from working correctly. Your task is to find and fix these bugs.

Take a close look at the code. The objective is to add the new columns `Tax` and `TotalEarnings`, where `TotalEarnings` is calculated by subtracting `Tax` from `Salary`, then relocate `TotalEarnings` immediately before the `Age` column.