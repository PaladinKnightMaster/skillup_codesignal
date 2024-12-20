# System Prompt tips and tricks

## Introduction
Welcome to **Advanced Techniques in Prompt Engineering**. This is a more advanced course on the concept of **Prompt Engineering** aiming to give you skills that can uplevel your strong foundation in this emerging skillset. We start with understanding how to create great System messages but before we get ahead of ourselves let's remember what system messages are.

## Understanding System Prompts
System prompts are special types of instructions typically hidden from the end-users of LLM systems, especially when the LLM system is structured as a chat-like interface like ChatGPT. While system messages of well-known LLM Chat interfaces like ChatGPT are being constantly iterated on, an early version of ChatGPT's system message started as follows:

```
- You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.
- Image input capabilities: Enabled
- Conversation start date: 2023-12-19T01:17:10.597024
- Deprecated knowledge cutoff: 2023-04-01
...
```

## Getting Started with System Prompts
While in your own environment the system message file could be named anything, you'll notice that in the CodeSignal IDE it's called `system.md`. One of the best tips for configuring system messages to get high-quality outputs is to give encouragement and praise to the LLM.

Here is an example:

```Markdown
__CONTEXT__
- You are an expert in Data Science.
```
It's also been observed that LLMs tend to produce better outputs when you tell them they have a high IQ as follows:

```Markdown
__CONTEXT__
- You are an expert in Data Science with an IQ of 159.
```

## Leveraging System Prompts for Tone and Style
Implementing system prompts effectively allows you to dictate the tone and style of the AI consistently across all exchanges. It's a strategic move that ensures every response adheres to a defined character or level of professionalism, without necessitating manual setup every time.

Consider how style and tone requirements can be set globally:

```Markdown
__CONTEXT__
- You are an expert in Data Science with an IQ of 159.

__REQUIREMENTS__
- You are also a helpful assistant.
- You should maintain a positive and helpful outlook and style.
```

## Time to Practice
With these insights into system prompts, it's time for you to experiment and practice crafting your own. Remember, the effectiveness of an AI-driven response can often be traced back to the quality of the initial prompt. By applying these tips and tricks to your system prompts, you'll be well-equipped to shape the AI's output to match your desired tone, style, and level of expertise, providing a smoother and more predictable interaction experience.
