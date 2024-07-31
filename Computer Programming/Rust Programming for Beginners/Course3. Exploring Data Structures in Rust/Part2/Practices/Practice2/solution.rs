fn main() {
  let hero_names = [String::from("Superman"), String::from("Batman")];
  let hero_powers: [i32; 2] = [200, 100];

  // Passing a reference to array
  display_hero_names(&hero_names);
  println!("After display_hero_names: {:?}", hero_names); // No ownership moved, prints same array

  // Passing an array of copy types
  display_hero_powers(hero_powers);
  println!("After display_hero_powers: {:?}", hero_powers); // Data copied, prints same array

  // Passing an array of non-copy types
  transfer_hero_names(hero_names);
  // println!("After transfer_hero_names: {:?}", hero_names); // Causes error because ownership has been transfered
}

fn display_hero_names(names: &[String; 2]) {
  println!("Inside display_hero_names: {:?}", names);
}

fn display_hero_powers(powers: [i32; 2]) {
  println!("Inside display_hero_powers: {:?}", powers);
}

fn transfer_hero_names(names: [String; 2]) {
  println!("Inside transfer_hero_namess: {:?}", names);
}