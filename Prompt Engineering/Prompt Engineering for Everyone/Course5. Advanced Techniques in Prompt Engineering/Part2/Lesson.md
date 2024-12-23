# Iterative Prompt Construction: A Step-by-Step Guide

## Introduction
Welcome to the subsequent step in mastering prompt engineering with Large Language Models (LLMs): Iterative Prompt Construction. Through iterative refinement, we can transform our initial, high-level questions into more precise prompts which yield exactly the outputs we need. Let's delve into how we can utilize this technique.

## Understanding Iterative Prompt Construction
The idea behind iterative prompt construction is to start from a simple prompt and use LLM output to enhance your prompt instead of writing the whole prompt from scratch.

In most cases, complex prompts require formatting guidelines, comprehensive examples, detailed requirements and much more. Doing it all from scratch could be a daunting task. This is where starting simple and using your initial outputs to iteratively enhance and improve your prompt becomes handy.

## The Starting Point
Let’s assume we want to build a comprehensive prompt for returning JSON documents from bulleted lists. Creating the full prompt from scratch might take some time but in collaboration with an LLM to build it iteratively we can do it much faster.

```Markdown
__ASK__
Give me a sample bulleted list with two-level nesting.
```

Sample Output:

```
Here's an example of a sample bulleted list with two-level nesting:

- Main Topic 1
  - Subtopic 1.1
  - Subtopic 1.2
    - Detail 1.2.1
    - Detail 1.2.2
- Main Topic 2
  - Subtopic 2.1
  - Subtopic 2.2
    - Detail 2.2.1
    - Detail 2.2.2
      - Specific Detail 2.2.2.1
      - Specific Detail 2.2.2.2
- Main Topic 3
  - Subtopic 3.1
  - Subtopic 3.2
```

In this output, we have an example we could use to improve our initial prompt.

## Refinement Through Iteration
Let's go to the next step of our iteration and ask for the conversion while giving the example:

```Markdown
__ASK__
Given the bulleted list below, convert it into a JSON document

----
- Main Topic 1
  - Subtopic 1.1
  - Subtopic 1.2
    - Detail 1.2.1
    - Detail 1.2.2
- Main Topic 2
  - Subtopic 2.1
  - Subtopic 2.2
    - Detail 2.2.1
    - Detail 2.2.2
      - Specific Detail 2.2.2.1
      - Specific Detail 2.2.2.2
- Main Topic 3
  - Subtopic 3.1
  - Subtopic 3.2
```

Sample Output:

```
Here is the bulleted list converted into a JSON document:

{
  "Main Topic 1": {
    "Subtopic 1.1": [],
    "Subtopic 1.2": [
      "Detail 1.2.1",
      "Detail 1.2.2"
    ]
  },
  "Main Topic 2": {
    "Subtopic 2.1": [],
    "Subtopic 2.2": [
      {
        "Detail 2.2.1": []
      },
      {
        "Detail 2.2.2": [
          "Specific Detail 2.2.2.1",
          "Specific Detail 2.2.2.2"
        ]
      }
    ]
  },
  "Main Topic 3": {
    "Subtopic 3.1": [],
    "Subtopic 3.2": []
  }
}
```

## Honing In On Precision
Even with a refined ask, we might not hit the mark perfectly. The model could return a long-winded reply or perhaps not format the JSON as neatly as we'd like. This is where precise constraints come into play. By explicitly stating our needs — such as requiring a response containing only the JSON and no additional commentary — we further refine the prompt. Also, in case the initial result we got wasn't exactly what we had in mind, we could make some manual tweaks to get it exactly where we need it.

```Markdown
__ASK__
Given a bulleted list, convert it into a JSON document

__CONSTRAINTS__
- Your response should include ONLY the JSON representation
- Ensure the JSON is correctly formatted according to standard conventions
- Closely follow the format and example given below.

__EXAMPLE__

Input:
- Main Topic 1
  - Subtopic 1.1
  - Subtopic 1.2
    - Detail 1.2.1
    - Detail 1.2.2
- Main Topic 2
  - Subtopic 2.1
  - Subtopic 2.2
    - Detail 2.2.1
    - Detail 2.2.2

output:
{
  "Main Topic 1": {
    "Subtopic 1.1": [],
    "Subtopic 1.2": [
      "Detail 1.2.1",
      "Detail 1.2.2"
    ]
  },
  "Main Topic 2": {
    "Subtopic 2.1": [],
    "Subtopic 2.2": [
      "Detail 2.2.1",
      "Detail 2.2.2"
    ]
  }
}
```

Now that's a solid prompt that should work highly consistently. We'll see some examples of running this prompt in the practice section to observe its power.

## Practice Makes Perfect
The journey from an initial, vague request to a highly specific prompt capturing the exact essence of our need lies at the heart of Iterative Prompt Construction. This method enables us to build powerful prompts much faster than doing it all manually. Let's see how well you've grasped this idea in the upcoming practices.
