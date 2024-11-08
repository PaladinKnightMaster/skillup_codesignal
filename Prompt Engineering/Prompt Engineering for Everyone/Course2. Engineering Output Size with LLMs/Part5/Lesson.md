# Learn Complex Sizing Techniques through F-shaped emails

## Introduction
In this segment of our course, we're going to dive into more complex strategies for controlling the proportions of our desired output. The example we'll use is about crafting emails. Writing emails, especially in a professional context, requires a balance between conciseness and completeness. This lesson will focus specifically on generating emails that are neither too brief nor excessively long, but rather enriched with succinct paragraphs that collectively deliver a comprehensive message.

## Let's Start Simple
Here is a simple but well-structured prompt that's aimed at creating an email.

```Markdown
__ASK__
Please generate a professional email to schedule a meeting.

__CONTEXT__
- The meeting is with a potential client about a new product launch.
- The sender is looking to set the meeting for next week.
- The tone should be professional and courteous.

__CONSTRAINTS__
- The email should consist of a few short paragraphs.
- Each paragraph should convey a distinct point:
  1. The introduction and purpose of the email.
  2. Suggested times for the meeting.
  3. A closing statement
```

Sample Output:

```Plain text
Subject: Meeting Request: Discussing Our Upcoming Product Launch

Dear [Recipient's Name],

I hope this message finds you well. My name is [Your Name], and I am reaching out from [Your Company Name] to discuss an exciting opportunity that aligns with your interests and objectives. We are on the cusp of launching a new product that we believe could significantly benefit your operations and enhance your service offerings. I am eager to share more about this development and explore potential collaboration avenues.

To ensure we can discuss this in detail and address any questions you might have, I would like to propose a meeting next week at your convenience. Could you please let me know your availability? I am currently open on [Day 1], [Day 2], and [Day 3] between [Time Range], but I am willing to adjust to accommodate your schedule.

Thank you for considering this request. I genuinely believe in the potential of our upcoming product to make a substantial impact and am looking forward to the possibility of discussing this with you further. Please feel free to contact me directly at [Your Phone Number] or [Your Email Address] should you need any immediate information or assistance in scheduling our meeting.

Best regards,

[Your Name]
[Your Job Title]
[Your Company Name]
[Your Contact Information]
```

## The F-shaped email
Now the last output was pretty good but it's far from great. An interesting study about how humans read emails reveals that emails that are structured in a shape that resembles the letter `F` are easier to read. So ideally we want to help our LLM to build emails in the `F` shape. Let's revisit our prompt.

```Markdown
__ASK__
Please generate a professional email to schedule a meeting.

__CONTEXT__
- The meeting is with a potential client about a new product launch.
- The sender is looking to set the meeting for next week.
- The tone should be professional and courteous.

__CONSTRAINTS__
- The email should consist of a few short paragraphs.
- Each paragraph should convey a distinct point:
  1. The introduction and purpose of the email.
  2. Suggested times for the meeting.
  3. A closing statement.
- Make the e-mail written in F-shape where each next paragraph is considerably shorter than the previous one. See example below for text-shape inspiration.

__EXAMPLE__

Subject: Meeting Request: Upcoming Product Collaboration

Dear [Recipient's Name],

I'm [Your Name] from [Your Company Name], reaching out about a potential partnership involving our new product launch. This opportunity could greatly benefit your operations and expand your offerings. I'd love to discuss how we can collaborate.

Can we meet next week to dive deeper? I'm available on [Day 1], [Day 2], [Day 3] between [Time Range], but happy to adjust. Please share your availability.

Looking forward to exploring this with you.

Best,
[Your Name]
[Your Job Title]
[Your Company Name]
```

While we could spend a lot of time in the `CONSTRAINTS` section explaining how the `F` shape would work, the key was to add an example while keeping our description of the `F` shape short and to the point. The above prompt will consistently produce emails in the shape and format desired.

## Conclusion
In this lesson, you've learned how to craft prompts that meet complex output size requirements. By using the creation of professional emails as an example, we've shown the importance of balance and structure—like the F-shaped format—to guide content generation. This method ensures your prompts effectively direct language models to produce outputs that are not only precise in length but also optimal in structure for any given purpose. Mastery of these techniques is key to leveraging language models to their fullest potential. On to Practice!
