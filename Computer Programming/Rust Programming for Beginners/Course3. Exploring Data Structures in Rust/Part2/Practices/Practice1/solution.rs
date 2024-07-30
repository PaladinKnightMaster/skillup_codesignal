fn main() {
    // Creating Array with Data Type
    let array_with_type: [i32; 4] = [1, 2, 3, 4];
    println!("First element: {}", array_with_type[0]);

    // Creating Array without Data Type (type inference)
    let array_without_type = [5, 6, 7, 8];
    println!("Fourth element: {}", array_without_type[3]);

    // Mutable Array
    let mut mutable_array = [9, 10, 11, 12];
    mutable_array[2] = 42; // Modifying the third element
    println!("Mutable array: {:?}", mutable_array);
}