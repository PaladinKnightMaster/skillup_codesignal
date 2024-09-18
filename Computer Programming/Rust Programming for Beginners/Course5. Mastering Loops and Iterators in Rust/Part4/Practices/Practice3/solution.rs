// fn main() {
//     let gadgets = vec!["Batarang", "Repulsor", "Mjolnir", "Shield", "Web shooters"];

//     // TODO: Iterate through the gadgets and print each gadget
//     for gadget in _____ {
//         println!("Gadget: {}", gadget);
//     }

//     // TODO: Iterate through the gadgets and print each gadget with its index
//     for ______ in ______{
//         println!("________: {}, Gadget: {}", index, gadget);
//     }
// }

fn main() {
    let gadgets = vec!["Batarang", "Repulsor", "Mjolnir", "Shield", "Web shooters"];

    // TODO: Iterate through the gadgets and print each gadget
    for gadget in gadgets.iter() {
        println!("Gadget: {}", gadget);
    }

    // TODO: Iterate through the gadgets and print each gadget with its index
    for (index, gadget) in gadgets.iter().enumerate() {
        println!("Index: {}, Gadget: {}", index, gadget);
    }
}