// fn main() {
//     let mut count = 10;
//     while count >= 1 {
//         println!("T-minus: {}", count);
//         count -= 1;
//     }
//     println!("Lift off!");
// }

fn main() {
    for count in (1..11).rev() {
        println!("T-minus: {}", count);
    }
    println!("Lift off!");
}