// fn main() {
//     let motto1 = String::from("To infinity and beyond!");
//      // TODO: Extract "infinity" from the string
//      let infinity = _____;
//     println!("To {} and beyond!", infinity);

//     let motto2 = "Heroes Assemble!";
//     // TODO: Extract "Heroes" from the string literal
//     let heroes = ____;
//     println!("{} Assemble!", heroes);
// }

fn main() {
    let motto1 = String::from("To infinity and beyond!");
     // TODO: Extract "infinity" from the string
     let infinity = motto1[3..11].to_string();
    println!("To {} and beyond!", infinity);

    let motto2 = "Heroes Assemble!";
    // TODO: Extract "Heroes" from the string literal
    let heroes = motto2[0..6].to_string();
    println!("{} Assemble!", heroes);
}