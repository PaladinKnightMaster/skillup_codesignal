# Implementing Traits for Perimeter Calculation

You're doing great! Now, let's test your understanding of traits in Rust by applying them to video game characters.

The code already defines a `Warrior` and `Mage` struct. In this exercise, you will complete the provided code to define a trait named `CharacterStats`. This trait will have two methods: `attack_power` and `take_damage`.

1. `attack_power` **Method**: This method calculates the character's attack power.

    * For the `Warrior` struct, the attack power should be the sum of the `strength` and `weapon_damage` fields.
    * For the `Mage` struct, the attack power should be the sum of the `magic_power` and `staff_damage` fields.

2. `take_damage` **Method**: This method updates the character's current health based on the `damage` received. It takes an integer parameter damage representing the amount of damage to be subtracted from the health.

    * For the `Warrior` struct, the health should be decreased by the value of `damage`.
    * For the `Mage` struct, the health should similarly be decreased by the value of `damage`. However, the `Mage` absorbs power when taking damage. Whenever the `Mage` takes damage, the `magic_power` field increases by 10.

You must implement this trait for the already defined `Warrior` and `Mage` structs. Good luck!