# Mastering Single-Word Responses From LLMs

## Introduction
In this lesson, we're turning our attention to a specific technique of getting single-word output from LLMs. We'll use the example of designing an AI tutor that provides verdicts on code correctness. Our goal is to refine our prompts so that this AI tutor can succinctly report whether a piece of code is correct with a single word: "True" for correct and "False" for incorrect.

Getting a single-word output, in this case, is important cause you can parse it out to use in the rest of your AI tutor development work.

## The Challenge of Obtaining Binary Verdicts
When we task LLMs with evaluating code, the natural inclination of these models is to provide detailed feedback, explanations, or even corrected versions of the code. However, for an AI tutor scenario, we need it to distill its evaluation into a binary choice—correct or incorrect. Mastering this prompt design challenges us to direct the LLM's focus away from its propensity for elaboration towards a stark, binary output.

Consider a typical, less focused prompt:

```Markdown
__ASK__
Review this piece of code and tell me if it's correct or incorrect

__CONTEXT__

def fibonacci(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

# Example usage
fibonacci(1000)

__CONSTRAINTS__
- Keep your output short.
```

Sample output:

The code correctly implements a function to print the Fibonacci sequence up to, but not including, a given number `n`. It's correct in its functionality.

## Refining Prompts for Binary Code Verdicts
To ensure we receive a "True" or "False" response regarding the correctness of a code snippet, clarity and specificity are key in our prompts. We must explicitly request that the model's output be limited to one of these two options, eliminating the opportunity for additional commentary.

Here's how to adjust our prompt for this purpose:

```Markdown
__ASK__
Review this piece of code and tell me if it's correct or incorrect

__CONTEXT__

def fibonacci(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

# Example usage
fibonacci(1000)

__CONSTRAINTS__
- DO NOT start with an intro or include an outro.
- Respond with just one word: True or False
```

Sample output:

True

You can see that we added two things, an explicit `CONSTRAINTS`: not to include an intro or outro which is very common with LLMs as well as a specification to give a one-word response.

If we wanted to make this prompt even better we could include an example.

## Time to Practice
Now it's time to try building prompts like this on your own to solidify your understanding.
