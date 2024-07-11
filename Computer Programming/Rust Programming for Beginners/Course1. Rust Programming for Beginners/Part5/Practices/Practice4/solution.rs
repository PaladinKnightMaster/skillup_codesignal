/*
fn main() {
    // TODO: Declare and initialize variables for battery capacity (15,000 mAh), power consumption (120 mAh/hour), and patrol duration (2 hours)

    // TODO: Calculate the remaining power after the patrol

    // TODO: Use a logical operation to determine if the remaining power is more than half of the battery capacity

    // TODO: Print out the result in a format: "Enough power for another round? true/false"
}
*/
fn main() {
    // TODO: Declare and initialize variables for battery capacity (15,000 mAh), power consumption (120 mAh/hour), and patrol duration (2 hours)
    let battery_capacity: i32 = 15000;
    let power_consumption: i32 = 120;
    let passive_duration: i32 = 2;
    // TODO: Calculate the remaining power after the patrol

    let remaining_power = battery_capacity - power_consumption * passive_duration;

    // TODO: Use a logical operation to determine if the remaining power is more than half of the battery capacity

    let is_enough_power = remaining_power > battery_capacity / 2;

    // TODO: Print out the result in a format: "Enough power for another round? true/false"

    println!("Enough power for another round? {}", is_enough_power);
}