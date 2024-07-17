/*
fn main() {
    let asteroid_count = 2; // Number of asteroids detected in the asteroid belt

    if asteroid_count < 1 {
        println!("No asteroids in proximity.");
    } else asteroid_count < 3 {
        println!("A couple of asteroids found!");
    } else {
        println!("Numerous asteroids ahead!");
    }
}
*/
fn main() {
    let asteroid_count = 2; // Number of asteroids detected in the asteroid belt

    if asteroid_count < 1 {
        println!("No asteroids in proximity.");
    } else if asteroid_count < 3 {
        println!("A couple of asteroids found!");
    } else {
        println!("Numerous asteroids ahead!");
    }
}