// fn main() {
//     let hero = String::from("Batman is protecting Gotham with Batman's gadgets.");

//     // TODO: Replace occurrences of "Batman" with "Nightwing"
//     let new_hero = ____________

//     println!("{}", new_hero); // Expected: "Nightwing is protecting Gotham with Nightwing's gadgets."
// }

fn main() {
    let hero = String::from("Batman is protecting Gotham with Batman's gadgets.");

    // TODO: Replace occurrences of "Batman" with "Nightwing"
    let new_hero = hero.replace("Batman", "Nightwing");

    println!("{}", new_hero); // Expected: "Nightwing is protecting Gotham with Nightwing's gadgets."
}