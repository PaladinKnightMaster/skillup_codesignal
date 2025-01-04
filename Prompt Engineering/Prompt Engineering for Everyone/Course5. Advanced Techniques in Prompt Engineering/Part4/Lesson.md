# Chain of Thought in Prompt Engineering

## Introduction
Welcome to the next stage of our journey into **Advanced Techniques in Prompt Engineering**. We will focus on the Chain-of-Thought method. This approach not only enhances the model's output but also aids in attaining precise answers by guiding the model through a logical sequence of reasoning.

## Understanding Chain of Thought
The Chain of Thought method is a compelling technique that encourages the model to "think aloud" as it reaches an answer. This technique is particularly useful when dealing with complex problems that can benefit from step-by-step reasoning. Unlike most humans who by adulthood know that the best way to think through a complex problem is to think step-by-step, LLMs don't have this instinctive understanding. Explicitly prompting the model to detail its thought process is proven to lead to more accurate and helpful responses.

## The Significance in Prompt Design
Designing prompts that leverage the Chain of Thought method requires clarity in the query and precision in the expectations. The goal is to guide the model away from merely guessing or jumping to conclusions and towards methodically working through the problem. This strategy not only aids in achieving more reliable outputs but also enables users (and developers) to understand the rationale behind the model's answers.

## Example without Chain of Thought
One task that LLMs are notoriously bad at is mathematical computations. Let's see an example:

```Markdown
__ASK__

What's 197*971
```

While after running this many times you might get the right answer, more often than not the LLM will make a mistake and respond with numbers like `191,087`, `191,987`, etc, none of which are correct.

## Applying Chain of Thought
Now let's see what happens when we change it to apply Chain-of-Thought. The most standard way to apply this method is to add a requirement to `think step-by-step`. Other acceptable options include

* begin by carefully analyzing the problem
* show your work before responding
* etc

```Markdown
__ASK__

what's 197*971

__REQUIREMENTS__
- Think step-by-step
```

Sample output:

```
Step 1: Multiply 7 (units place of 197) by 971
       7 * 971 = 6797
Step 2: Multiply 9 (tens place of 197) by 971 and add a zero at the end
       9 * 971 = 8739 => 87390
Step 3: Multiply 1 (hundreds place of 197) by 971 and add two zeroes at the end
       1 * 971 = 971 => 97100
Step 4: Add all the results from steps 1, 2, and 3
       6797 + 87390 + 97100 = 191287

Therefore, 197 * 971 = 191,287
```

And that response is spot on.

## One Step Further
When it comes to Chain-of-Thought, the more you can help guide the thought process of the LLM in the right direction, the more likely you are to get a high-quality and accurate response. For example, the way we can improve mathematical calculations is to hint that using relevant round numbers could help with computations, like this:

```Markdown
__ASK__

what's 197*971

__REQUIREMENTS__
- Think Step by Step
- Identify more round numbers that can be combined to compute this.
```

Sample Output:

```
To calculate 197*971, we can break it down into simpler calculations by identifying round numbers that can be combined.

Let's break down 197 and 971 into multiples of 100 and the remaining numbers:

197 = 100 + 97
971 = 900 + 71

Now, we can multiply these in parts:

(100 + 97) * (900 + 71)
= 100 * 900 + 100 * 71 + 97 * 900 + 97 * 71

Calculating the individual products:

100 * 900 = 90,000
100 * 71 = 7,100
97 * 900 = 87,300
97 * 71 = 6,887

Now we add these results up:

90,000 + 7,100 + 87,300 + 6,887 = 191,287

Therefore, 197*971 is equal to 191,287.
```

## Time to Practice
Having learned how to structure your prompts to efficiently utilize the Chain of Thought method, it's now your turn to experiment with this approach. Remember, the goal is to encourage the model to think through problems, step by step, and conclude with concise and accurate answers. Let's begin the practice!
