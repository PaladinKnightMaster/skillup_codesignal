// fn main() {
//     let motto = "Heroe's motto: "Save the day!"";
//     println!("{}", motto);  // Expected: Heroe's motto: "Save the day!"

//     let file_path = "~\Hard_Drive\Secrets\x.txt";
//     println!("{}", file_path);  // Expected: "~\Hard_Drive\Secrets\x.txt"

//     let power1 = "Flight";
//     let power2 = "Invisibility";
//     println!("Power 1: {} Power 2:{}", power1, power2);
//     //Expected
//     // Power 1: Flight
//     // Power 2: Invisibility
// }

fn main() {
    let motto = "Heroe's motto: \"Save the day!\"";
    println!("{}", motto);  // Expected: Heroe's motto: "Save the day!"

    let file_path = "~\\Hard_Drive\\Secrets\\x.txt";
    println!("{}", file_path);  // Expected: "~\Hard_Drive\Secrets\x.txt"

    let power1 = "Flight";
    let power2 = "Invisibility";
    println!("Power 1: {}\nPower 2:{}", power1, power2);
    //Expected
    // Power 1: Flight
    // Power 2: Invisibility
}