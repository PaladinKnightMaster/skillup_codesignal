// fn main() {
//     let mut temperature = 0;
//     while temperature <= 20 {
//         if ______ { // TODO: Add condition
//             println!("Temperature {} degrees is even.", temperature);
//         } else {
//             println!("Temperature {} degrees is odd.", temperature);
//         }
//         // TODO: Increment the temperature
//     }
// }

fn main() {
    let mut temperature = 0;
    while temperature <= 20 {
        if temperature % 2 == 0 { // TODO: Add condition
            println!("Temperature {} degrees is even.", temperature);
        } else {
            println!("Temperature {} degrees is odd.", temperature);
        }
        // TODO: Increment the temperature
        temperature += 1;
    }
}