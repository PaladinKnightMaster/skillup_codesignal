fn main() {
    // Define the speed of a car in km/h
    let speed_in_kmh = 120;

    // Time traveled
    let time_in_hours = 3;

    // Calculate the distance covered
    let distance_covered = speed_in_kmh * time_in_hours;

    // Output the result
    println!("Car traveling at {} km/h for {} hours covering a distance of {} kilometers.", speed_in_kmh, time_in_hours, distance_covered);

    // Check if the speed limit is exceeded. Assume the speed limit to be 90 km/h
    let speed_limit = 90;

    // Output the result
    println!("Is the speed limit exceeded? {}", speed_in_kmh > speed_limit);
}