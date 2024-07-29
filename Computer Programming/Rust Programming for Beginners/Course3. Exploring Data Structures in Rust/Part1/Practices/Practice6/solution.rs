/*
fn main() {

    let mut smartphone = ("iPhone", 12, 799.99);
    let dimensions = (1920,1080);

    // TODO: Call describe_smartphone WITHOUT transfering ownership
    describe_smartphone(___); // Expected output: Phone: iPhone, Model: 12, Price: $799.99

    // TODO: Call update_version WITHOUT transfering ownership
    update_version(____);
    println!("New phone version: {}", smartphone.1); // Expected output: New phone version: 13

    // TODO: Call validate_dimensions WITHOUT passing a reference
    validate_dimensions(dimensions); // Expected output: Dimensions validated.
    println!("Dimensions: {:?}", dimensions); // Expected output: Dimensions: (1920, 1080)

    // TODO: Call sell_smartphone in order to transfer ownership
    sell_smartphone(smartphone); // Expected output: Selling iPhone 13 for $799.99.
}

// TODO: Implement describe_smartphone function that prints the phone's details without transfering ownership
fn describe_smartphone(____) {

}

// TODO: Implement update_version which increases the version by 1 without transfering ownership.
fn update_version(_____) {

}

// TODO: Implement validate_dimensions function that simply prints "Dimensions validated" This function DOES NOT accept a reference as a parameter
fn validate_dimensions(____) {
    // TODO: If both dimensions are greater than 0, print "Dimensions validated"

    // TODO: Else, print "Invalid dimensions"
}

// TODO: Implement sell_smartphone function that transfers ownership of the phone and prints out it's details
fn sell_smartphone(_____) {

}
*/

fn main() {
    let mut smartphone = ("iPhone", 12, 799.99);
    let dimensions = (1920, 1080);

    // Call describe_smartphone WITHOUT transferring ownership
    describe_smartphone(&smartphone); // Expected output: Phone: iPhone, Model: 12, Price: $799.99

    // Call update_version WITHOUT transferring ownership
    update_version(&mut smartphone);
    println!("New phone version: {}", smartphone.1); // Expected output: New phone version: 13

    // Call validate_dimensions WITHOUT passing a reference
    validate_dimensions(dimensions); // Expected output: Dimensions validated.
    println!("Dimensions: {:?}", dimensions); // Expected output: Dimensions: (1920, 1080)

    // Call sell_smartphone in order to transfer ownership
    sell_smartphone(smartphone); // Expected output: Selling iPhone 13 for $799.99.
}

// Implement describe_smartphone function that prints the phone's details without transferring ownership
fn describe_smartphone(phone: &(&str, i32, f64)) {
    println!("Phone: {}, Model: {}, Price: ${}", phone.0, phone.1, phone.2);
}

// Implement update_version which increases the version by 1 without transferring ownership.
fn update_version(phone: &mut (&str, i32, f64)) {
    phone.1 += 1;
}

// Implement validate_dimensions function that simply prints "Dimensions validated" This function DOES NOT accept a reference as a parameter
fn validate_dimensions(dimensions: (i32, i32)) {
    if dimensions.0 > 0 && dimensions.1 > 0 {
        println!("Dimensions validated.");
    } else {
        println!("Invalid dimensions.");
    }
}

// Implement sell_smartphone function that transfers ownership of the phone and prints out its details
fn sell_smartphone(phone: (&str, i32, f64)) {
    println!("Selling {} {} for ${}.", phone.0, phone.1, phone.2);
}
