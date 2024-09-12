// fn main() {
//     // TODO: Change the while loop below to a loop that uses break
//     let mut age = 1;
//     while age <= 20 {
//         if age < 13 {
//             println!("{} is a child", age);
//         } else if age < 18 {
//             println!("{} is a teenager", age);
//         } else {
//             println!("{} is an adult", age);
//         }
//         age += 1;
//     }

// }

fn main() {
    // TODO: Change the while loop below to a loop that uses break
    let mut age = 1;
    loop {
        if age < 13 {
            println!("{} is a child", age);
        } else if age < 18 {
            println!("{} is a teenager", age);
        } else {
            println!("{} is an adult", age);
        }
        age += 1;
        if age > 20 {
            break;
        }
    }
}