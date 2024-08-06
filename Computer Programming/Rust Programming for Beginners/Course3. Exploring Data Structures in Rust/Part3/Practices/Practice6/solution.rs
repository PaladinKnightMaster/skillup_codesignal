// fn main() {
//     let hero_names = [String::from("Iron Man"), String::from("Thor")];
//     let mut hero_powers = [2999,4500];

//     // TODO: Call list_names on hero_names WITHOUT transfering ownership
//     list_names(___);

//     // TODO: Call move_teams in order to change all power levels to 0 and transfer ownership of of hero_names array
//     move_teams(____, ____);
//     println!("Hero powers are now: {:?}", hero_powers);
// }

// // TODO: Implement list_names which prints out the names of the heros without transferring ownership
// fn list_names(____) {
//     println!("Hero names are: {:?}", ____);
// }

// // TODO: Implement move_teams which prints out the hero names while transfering ownership. The powers should all be set to 0 without transferring ownership.
// fn move_teams(____, ____) {
//     println!("Moving {:?} to another team", ____);
//     // TODO: Set power levels to 0
// }

fn main() {
    let hero_names = [String::from("Iron Man"), String::from("Thor")];
    let mut hero_powers = [2999, 4500];

    // Call list_names on hero_names WITHOUT transferring ownership
    list_names(&hero_names);

    // Call move_teams in order to change all power levels to 0 and transfer ownership of hero_names array
    move_teams(hero_names, &mut hero_powers);
    println!("Hero powers are now: {:?}", hero_powers);
}

// Implement list_names which prints out the names of the heroes without transferring ownership
fn list_names(names: &[String; 2]) {
    println!("Hero names are: {:?}", names);
}

// Implement move_teams which prints out the hero names while transferring ownership. The powers should all be set to 0 without transferring ownership.
fn move_teams(names: [String; 2], powers: &mut [i32; 2]) {
    println!("Moving {:?} to another team", names);
    // Set power levels to 0
    for power in powers.iter_mut() {
        *power = 0;
    }
}
