// fn main() {
//     // TODO: Convert the Nested For Loop into an equivalent Nested While Loop

//     for mission in 1..4 {
//         println!("Mission iteration {}", mission);
//         for phase in 1..4 {
//             println!("mission: {}, phase: {}", mission, phase);
//         }
//     }

// }

fn main() {
    // Outer loop for mission
    let mut mission = 1;
    while mission < 4 {
        println!("Mission iteration {}", mission);

        // Inner loop for phase
        let mut phase = 1;
        while phase < 4 {
            println!("mission: {}, phase: {}", mission, phase);
            phase += 1;
        }

        // Move to the next mission after completing phases
        mission += 1;
    }
}
