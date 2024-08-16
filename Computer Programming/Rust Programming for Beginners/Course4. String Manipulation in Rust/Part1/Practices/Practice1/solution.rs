fn main() {
    // String Literals
    let hero1 = "Spider-Man";
    println!("{}", hero1);
    let hero_ref = hero1;
    println!("{}", hero_ref);

    // String Type
    let hero2 = String::from("Iron Man");
    println!("{}", hero2);

    // References
    let hero3 = String::from("Thor");
    let ref_hero = &hero3; // ref_hero is a reference to hero3
    println!("{}", ref_hero);
    println!("{}", hero3); // hero3 can still be used here

    // String Slices
    let hero4 = String::from("Black Panther");
    let black = &hero4[0..5];
    let panther = &hero4[6..13];
    println!("{} {}", black, panther);

    let hero5 = "Captain America!";
    let captain = &hero5[0..7]; // Added a reference to make it a slice
    println!("{}", captain);
}