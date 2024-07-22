/*
fn main() {
    let version = 1;
    {
        let version = version + 1; // Incrementing the version number.
        println!("Updated to software version {}", version);
    }
    println!("Current software version {}", version); // Incorrect output due to the bug
}
*/
fn main() {
    let version = 1;

    let version = version + 1; // Incrementing the version number.
    println!("Updated to software version {}", version);

    println!("Current software version {}", version); // Incorrect output due to the bug
}