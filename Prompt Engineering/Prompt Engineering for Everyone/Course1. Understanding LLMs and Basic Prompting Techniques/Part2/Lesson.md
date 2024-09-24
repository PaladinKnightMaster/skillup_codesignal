# Mastering Consistent Formatting and Organization for Effective Prompting

## Introduction
In this lesson, we are going to explore the importance of consistent formatting and organization when crafting prompts for Large Language Models (LLMs). You might wonder how something as seemingly simple as prompt formatting can significantly impact the responses you receive from an AI. Just as in human communication, clarity and structure play crucial roles in ensuring that your requests are understood and accurately fulfilled. Let's dive into how you can apply these principles to make your interactions with LLMs more effective and predictable.

## The Importance of Consistent Formatting
Formatting your prompts consistently is not just about making them look neat; it means making your intentions clear to the AI. Imagine you are giving someone instructions for baking a cake, but instead of listing the steps in order, you jumble them all up. The result? Confusion and, likely, a not very tasty cake. The same principle applies to LLMs. By presenting your prompts in a clear, structured manner, you greatly increase the chances of receiving the desired output.

While there are many approaches to structuring your prompts, in this course, we'll teach you the Markdown Prompts Framework (MPF) developed by Prompt Engineers and AI experts at CodeSignal.

MPF is a very effective approach to creating highly readable, maintainable, and effective prompts and is at the core of many aspects of Cosmo.

## Markdown Prompts Framework (MPF)
Throughout this course we'll see many examples of application of MPF, but for now, here is a high-level summary:

1. Split your prompts into Markdown sections like this: `__SECTION__`
    * this not only helps LLMs better understand your prompts but makes your prompts very easily skimmable (especially when rendered in Markdown since these show up in bold) allowing your fellow AI engineers to easily find and read relevant sections when your prompts get large.
2. Begin with your `__ASK__` section at the top of your prompt
    * this allows you and your collaborators to quickly understand the goal of the prompt from the very onset.
3. Format each section as a list of Markdown bullet points to make them easier to read and understand.
    * Bulleted lists are much easier to skim and they tend to lead to better instruction following by LLMs.
4. While trying to minimize the number of sections, for complex prompts, include the following key sections:
    * `__ASK__` - what are we asking the LLM to do?
    * `__CONTEXT__` - what does the LLM need to know to be able to respond accurately?
    * `__CONSTRAINTS__` - what constraints need to be followed when responding?
    * `__EXAMPLE__` - what's a good example of an output that you'd be happy with?

## Example of Applying MPF
Take a look at a poorly formatted prompt:

Write a short story about an astronaut who discovers a new planet. But make sure the story includes a talking alien, a space battle, and a twist at the end where it was all a simulation. And oh, keep it under 100 words, please.

Using MPF, we can turn this prompt into a well-structured and digestible request for the model:

```Markdown
__ASK__
Craft a short story about an astronaut's discovery.

__CONTEXT__
- The setting is outer space.
- The protagonist is an astronaut.

__CONSTRAINTS__
- The story should be no longer than 120 words.
- Include the following elements:
  - A talking alien.
  - A space battle.
  - A twist ending revealing everything was a simulation.
```

While most powerful models will easily understand either prompt and return a result like the one below, as your prompts get larger and more complex or if you need to use a less powerful LLM, the MPF approach becomes critical for successful Prompt Engineering.

Floating amid the stars, Astronaut Luna gazed at the cosmic ballet of galaxies unfolding before her. Her mission: to explore the unknown. Suddenly, an alien vessel approached, its form shimmering with unknown energies. Out stepped Zorax, a creature whose lips never moved, yet its voice filled Luna's mind, offering wisdom of the stars and warnings of an impending space battle.

As starfighters clashed in a dazzling spectacle, Luna fought valiantly beside her new ally. But as the dust settled, the universe faded to black, revealing a simulation pod. "Training complete," announced a robotic voice. Luna stepped out, her heart racing, ready for the real adventure ahead.

## On To Practice
Now that you know the importance of formatting and the principles of the Markdown Prompts Framework, you are ready to practice what you've learned.

The following practices will help to reinforce your understanding of the material and equip you with the necessary skills to write effective prompts for Large Language Models. Remember, practice makes perfect, so as you continue to work with these models, you'll become more adept at crafting efficient and effective prompts.
