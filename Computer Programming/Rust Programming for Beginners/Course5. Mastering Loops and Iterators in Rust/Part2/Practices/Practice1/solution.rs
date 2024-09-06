fn main() {
    // For loop with range
    println!("Iterating over a range");
    for number in 1..6 {
        println!("Number is: {}", number);
    }

    // For loop with range in reverse
    println!("Iterating in reverse");
    for number in (1..6).rev() {
        println!("Reverse number is: {}", number);
    }

    // Using step_by to iterate
    println!("Iterating with a step size of 2:");
    for number in (1..10).step_by(2) {
        println!("{}", number);
    }
}