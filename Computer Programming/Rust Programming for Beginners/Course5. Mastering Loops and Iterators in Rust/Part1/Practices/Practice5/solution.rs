// fn main() {
//     // TODO: Define a variable days, set to 1, to keep track of the days


//     // TODO: Implement a while loop that runs for all 7 days

//         // TODO: Calculate the number of heroic deeds for each day (the double of the day number)

//         // TODO: Print the number of heroic deeds for the current day

//         // TODO: Increment the days counter
// }

fn main() {
    // TODO: Define a variable days, set to 1, to keep track of the days
    let mut days = 1;

    // TODO: Implement a while loop that runs for all 7 days
    while days <= 7 {
        // TODO: Calculate the number of heroic deeds for each day (the double of the day number)
        let heroic_deeds = days * 2;
        // TODO: Print the number of heroic deeds for the current day
        println!("Day {} -> {} deeds", days, heroic_deeds);
        // TODO: Increment the days counter
        days += 1;
    }
}