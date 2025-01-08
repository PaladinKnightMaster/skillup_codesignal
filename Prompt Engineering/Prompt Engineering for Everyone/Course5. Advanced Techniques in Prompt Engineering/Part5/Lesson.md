# Chain of Thought with Backtracking

## Last Chapter
Welcome to the last chapter of **Advanced Techniques in Prompt Engineering**, titled "*Chain of Thought with Backtracking*". This is another advanced prompt engineering method that enables us to help LLMs find solutions in highly complex situations. Let's start by understanding the core idea behind it.

## Understanding Chain of Thought with Backtracking
The core idea behind "Chain of Thought with Backtracking" is to help the LLM think backward after analyzing the situation instead of being only a one-way train. As you might remember, LLMs are designed to be next-word-prediction machines, and in case problems require a `lookback`, they naturally tend to become less and less effective. Our goal as Prompt Engineers is to help them navigate this challenge by creating specific instructions on how to backtrack after getting to a certain point.

## Simple Example
Let's take a look at a simple example prompt that includes `Chain of Thought` and nothing more.

```Markdown
__ASK__

Find a 10-digit number where the first digit is how many zeros in the number, the second digit is how many 1s in the number etc. until the tenth digit which is how many 9s in the number.

__REQUIREMENTS__
- Let's think Step-by-Step to solve this problem
```

Sample output:

```
Step 1:
The number has 10 digits. Let's assume the number is represented as abcdefghij. Now we need to find the value of each digit from 'a' to 'j' based on the given conditions.

Step 2:
The first digit is how many zeros are in the number. Since there are no zeros in the number, the first digit must be 0.

Step 3:
The second digit is how many ones are in the number. To have one one in the number, the second digit must be 1.

Step 4:
Continuing this pattern, the third digit must be 2, the fourth digit must be 3, and so on until the tenth digit is 9.

Step 5:
Putting all the digits together, the number we are looking for is 0123456789.
```

As you can see the LLM gives it a good attempt but gets the result completely wrong. The reason is that this is the kind of problem where working backward from the end is much easier than the other way around.

## Introducing Backtracking
While progressing linearly through a problem is effective by using the standard Chain Of Thought method, there are instances where you might need to revisit and revise earlier steps. This is where "Backtracking" comes into play. It involves going back after the initial analysis to come up with the final answer. Let's enhance the prompt above to see an example:

```Markdown
__ASK__

Find a 10-digit number where the first digit is how many zeros in the number, the second digit is how many 1s in the number etc. until the tenth digit which is how many 9s in the number.

__REQUIREMENTS__

- Forward Analysis
  - Think step-by-step to analyze the problem - do not suggest an answer.
- Backtracking
   - After the initial step-by-step analysis, work backward from the end to come up with the answer.
```
Notice here a key component `do not suggest an answer` - this is done to avoid biasing the LLM. If the LLM produces an answer while doing the forward analysis (aka Chain of Thought), it will be more likely to stick to that answer even after Backtracking, even though it's likely to be incorrect.

Sample output:

```
1. Let's start by listing out the requirements:
   - The first digit is how many zeros are in the number
   - The second digit is how many ones are in the number
   - Continue this pattern up to the tenth digit, which is how many nines are in the number

2. Think about the possible constraints:
   - The total number of digits is 10
   - Each digit can range from 0 to 9

3. Let's consider the problem in reverse:
   - The tenth digit has to be the number of nines in the number, so we already know it will be 0 since there are no nines in the number yet.
   - The ninth digit will be the number of eights in the number, which is also 0 so that the ninth digit will be 0 as well.
   - Continue this pattern up to the first digit, which will be the number of zeros in the number.

4. Work backward from the last digit:
   - The tenth digit is 0
   - The ninth digit is 0
   - The eighth digit is 0
   - The seventh digit is 1
   - The sixth digit is 0
   - The fifth digit is 0
   - The fourth digit is 0
   - The third digit is 1
   - The second digit is 2
   - The first digit is 6

Therefore, the 10-digit number that fits the criteria is 6210001000.
```

This time the answer is absolutely correct and you can see the overall depth of the analysis is much stronger.

## Other Considerations
In solving complex problems like the one above and in dealing with complicated scenarios applying one technique like `Chain of Thought with Backtracking` won't be enough. Even in this scenario, if you were to run the prompt above multiple times you'd see that not very advanced LLMs don't always get the right answer.

This is where the combination of advanced techniques comes to the rescue. You might remember the method of Brainstorming that we've learned in this course. Instead of just running the above prompt once and trusting the output, you could run it 5-10 times and then write a consolidator prompt that reviews all the outputs and determines which solution is correct. That will dramatically increase the ability of your prompt to get to the right answer.

## Some Practice and Done
Now that you have learned how to utilize Chain of Thought with Backtracking in prompt engineering, it's time to put your knowledge to the test. So exciting to see you get to the end of this course. We are all proud of what you've accomplished here.

Happy Prompt Engineering!
