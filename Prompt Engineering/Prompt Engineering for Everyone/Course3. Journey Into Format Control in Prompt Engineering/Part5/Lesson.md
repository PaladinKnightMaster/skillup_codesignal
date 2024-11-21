# Executable Code Mastery: Ensuring LLMs Yield Only Runnable Outputs

## Introduction
Welcome to the last lesson of this course! This lesson focuses on honing a vital skill set: constructing prompts that get LLMs to generate not just any code, but executable code. As we traverse this lesson, let us always remember: the art of prompt engineering for runnable code doesn't hinge on complexity but clarity and precision.

## Understanding Runnable Code
Within the context of LLMs, runnable code signifies the code that can undergo execution as it stands without any need for modifications or corrections. It is immediate, actionable, and most significantly, correct. Attaining runnable code from an LLM necessitates a profound understanding of both the language in which you're soliciting the code and the environment intended for its execution.

```Markdown
__ASK__
Generate a Python function that adds two numbers.

__CONSTRAINTS__
- Use Python 3 syntax.
- Ensure the code can be run without any modifications.
```

This prompt will return the function we want but more likely than not it will also include an intro or an outro about the code being written. This means that if we want to feed this output into a compiler that could run the code we'd run into problems.

## Refining The Prompt
Let's see how we can refine the prompt above to just give us the code and nothing else.

```Markdown
__ASK__
Generate a Python function that adds two numbers.

__CONSTRAINTS__
- Use Python 3 syntax.
- Ensure the code can be run without any modifications.
- Do not include an introduction or a conclusion, just give me the code.
```

Sample output:

```Python
def add_numbers(a, b):
    return a + b
```

With the addition of the new constraint, the LLM understands that you want just the runnable code. You'll likely still get it formatted into markdown backticks so if you want to skip those too consider including an example.

## Conclusion
In conclusion, to obtain runnable code directly from LLMs, precision and clarity in your prompt are paramount. By explicitly specifying not only the requirements of the code but also the need for brevity and exclusion of any non-code elements, you guide the LLM towards producing clean, executable code. Time to practice these hands on.
