# Brainstorming with Large Language Models

## Introduction
Welcome to the "Brainstorming" lesson, the next step in our journey through the "Advanced Techniques in Prompt Engineering" course. In this lesson, we're going to delve into the intricacies of brainstorming as a method for refining and enhancing our prompts for Large Language Models (LLMs). Our focus won't be merely on generating ideas; we will aim to structure them in a way that enables us to obtain the best possible outcomes from LLMs. This approach is particularly beneficial when dealing with complex tasks or when seeking innovative solutions. Let's explore how we can effectively employ brainstorming techniques in prompt engineering.

## Understanding the Brainstorming Technique
Brainstorming, essentially, is about generating a wide range of ideas to address a specific challenge or question. It's a familiar concept in human problem-solving but can be creatively adapted for working with LLMs. Just as a group of people might exchange ideas in a meeting, we can iteratively refine our prompts with an LLM to explore different angles and approaches to a question or task.

A simple first step in brainstorming with an LLM might look like this:

```Markdown
__ASK__
Generate 5 unique ideas for improving user engagement on a social media platform designed for artists.

__CONTEXT__
- The platform allows for image and video uploads.
- Users are predominantly visual artists.

__CONSTRAINTS__
- List ideas in bullet points.
- Focus on features that could be implemented within a mobile app.
```

## Iterative Prompt Refinement through Brainstorming
While this is a great start, the above prompt is equivalent to asking one person for 5 ideas. As we know, brainstorming happens best when you ask the same question to multiple people. In the case of LLMs, remember that they are next-word-prediction machines, so the ideas generated later would have been biased by ideas generated earlier. So a better way to organize the brainstorm would be to run the following prompt 5 times independently.

```Markdown
__ASK__
Generate 1 unique idea for improving user engagement on a social media platform designed for artists.

__CONTEXT__
- The platform allows for image and video uploads.
- Users are predominantly visual artists.

__CONSTRAINTS__
- Focus on features that could be implemented within a mobile app.
```

## Brainstorm Consolidation
And again, just like with human brainstorming, after idea generation, you need someone to help consolidate the different ideas into one focused outcome. Following the example above, let's say we ask 3 independent LLMs instances to come up with 3 ideas each. Then we'd build a consolidator prompt to help the best idea win. Again, it's important that each of these LLM runs happen independently instead of in one thread to avoid biases from prior conversations.

```Markdown
__ASK__
We've asked several experts to come up with unique ideas for improving engagement on a social media platform designed for artists. Your task is to evaluate these ideas and suggest the best option.

__CONSTRAINTS__
- Do not suggest new ideas from you, pick a winner from the given list or an idea that's a merge of some of the given ones.

__CONTEXT__
- The platform allows for image and video uploads.
- Users are predominantly visual artists.
- Experts were asked to focus on features that could be implemented within a mobile app

__IDEAS__
...
```

## Time to Practice
Now that you are equipped with the technique of brainstorming, it's your turn to tackle challenges using this approach. Start broadly, generate a range of ideas or feedback, and then narrow your focus through successive iterations. This process not only enriches the interaction with the LLM but also enhances the quality of solutions you can derive from it. Let the brainstorming begin!
