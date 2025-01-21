/*
fn main() {
    let version = 1;
    println!("Current version: {}", version);
    // TODO: Use variable shadowing to update "version" by calling your function and print the updated version.
}

fn update_version(version: i32) -> i32 {
    // TODO: Implement the logic to increment the version number by 1 and return the new value
}
*/
fn main() {
    let version = 1;
    println!("Current version: {}", version);
    // TODO: Use variable shadowing to update "version" by calling your function and print the updated version.
    let version = update_version(version);

    println!("Updated version: {}", version);
}

fn update_version(version: i32) -> i32 {
    // TODO: Implement the logic to increment the version number by 1 and return the new value
    return version + 1;
}