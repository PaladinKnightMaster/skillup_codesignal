<!-- __ASK__
Evaluate the Python code below and provide feedback on its correctness.

Is the following function to calculate the factorial of a number implemented correctly?

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5)) -->


__ASK__
Inspect the provided Python code to determine if it correctly calculates the factorial of a number.

__CONTEXT__
```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
```

__CONSTRAINTS__
- The answer should be either "True" or "False" without any further explanation.
