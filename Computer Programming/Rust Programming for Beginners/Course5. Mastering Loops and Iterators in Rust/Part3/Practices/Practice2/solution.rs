// fn main() {
//     let mut num = 1;
//     while num <= 10 {
//         if num % 2 == 0 {
//             continue;
//         }
//         println!("{}", num);
//         num += 1;
// }

fn main() {
    let mut num = 1;
    while num <= 10 {
        if num % 2 != 0 {
            println!("{}", num);
        }
        num += 1;
    }
}