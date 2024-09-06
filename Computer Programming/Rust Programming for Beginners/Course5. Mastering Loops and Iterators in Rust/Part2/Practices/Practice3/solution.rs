// fn main() {
//     for number in 5...1 {
//         println!("T-minus: {}", number);
//     }
//     println!("Lift off!");
// }

fn main() {
    for number in (1..6).rev() {
        println!("T-minus: {}", number);
    }
    println!("Lift off!");
}