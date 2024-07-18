import numpy as np
import matplotlib.pyplot as plt

advertising_costs = np.array([100, 200, 300, 400, 500])
sales = np.array([300, 500, 600, 700, 800])

mean_adv = np.mean(advertising_costs)
mean_sales = np.mean(sales)

m = np.sum((advertising_costs - mean_adv) * (sales - mean_sales)) / np.sum((advertising_costs - mean_adv)**2)
c = mean_sales - m * mean_adv

print(f"Model: Sales = {c:.2f} + {m:.2f}*Advertising_Costs")

plt.scatter(advertising_costs, sales, color = 'blue')
plt.plot(advertising_costs, c + m * advertising_costs, color = 'red')
plt.xlabel('Advertising Costs')
plt.ylabel('Sales')
plt.title('Advertising Costs vs Sales')
plt.show()