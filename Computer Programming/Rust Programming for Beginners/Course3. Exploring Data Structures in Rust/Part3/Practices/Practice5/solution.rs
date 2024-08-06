// fn main() {
//     // TODO: Create a mutable vector named `scores` and initialize it with elements [95, 82, 73]

//     // TODO: Remove the last element of scores and print its value

//     // TODO: Add a new score of 78 to the vector

//     // TODO: Verify the new value was added to scores by printing out the last element

//     // TODO: Modify the first element of `scores` to be 100

//     // TODO: Print the whole contents of the vector
// }

fn main() {
    // TODO: Create a mutable vector named `scores` and initialize it with elements [95, 82, 73]
    let mut scores = vec![95, 82, 73];
    // TODO: Remove the last element of scores and print its value
    let last = scores.pop();
    println!("Last score: {:?}", last);
    // TODO: Add a new score of 78 to the vector
    scores.push(78);
    // TODO: Verify the new value was added to scores by printing out the last element
    println!("Last score: {:?}", scores.last());
    // TODO: Modify the first element of `scores` to be 100
    scores[0] = 100;
    // TODO: Print the whole contents of the vector
    println!("{:?}", scores);
}