// /// TODO: Define a Drive trait with an accelerate and brake method

// // Define a struct for `Car`
// struct Car {
//     speed: i32,
// }

// impl Drive for Car {
//     fn accelerate(&mut self, amount: i32) {
//         self.speed += amount;
//     }

//     fn brake(&mut self, amount: i32) {
//         self.speed -= amount;
//     }
// }

// fn main() {
//     let mut car = Car { speed: 0 };
//     car.accelerate(30);
//     println!("Car speed after accelerating: {}", car.speed);

//     car.brake(10);
//     println!("Car speed after braking: {}", car.speed);

//     car.brake(15);
//     println!("Car speed after braking: {}", car.speed);
// }

/// TODO: Define a Drive trait with an accelerate and brake method
trait Drive {
    fn accelerate(&mut self, amount: i32);
    fn brake(&mut self, amount: i32);
}
// Define a struct for `Car`
struct Car {
    speed: i32,
}

impl Drive for Car {
    fn accelerate(&mut self, amount: i32) {
        self.speed += amount;
    }

    fn brake(&mut self, amount: i32) {
        self.speed -= amount;
    }
}

fn main() {
    let mut car = Car { speed: 0 };
    car.accelerate(30);
    println!("Car speed after accelerating: {}", car.speed);

    car.brake(10);
    println!("Car speed after braking: {}", car.speed);

    car.brake(15);
    println!("Car speed after braking: {}", car.speed);
}