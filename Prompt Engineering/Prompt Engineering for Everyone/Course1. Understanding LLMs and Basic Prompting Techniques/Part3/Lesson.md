# Crafting Effective Examples for LLM Prompting

## Introduction
Welcome to the lesson on "the importance of great examples" in our journey towards understanding **Large Language Models (LLMs)** and basic prompting techniques. As we delve deeper into harnessing the power of LLMs, it becomes evident that the examples we provide these models significantly influence the quality and relevance of the output they generate. This section emphasizes how well-crafted examples play a critical role in prompt design, ultimately affecting the model's ability to understand the task at hand and deliver precise results.

## The Role of Examples in Prompting LLMs
Examples serve as the cornerstone of effective communication with LLMs. When we design prompts, we're not just asking a question or making a request; we're guiding the model towards the desired response. By providing clear, relevant examples, we help the model understand not only the task but also the context and the desired format of the output.

Let's look at a simple prompt where we want to create an email template without an example section.

```Markdown
__ASK__
Create short advertising copy to market CodeSignal

__CONSTRAINTS__
- Do not focus too much on features, focus on brand.
- Keep the ad very short.
```

Here is an example output from running this prompt through Claude.

Here is a draft of a short advertising copy for CodeSignal: CodeSignal. Where coding meets opportunity.

While this is already pretty good, you'll notice there is an unnecessary pre-amble, and the format is not great. Also, let's say we want to be able to easily copy-and-paste these and we don't want the quotation marks around the response.

## Impact of Great Examples
Now we can add a lot of extra constraints to fix the prompt but a much easier way is to just add a clear example like this:

```Markdown
__ASK__
Create short advertising copy to market CodeSignal

__CONSTRAINTS__
- Do not focus too much on features, focus on brand.
- Keep the ad very short.
- Follow the format of the example closely.

__EXAMPLE__
Build tech skills top companies are hiring for.
```

This returns `Unlock your coding potential. Shine with CodeSignal.` which is much closer to what we wanted.

## Conclusion
Great examples are not just an add-on; they are fundamental to designing effective prompts for LLMs. They guide the model towards our expectations and significantly influence the quality of the generated content. As we continue exploring the realm of LLMs and prompt engineering, remember the potency of a well-chosen example—it can be the difference between a good output and a great one.
