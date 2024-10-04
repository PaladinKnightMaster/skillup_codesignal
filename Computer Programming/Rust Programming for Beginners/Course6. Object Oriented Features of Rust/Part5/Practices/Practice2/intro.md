# Implement Polymorphism with Default Methods

Building on previous lessons, it’s time to apply your knowledge of Rust traits and polymorphism. You need to define an `Instrument` trait with a `play` method. The `Guitar` struct already has this method. Your task is to provide a default `play` method that prints "Do-re-mi", so we can call the `play` method on an instance of a `Piano`.