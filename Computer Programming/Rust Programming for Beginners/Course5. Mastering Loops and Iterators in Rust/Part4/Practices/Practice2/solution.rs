// fn main() {
//     let sentence = "CodeSignal is fun!";
//     for ch in sentence.iter() {
//         println!("Index: {}, Char: {}", index, ch);
//     }
// }

fn main() {
    let  sentence = "CodeSignal is fun!";
    for (index, ch) in sentence.chars().enumerate() {
        println!("Index: {}, Char: {}", index, ch);
    }
}