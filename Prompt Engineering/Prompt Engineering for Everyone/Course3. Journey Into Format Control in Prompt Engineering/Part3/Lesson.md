# Markdown Headers in Output Formatting

## Introduction
This lesson equips prompt engineers with techniques for directing LLMs to produce outputs structured with markdown headers. The goal is to enhance response readability and organization through precise prompt crafting. Also, using markdown headers in your output can make parsing output much easier.

## Key Principle
The success in generating markdown header-formatted outputs lies in the explicit instruction within your prompts as well as in providing examples:

Let's dive directly into examples demonstrating how to incorporate markdown header formatting instructions into your prompts.

## Basic Prompt Without Formatting Request:
Let's say you are writing a biology report and want to collaborate with an LLM in doing so but you want your report to be nicely structured in markdown. Your initial prompt might be as follows:

```Markdown
__ASK__
Describe the process of photosynthesis.
```

This prompt will yield a narrative or list, lacking structured hierarchy.

## Enhanced Prompt With Formatting Request:
```Markdown
__ASK__
Outline the process of photosynthesis using markdown headers for each main step.

__FORMAT EXAMPLE__

# Photosynthesis Process
## Light Absorption
Description...
## Carbon Dioxide Fixation
Description...
...
```

By including a clear formatting request and a structural example, the prompt is more likely to elicit a response that is well-organized and easy to navigate.

## Advanced Structuring:
What if you only want to use a specific header like an `h2` type header (in markdown that's `##`) instead of the variety that is produced by the prompt above?

```Markdown
__ASK__
Detail the journey of a red blood cell through the human body using markdown headers for each organ system it passes through.

__CONSTRAINTS__
- Only use h2 type headers (`##`) in the markdown.
- Also include markdown tables for better information organization.

__FORMAT EXAMPLE__

## Journey of a Red Blood Cell
## Heart
## Right Atrium to Right Ventricle
## Lungs
## Gas Exchange
...
```

This prompt demonstrates how adding a constraints section can make your desired output even more controlled.

## Conclusion
Crafting prompts that lead to markdown header-organized responses is straightforward but requires explicit formatting requests. Experiment with different levels of header specifications to achieve the desired depth of information structuring. Mastery comes with practice, and the precision in your prompts will yield increasingly structured and useful outputs from LLMs.
