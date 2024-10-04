# Implement Polymorphism in Rust

Great progress so far! This code defines a `Playable` trait with a `play` method and `get_type` method. There is a `Game` struct and `Song` struct that both implement the `Playable` trait.

Your task is to create a `get_summary` method that accepts a reference to a struct that implements the `Playable` trait. Inside the function, call the structs `get_type` and `play` methods.