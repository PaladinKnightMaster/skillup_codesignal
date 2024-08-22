// fn main() {
//     let superhero = String::from("Spider");
//     update_name(superhero);
//     println!("{}", superhero); // Expected: Spider Man
// }

// fn update_name(name: String) {
//     let title = " Man";
//     name.push_str(title);
// }

fn main() {
    let mut superhero = String::from("Spider");
    update_name(&mut superhero);
    println!("{}", superhero); // Expected: Spider Man
}

fn update_name(name: &mut String) {
    let title = " Man";
    name.push_str(title);
}