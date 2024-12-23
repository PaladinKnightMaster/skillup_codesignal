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

__CURRENT LIST TO CONVERT__

- Healthy Living
  - Nutrition
    - Fruits and Vegetables
      - Apples
      - Carrots
    - Whole Grains
      - Quinoa
      - Brown Rice
  - Exercise
    - Cardiovascular
      - Running
      - Swimming
    - Strength Training
      - Weightlifting
      - Resistance Bands
- Personal Development
  - Skills Enhancement
    - Public Speaking
    - Time Management
  - Mental Wellbeing
    - Meditation
    - Journaling