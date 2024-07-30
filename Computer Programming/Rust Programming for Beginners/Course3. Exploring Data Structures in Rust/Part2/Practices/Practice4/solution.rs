// fn main() {
//     let mut power_levels = [25, 99];
//     println!("Before increasing power level: {:?}", power_levels);
//     // TODO: Decrease the 1st power level by 5
//     // TODO: Increase the 2nd power level by 1
//     println!("After modification: {:?}", power_levels);
// }

fn main() {
    let mut power_levels = [25, 99];
    println!("Before increasing power level: {:?}", power_levels);
    // TODO: Decrease the 1st power level by 5
    power_levels[0] -= 5;
    // TODO: Increase the 2nd power level by 1
    power_levels[1] += 1;
    println!("After modification: {:?}", power_levels);
}