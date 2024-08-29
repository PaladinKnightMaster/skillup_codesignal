// fn main() {
//     // Splitting the string
//     let s = String::from("Spider-Man, Iron Man, Captain Marvel");
//     // TODO: Split the string s by commas and collect into a vector
//     let heroes: Vec<&str> = ______;
//     println!("{:?}", heroes);  // Should print: ["Spider-Man", "Iron Man", "Captain Marvel"]

//     // Joining the string
//     // TODO: Join the vector of superheroes with " & " and store in joined_heroes
//     let joined_heroes =_______;
//     println!("{}", joined_heroes);  // Should print: "Spider-Man & Iron Man & Captain Marvel"
// }

fn main() {
    // Splitting the string
    let s = String::from("Spider-Man, Iron Man, Captain Marvel");
    // TODO: Split the string s by commas and collect into a vector
    let heroes: Vec<&str> = s.split(',').collect();
    println!("{:?}", heroes);  // Should print: ["Spider-Man", "Iron Man", "Captain Marvel"]

    // Joining the string
    // TODO: Join the vector of superheroes with " & " and store in joined_heroes
    let joined_heroes = heroes.join(" & ");
    println!("{}", joined_heroes);  // Should print: "Spider-Man & Iron Man & Captain Marvel"
}