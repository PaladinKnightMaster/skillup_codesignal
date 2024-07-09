/*
fn main() {
    let num_of_planets: i32 = 8;
    let rocket_mass: i32 = 1500.5; // There's an issue with this line
    let message: String = String::from("Ready for space journey simulation!");
    println!("There are {} known planets.", num_of_planets);
    println!("Our rocket's mass is {} tons.", rocket_mass);
    println!("{}", message);
}
*/

fn main() {
    let num_of_planets: i32 = 8;
    let rocket_mass: f32 = 1500.5; // There's an issue with this line
    let message: String = String::from("Ready for space journey simulation!");
    println!("There are {} known planets.", num_of_planets);
    println!("Our rocket's mass is {} tons.", rocket_mass);
    println!("{}", message);
}