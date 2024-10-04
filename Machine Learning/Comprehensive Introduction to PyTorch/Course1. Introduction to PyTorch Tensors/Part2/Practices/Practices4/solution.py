# import torch

# # Creating three tensors
# heroes = torch.tensor([[2, 3], [4, 5]], dtype=torch.int32) # 2x2 tensor
# villains = torch.tensor([[7, 8], [9, 10]], dtype=torch.int32) # 2x2 tensor
# sidekicks = torch.tensor([[2], [3]], dtype=torch.int32) # 2x1 tensor

# # Addition
# combined_power = torch.add(heroes, villains)
# print(f"Combined Power:\n{combined_power}\n")

# # Element-wise Multiplication
# power_product = torch.mul(heroes, villains)
# print(f"Power Product:\n{power_product}\n")

# # Matrix Multiplication
# team_effectiveness = torch.matmul(heroes, sidekicks)
# print(f"Team Effectiveness:\n{team_effectiveness}\n")

# # TODO: Add code for broadcasted addition (tensor + scalar)
# # TODO: Add code for broadcasted addition between tensors of different shapes (heroes + sidekicks)
# # TODO: Add code for broadcasted multiplication between tensors of different shapes (heroes * sidekicks)

import torch

# Creating three tensors
heroes = torch.tensor([[2, 3], [4, 5]], dtype=torch.int32) # 2x2 tensor
villains = torch.tensor([[7, 8], [9, 10]], dtype=torch.int32) # 2x2 tensor
sidekicks = torch.tensor([[2], [3]], dtype=torch.int32) # 2x1 tensor

# Addition
combined_power = torch.add(heroes, villains)
print(f"Combined Power:\n{combined_power}\n")

# Element-wise Multiplication
power_product = torch.mul(heroes, villains)
print(f"Power Product:\n{power_product}\n")

# Matrix Multiplication
team_effectiveness = torch.matmul(heroes, sidekicks)
print(f"Team Effectiveness:\n{team_effectiveness}\n")

# TODO: Add code for broadcasted addition (tensor + scalar)
tensor_add_scalar = heroes + 5
print(f"Broadcasted Addition (Adding scalar value):\n{tensor_add_scalar}\n")
# TODO: Add code for broadcasted addition between tensors of different shapes (heroes + sidekicks)
broadcasted_sum = heroes + sidekicks
print(f"Broadcasted Addition: \n{broadcasted_sum}\n")
# TODO: Add code for broadcasted multiplication between tensors of different shapes (heroes * sidekicks)
broadcasted_mul = heroes * sidekicks
print(f"Broadcasted Multiplication: \n{broadcasted_mul}\n")