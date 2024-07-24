/*
fn paint_walls(color_address: &mut String) {
    // TODO: Change the color value to something vibrant!
}

fn main() {
    // TODO: Declare a mutable variable `wall_color` with the initial value "White".

    // TODO: Call `paint_walls` to change `wall_color`.

    // TODO: Print out the new color of the walls.
}
*/

fn paint_walls(color_address: &mut String) {
    // TODO: Change the color value to something vibrant!
    *color_address = String::from("Blue");
}

fn main() {
    // TODO: Declare a mutable variable `wall_color` with the initial value "White".
    let mut wall_color = String::from("White");

    // TODO: Call `paint_walls` to change `wall_color`.
    paint_walls(&mut wall_color);

    // TODO: Print out the new color of the walls.
    println!("The new color of the walls is: {}", wall_color);
}