fn main() {
    // Creating a new vector
    let mut v: Vec<i32> = Vec::new();
    // Adding values to the vector
    v.push(1);
    v.push(2);
    v.push(3);

    // Display the values in the vector
    println!("{:?}", v);

    // Creating a vector using the vec! macro
    let v2 = vec![1, 2, 3, 4];
    // Accessing an element in the vector using indexing
    let third: i32 = v2[2];
    println!("The third element is {}", third);

    // Access an element in the vector using get
    if let Some(fourth) = v2.get(3) {
        println!("The fourth element is {}", fourth);
    }

    // Modifying an element in the vector
    let mut v3 = vec![1, 2, 3, 4];
    v3[2] = 5;
    println!("Modified vector: {:?}", v3);
}