// fn main() {
//     // TODO: Iterate over the values 0 to 4 (inclusive)
//     for i in _____ {
//         // TODO: Iterate over the values 0 to i
//         for j in ______ {
//             print!("{} ", j);
//         }
//         println!();
//     }
// }
// /* Expected Output
//     0
//     0 1
//     0 1 2
//     0 1 2 3
//     0 1 2 3 4
// */

fn main() {
    // TODO: Iterate over the values 0 to 4 (inclusive)
    for i in 0..5 {
        // TODO: Iterate over the values 0 to i
        for j in 0..i+1 {
            print!("{} ", j);
        }
        println!();
    }
}
/* Expected Output
    0
    0 1
    0 1 2
    0 1 2 3
    0 1 2 3 4
*/