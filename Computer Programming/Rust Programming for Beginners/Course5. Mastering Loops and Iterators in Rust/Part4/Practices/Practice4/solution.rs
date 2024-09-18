// use std::collections::HashMap;

// fn main() {
//     let mut gadgets = HashMap::new();
//     gadgets.insert("Batman", "Batarang");
//     gadgets.insert("Iron Man", "Repulsor");
//     gadgets.insert("Thor", "Mjolnir");

//     for (hero, gadget) in gadgets.iter().enumerate() {
//         println!("Hero: {}, Gadget: {}", hero, gadget);
//     }

//     for (hero, gadget) in &gadgets.iter() {
//         println!("Hero: {}, Gadget: {}", hero, gadget);
//     }
// }

use std::collections::HashMap;

fn main() {
    let mut gadgets = HashMap::new();
    gadgets.insert("Batman", "Batarang");
    gadgets.insert("Iron Man", "Repulsor");
    gadgets.insert("Thor", "Mjolnir");

    for (hero, gadget) in gadgets.iter() {
        println!("Hero: {}, Gadget: {}", hero, gadget);
    }

    for (hero, gadget) in &gadgets {
        println!("Hero: {}, Gadget: {}", hero, gadget);
    }
}