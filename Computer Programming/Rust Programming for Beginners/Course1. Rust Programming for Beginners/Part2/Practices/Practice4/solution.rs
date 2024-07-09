/*
fn main() {
    // TODO: Declare a constant for the speed of light in a vacuum with a value of 299792 (km/s)

    // TODO: Declare a mutable variable for the number of moons in the Solar System, starting at 181

    // TODO: New moons have been discovered! Change the number of moons to 184

    // TODO: Print out the speed of light and the updated number of moons using println!
}
*/
fn main() {
    // TODO: Declare a constant for the speed of light in a vacuum with a value of 299792 (km/s)
    const SPEED_OF_LIGHT_IN_A_VACUUM_KM_PER_S: f64 = 299792.0;
    // TODO: Declare a mutable variable for the number of moons in the Solar System, starting at 181
    let mut number_of_moons = 181;
    // TODO: New moons have been discovered! Change the number of moons to 184
    number_of_moons = number_of_moons + 3;
    // TODO: Print out the speed of light and the updated number of moons using println!
    println!("The speed of light in a vacuum is {} km/s.", SPEED_OF_LIGHT_IN_A_VACUUM_KM_PER_S);
    println!("The number of moons in the solar system is {}.", number_of_moons);
}