// fn main() {
//     // String equality
//     let hero1 = "Batman";
//     let hero2 = "Batman";
//     let hero3 = "Superman";
//     let hero4 = String::from("Batman");

//     // TODO: Fill in the code to get the correct outputs
//     println!("{}", hero1 == _______); // Expected output: true
//     println!("{}", hero1 != _______); // Expected output: true
//     println!("{}", hero1 == _______); // Expected output: true

//     // String Comparisons
//     let hero5 = String::from("Spiderman");
//     let hero6 = String::from("Ironman");

//     if _______ {
//         println!("{} comes before {}", hero5, hero6); // TODO: Complete the comparison
//     } else if ________ {
//         println!("{} comes after {}", hero5, hero6); // TODO: Complete the comparison
//     } else {
//         println!("{} and {} are equal", hero5, hero6);
//     }
// }

fn main() {
    // String equality
    let hero1 = "Batman";
    let hero2 = "Batman";
    let hero3 = "Superman";
    let hero4 = String::from("Batman");

    // TODO: Fill in the code to get the correct outputs
    println!("{}", hero1 == hero2); // Expected output: true
    println!("{}", hero1 != hero3); // Expected output: true
    println!("{}", hero1 == hero4); // Expected output: true

    // String Comparisons
    let hero5 = String::from("Spiderman");
    let hero6 = String::from("Ironman");

    if hero5 < hero6 {
        println!("{} comes before {}", hero5, hero6); // TODO: Complete the comparison
    } else if hero5 > hero6 {
        println!("{} comes after {}", hero5, hero6); // TODO: Complete the comparison
    } else {
        println!("{} and {} are equal", hero5, hero6);
    }
}