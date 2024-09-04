fn main() {
    let mut countdown = 5;
    while countdown > 0 {
        println!("Countdown is: {}", countdown);
        countdown -= 1;
    }
    println!("Lift off!");
}