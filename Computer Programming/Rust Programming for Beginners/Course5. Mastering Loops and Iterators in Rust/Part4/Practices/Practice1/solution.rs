fn main() {
    // Using iter to print each hero's name
    let heroes = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow"];
    for hero in heroes.iter() {
        println!("Hero: {}", hero);
    }

    // Using iter and enumerate to print heroes with their indices
    for (index, hero) in heroes.iter().enumerate() {
        println!("Index: {}, Hero: {}", index, hero);
    }
}