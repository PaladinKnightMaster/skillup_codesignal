fn main() {
    // Creating Tuple with Data Type
    let person_with_type: (&str, i32, f64) = ("Alice", 30, 5.5);
    // Creating Tuple without Data Type
    let person_without_type = ("Bob", 25, 6.0);
    // Accessing elements directly using dot notation
    println!("{}", person_with_type.0);
    println!("{}", person_without_type.2);
    // Deconstructing Tuples
    let (name, age, height) = person_with_type;
    println!("Name: {}, Age: {}, Height: {}", name, age, height);

    // Mutable Tuples
    let mut mutable_tuple = ("Charlie", 28, 5.8);
    println!("Before modification: {:?}", mutable_tuple);
    mutable_tuple.1 = 29; // Modifying the age
    println!("After modification: {:?}", mutable_tuple);
}