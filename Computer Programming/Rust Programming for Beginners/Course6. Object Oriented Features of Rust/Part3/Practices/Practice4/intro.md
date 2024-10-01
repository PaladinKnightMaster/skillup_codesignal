# Managing Employee Salaries

Great job so far! In this exercise, your task is to add a public and private method to a module that manages employee salaries. The methods to add are as follows:

1. Implement the public method `request_raise`:
    * The method takes in `&mut self` and an `amount` of type `f32`.
    * If the `is_great` field is `true`, it calls the private `update_salary` method and prints the new salary.
    * If the `is_great` field is `false`, it prints "Raise denied."
2. Implement the private method `update_salary`:
    * The method takes in `&mut self` and an `amount` of type `f32`.
    * It increases the `salary` by the given `amount`.