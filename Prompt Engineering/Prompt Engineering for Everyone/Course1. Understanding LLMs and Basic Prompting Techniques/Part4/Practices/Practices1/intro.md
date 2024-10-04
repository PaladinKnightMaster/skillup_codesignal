# Context Limits Table

Create a prompt using the MPF that turns this unorganized list of LLM context limits into a beautiful table that includes two columns and a header.

Here is the unorganized list:

```
GPT-4: 4k-32k tokens, Claude 2: 100k, GPT-3.5: 4k, PALM-2: 8k, GPT-3: 2k, Mistral 7B: 8k
```
Here is the expected table returned by the prompt:

```
| Model        | Token Range |
|--------------|-------------|
| GPT-4        | 4k-32k      |
| Claude 2     | 100k        |
| GPT-3.5      | 4k          |
| PALM-2       | 8k          |
| GPT-3        | 2k          |
| Mistral 7B   | 8k          |
```