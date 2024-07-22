fn test(version: i32) {
    println!("Testing software version {}", version);
}

fn main() {
    let version = 1; // The version to release

    { // Creating a new scope for the version to test
        let version = 2;
        test(version);
    }

    println!("Releasing software version {}", version);
}