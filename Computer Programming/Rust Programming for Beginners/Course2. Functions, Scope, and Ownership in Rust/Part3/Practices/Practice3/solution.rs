/*
fn repaint_walls(color_address: &String) { // Incorrectly not allowing mutation
    *color_address = String::from("Blue"); // Attempt to change the color to "Blue"
}

fn main() {
    let mut current_color =  String::from("Red"); // The current color is "Red"
    repaint_walls(&mut current_color); // Attempting to pass a mutable reference
    println!("The new color of the walls is: {}", current_color);
}
*/

fn repaint_walls(color_address: &mut String) { // Incorrectly not allowing mutation
    *color_address = String::from("Blue"); // Attempt to change the color to "Blue"
}

fn main() {
    let mut current_color =  String::from("Red"); // The current color is "Red"
    repaint_walls(&mut current_color); // Attempting to pass a mutable reference
    println!("The new color of the walls is: {}", current_color);
}