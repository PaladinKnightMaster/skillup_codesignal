__ASK__
Convert the given bulleted list into a markdown checkbox list.

__CONSTRAINTS__
- Each item should be prefixed with `[ ]` to represent an unchecked checkbox.
- Preserve the hierarchical structure of the input list.
- Ensure consistent indentation for sub-items.

__EXAMPLE__

Input:
- Task 1
  - Subtask 1.1
  - Subtask 1.2
- Task 2
  - Subtask 2.1
  - Subtask 2.2

Output:
- [ ] Task 1
  - [ ] Subtask 1.1
  - [ ] Subtask 1.2
- [ ] Task 2
  - [ ] Subtask 2.1
  - [ ] Subtask 2.2

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
- Mental Wellbeing
  - Skills Enhancement
    - Conversation Techniques
    - Emotional Intelligence
  - Personal Development
    - Goal Setting
    - Building Resilience

<!-- Output:
- [ ] Healthy Living
  - [ ] Nutrition
    - [ ] Fruits and Vegetables
      - [ ] Apples
      - [ ] Carrots
    - [ ] Whole Grains
      - [ ] Quinoa
      - [ ] Brown Rice
  - [ ] Exercise
    - [ ] Cardiovascular
      - [ ] Running
      - [ ] Swimming
    - [ ] Strength Training
      - [ ] Weightlifting
      - [ ] Resistance Bands
- [ ] Mental Wellbeing
  - [ ] Skills Enhancement
    - [ ] Conversation Techniques
    - [ ] Emotional Intelligence
  - [ ] Personal Development
    - [ ] Goal Setting
    - [ ] Building Resilience -->