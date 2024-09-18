fn main() {
    // Combine For and While Loop Example
    for shuttle in 1..4 {
        let mut countdown = 5;
        while countdown > 0 {
            println!("Shuttle {}, T-minus: {}", shuttle, countdown);
            countdown -= 1;
        }
    }
}