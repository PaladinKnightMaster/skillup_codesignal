/*
fn main() {
    let mut house_paint_color = String::from("Red");
    let house_address = &mut house_paint_color;

    // TODO: Update the `house_paint_color` to "Blue" using `house_address`.
    println!("The house is now painted in {}", house_paint_color);
}
*/

fn main() {
  let mut house_paint_color = String::from("Red");
  let house_address = &mut house_paint_color;

  // TODO: Update the `house_paint_color` to "Blue" using `house_address`.
  *house_address = String::from("Blue");
  println!("The house is now painted in {}", house_paint_color);
}