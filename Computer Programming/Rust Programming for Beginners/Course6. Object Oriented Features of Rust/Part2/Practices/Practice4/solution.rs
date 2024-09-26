// // Define a struct
// struct Starship {
//     name: String,
//     speed: f32,
// }

// // Implement methods for the struct
// impl Starship {

//     // Method to calculate the time to travel a distance
//     fn travel_time(&self, distance: f32) -> f32 {
//         // TODO: Implement the travel_time method
//         distance / self.speed
//     }

//     // Method to change the speed of the Starship
//     fn change_speed(&mut self, speed: f32) {
//         // TODO: Implement the change_speed method
//         self.speed = speed;
//     }

//     // TODO: Create an associated function called "new" that returns a new instance of Starship

// }

// fn main() {
//     // TODO: Call the constructor to create a new instance of Starship
//     let mut ship = _____

//     // Call methods on the struct
//     println!("Travel time for 100 units: {}", ship.travel_time(100.0));
//     ship.change_speed(12.0);
//     println!("New travel time for 100 units: {}", ship.travel_time(100.0));
// }

// Define a struct
struct Starship {
    name: String,
    speed: f32,
}

// Implement methods for the struct
impl Starship {

    // Method to calculate the time to travel a distance
    fn travel_time(&self, distance: f32) -> f32 {
        // TODO: Implement the travel_time method
        distance / self.speed
    }

    // Method to change the speed of the Starship
    fn change_speed(&mut self, speed: f32) {
        // TODO: Implement the change_speed method
        self.speed = speed;
    }

    // TODO: Create an associated function called "new" that returns a new instance of Starship

    fn new(name: String, speed: f32) -> Starship {
        Starship { name: name, speed: speed }
    }
}

fn main() {
    // TODO: Call the constructor to create a new instance of Starship
    let mut ship = Starship::new(String::from("Enterprise"), 10.0);

    // Call methods on the struct
    println!("Travel time for 100 units: {}", ship.travel_time(100.0));
    ship.change_speed(12.0);
    println!("New travel time for 100 units: {}", ship.travel_time(100.0));
}