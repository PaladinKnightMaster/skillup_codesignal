/*
fn main() {
    // TODO: Create a mutable tuple named person with initial values ("Charlie", 28, 5.8)

    // TODO: Print the tuple before modification

    // TODO: Modify the age in the tuple from 28 to 29

    // TODO: Print the tuple after modification
}
*/

fn main() {
    // TODO: Create a mutable tuple named person with initial values ("Charlie", 28, 5.8)
    let mut person = ("Charlie", 28, 5.8);

    // TODO: Print the tuple before modification
    println!("{:?}", person);

    // TODO: Modify the age in the tuple from 28 to 29
    person.1 = 29;

    // TODO: Print the tuple after modification
    println!("{:?}", person);
}