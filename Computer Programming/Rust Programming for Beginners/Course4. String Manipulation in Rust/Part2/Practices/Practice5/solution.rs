// fn main() {
//     // String equality
//     let hero1 = ____; // TODO: Create string literal
//     let hero2 = ____; // TODO: Create string literal
//     let hero3 = ____; // TODO: Create String

//     println!("{}", hero1 == hero2); // Expected: false
//     println!("{}", hero2 != hero3); // Expected: true
//     println!("{}", hero1 == hero3); // Expected: true

//     // String Comparisons
//     let hero4 = ____; // TODO: Create a string
//     let hero5 = ____; // TODO: Create a string

//     println!("Does {} comes before {}? {}", hero4, hero5, _____); // Expected: false
// }

fn main() {
    // String equality
    let hero1 = "Batman"; // TODO: Create string literal
    let hero2 = "Spiderman"; // TODO: Create string literal
    let hero3 = String::from("Batman"); // TODO: Create String

    println!("{}", hero1 == hero2); // Expected: false
    println!("{}", hero2 != hero3); // Expected: true
    println!("{}", hero1 == hero3); // Expected: true

    // String Comparisons
    let hero4 = String::from("Spiderman"); // TODO: Create a string
    let hero5 = String::from("Batman"); // TODO: Create a string

    println!("Does {} comes before {}? {}", hero4, hero5, hero4 < hero5); // Expected: false
}