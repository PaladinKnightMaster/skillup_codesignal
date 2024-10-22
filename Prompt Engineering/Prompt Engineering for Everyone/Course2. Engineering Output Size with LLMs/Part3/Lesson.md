# Going From a Single Word To a Single Sentence

## Introduction
This lesson focuses on crafting prompts to obtain single-sentence summaries, specifically in the context of financial market trends. By using the example of summarizing stock market trends, our objective is to fine-tune our prompts so that the LLM provides us with a concise, informative sentence that captures the essence of the market's current state.

Single-sentence summaries are crucial for financial analysts and investors who require a quick understanding of market sentiment without delving into detailed reports.

## The Challenge of Single-Sentence Summaries
Tasking LLMs to distill complex information like financial market data into a single sentence is challenging. LLMs tend to provide detailed explanations or multiple viewpoints, which, while beneficial for understanding, may not be ideal for those needing quick insights.

Consider a general, less focused prompt. Note that the full contents of the context is skipped for brevity.

```Markdown
__ASK__
Provide an overview of today's stock market trend.

__CONTEXT__
The S&P 500 saw a slight increase in the morning but experienced volatility in the afternoon due to unexpected political news, closing with a minor gain.
...

__CONSTRAINTS__
- Keep your overview brief.
```

Sample output:

Today's stock market showed positive trends across major indexes. The S&P 500 increased by 0.52% to 5,096.27, the Nasdaq Composite rose by 0.90% to 16,091.92, and the Dow Jones Industrial Average saw a modest gain of 0.12%, closing at 38,996.39.

## Refining Prompts for Concise Market Summaries
To guide the LLM towards delivering a one-sentence summary, we must be explicit about our constraints and what we expect in the response. It involves directly specifying the desired length and depth of analysis.

Here's an improvement to our prompt for this purpose:

```Markdown
__ASK__
Provide an overview of today's stock market trend.

__CONTEXT__
The S&P 500 saw a slight increase in the morning but experienced volatility in the afternoon due to unexpected political news, closing with a minor gain.
...

__CONSTRAINTS__
- Respond with just one sentence.
- Keep the sentence short while capturing the key high-level points.
```

Sample output:

Today's stock market ended positively, with gains in the S&P 500, Nasdaq, and Dow Jones.

In this refined prompt, we've added explicit instructions to focus on one-sentence responses while not skipping over important information. This helps in extracting single-sentence insights that are comprehensible at a glance.

## Time to Practice
Now that you've learned how to craft prompts for single-sentence outputs, it's time for you to practice to turn this knowledge into skills.
