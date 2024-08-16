// fn main() {
//     let s1 = String::from("Superman");
//     let s2 = s1;
//     println!("{} is in Metropolis.", s2);
//     println!("{} is now in Gotham.", s1);
// }

fn main() {
    let s1 = String::from("Superman");
    let s2 = &s1;
    println!("{} is in Metropolis.", s2);
    println!("{} is now in Gotham.", s1);
}