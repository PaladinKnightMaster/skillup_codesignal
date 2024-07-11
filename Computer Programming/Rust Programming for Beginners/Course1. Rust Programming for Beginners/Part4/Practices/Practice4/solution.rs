/*
fn main() {
    // TODO: Assign the distance to the harbor (40,000 meters) to a variable
    // TODO: Assign the distance to the archipelago (120,000 meters) to another variable

    // TODO: Compare the distance to the harbor to see if it's less than 500,000 meters
    // TODO: Check if the distance to the archipelago is greater than the distance to the harbor

    // TODO: Print results of these two comparisons to the console
}
*/
fn main() {
    // TODO: Assign the distance to the harbor (40,000 meters) to a variable
    let distance_to_harbor = 40000;
    // TODO: Assign the distance to the archipelago (120,000 meters) to another variable
    let distance_to_archipelago = 120000;

    // TODO: Compare the distance to the harbor to see if it's less than 500,000 meters
    let is_distance_to_harbor_less_than_500000 = distance_to_harbor < 500000;
    // TODO: Check if the distance to the archipelago is greater than the distance to the harbor
    let is_distance_to_archipelago_greater_than_distance_to_harbor = distance_to_archipelago > distance_to_harbor;

    // TODO: Print results of these two comparisons to the console
    println!("Is the distance to the harbor less than 500,000 meters? {}", is_distance_to_harbor_less_than_500000);
    println!("Is the distance to the archipelago greater than the distance to the harbor? {}", is_distance_to_archipelago_greater_than_distance_to_harbor);
}