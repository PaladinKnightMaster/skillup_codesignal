// fn main() {
//     let mut shuttle = 1;
//     while shuttle <= 3 {
//         println!("Starting countdown for Shuttle {}", shuttle);
//         let mut countdown = 3;
//         while countdown > 0 {
//             println!("T-minus {}", countdown);
//             shuttle -= 1;
//         }
//         countdown -= 1;
//     }
// }

fn main() {
    let mut shuttle = 1;
    while shuttle <= 3 {
        println!("Starting countdown for Shuttle {}", shuttle);
        let mut countdown = 3;
        while countdown > 0 {
            println!("T-minus {}", countdown);
            countdown -= 1;
        }
        shuttle += 1;
    }
}