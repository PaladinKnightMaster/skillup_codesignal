// fn main() {
//     // TODO: Define a string literal "hero" with the value "Batman" and print it.

//     // TODO: Define a String type "hero2" using String::from with the value "Wonder Woman" and print it.

//     // TODO: Create a String "s1" with the value "Aquaman," create a reference "s2" to s1, and print both.

//     // TODO: Create a String "s1" with the value "Green Lantern," create slices "green" and "lantern" representing the first and second parts respectively, and print them.

//     // TODO: Create a string literal "s2" with the value "Flash Gordon!", create a slice "flash" from it, and print the slice.
// }

fn main() {
    // TODO: Define a string literal "hero" with the value "Batman" and print it.
    let hero = "Batman";
    println!("{}", hero);
    // TODO: Define a String type "hero2" using String::from with the value "Wonder Woman" and print it.
    let hero2 = String::from("Wonder Woman");
    println!("{}", hero2);
    // TODO: Create a String "s1" with the value "Aquaman," create a reference "s2" to s1, and print both.
    let s1 = String::from("Aquaman");
    let s2 = &s1;
    println!("{} {}", s1, s2);
    // TODO: Create a String "s1" with the value "Green Lantern," create slices "green" and "lantern" representing the first and second parts respectively, and print them.
    let s1 = String::from("Green Lantern");
    let green = &s1[0..5];
    let lantern = &s1[6..13];
    println!("{} {}", green, lantern);
    // TODO: Create a string literal "s2" with the value "Flash Gordon!", create a slice "flash" from it, and print the slice.
    let s2 = String::from("Flash Gordon!");
    let flash = &s2[0..5];
    println!("{}", flash);
}