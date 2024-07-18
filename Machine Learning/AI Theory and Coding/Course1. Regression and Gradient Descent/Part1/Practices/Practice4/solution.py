# import numpy as np
# import matplotlib.pyplot as plt

# # Assume we have this data: hours of advertisement vs weekly sales
# ad_hours = np.array([10, 20, 30, 40, 50])
# weekly_sales = np.array([200, 420, 650, 800, 950])

# # Using the formulas to calculate the slope (m) and y-intercept (c)
# m = np.sum((ad_hours - np.mean(ad_hours)) * (weekly_sales - np.mean(weekly_sales))) / np.sum((ad_hours - np.mean(ad_hours))**2)
# c = np.sum(weekly_sales) - m * np.sum(ad_hours)

# print(f"Sales = {c:.2f} + {m:.2f}*Ad_Hours")

# # Plotting data and line
# plt.scatter(ad_hours, weekly_sales, color='blue')  # Scatter plot of actual data
# plt.plot(ad_hours, c + m * ad_hours, 'r')  # Line plot of the regression line
# plt.xlabel("Ad Hours")
# plt.ylabel("Weekly Sales")
# plt.title("Hours of advertisement vs. Weekly Sales")
# plt.show()

import numpy as np
import matplotlib.pyplot as plt

# Assume we have this data: hours of advertisement vs weekly sales
ad_hours = np.array([10, 20, 30, 40, 50])
weekly_sales = np.array([200, 420, 650, 800, 950])

# Using the formulas to calculate the slope (m) and y-intercept (c)
m = np.sum((ad_hours - np.mean(ad_hours)) * (weekly_sales - np.mean(weekly_sales))) / np.sum((ad_hours - np.mean(ad_hours))**2)
c = np.mean(weekly_sales) - m * np.mean(ad_hours)

print(f"Sales = {c:.2f} + {m:.2f}*Ad_Hours")

# Plotting data and line
plt.scatter(ad_hours, weekly_sales, color='blue')  # Scatter plot of actual data
plt.plot(ad_hours, c + m * ad_hours, 'r')  # Line plot of the regression line
plt.xlabel("Ad Hours")
plt.ylabel("Weekly Sales")
plt.title("Hours of advertisement vs. Weekly Sales")
plt.show()