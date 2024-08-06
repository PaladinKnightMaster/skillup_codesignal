// fn main() {
//     let mut hero_names = vec![String::from("Iron Man"), String::from("Thor")];

//     let mut power_levels = vec![2999, 4500];

//     // TODO: Call add_hero without transferring owernship of either vectors

//     // TODO: Print updated hero_names

//     // TODO: Print updated power_levels
// }

// // TODO: Implement add_hero that adds a new name to hero_names and a new power level to power_levels
// // Hint: This function should take in mutable references
// fn add_hero(names: ______, levels: ______) {

// }

fn main() {
    let mut hero_names = vec![String::from("Iron Man"), String::from("Thor")];

    let mut power_levels = vec![2999, 4500];

    // TODO: Call add_hero without transferring owernship of either vectors
    add_hero(&mut hero_names, &mut power_levels);
    // TODO: Print updated hero_names
    println!("{:?}", hero_names);
    // TODO: Print updated power_levels
    println!("{:?}", power_levels);
}

// TODO: Implement add_hero that adds a new name to hero_names and a new power level to power_levels
// Hint: This function should take in mutable references
fn add_hero(names: &mut Vec<String> , levels: &mut Vec<i32>) {
    names.push(String::from("Hulk"));
    levels.push(9000);
}