// fn main() {
//     // TODO: Using a while loop nested inside a for loop, print the following pattern
//     /*
//         ****
//         ***
//         **
//     */

//     println!("*");

//     // TODO: Using a for loop nested inside a while loop, print the following pattern
//     /*
//         **
//         ***
//         ****
//     */
// }

// /* Final Expected Output
//     ****
//     ***
//     **
//     *
//     **
//     ***
//     ****
// */

fn main() {
    // TODO: Using a while loop nested inside a for loop, print the following pattern
    /*
        ****
        ***
        **
    */
    let mut i = 4;
    while i > 1 {
        for _ in 0..i {
            print!("*");
        }
        i -= 1;
        println!();
    }

    println!("*");

    // TODO: Using a for loop nested inside a while loop, print the following pattern
    /*
        **
        ***
        ****
    */
    for i in 2..5 {
        let mut j = i;
        while j > 0 {
            print!("*");
            j -= 1;
        }
        println!();
    }
}

/* Final Expected Output
    ****
    ***
    **
    *
    **
    ***
    ****
*/