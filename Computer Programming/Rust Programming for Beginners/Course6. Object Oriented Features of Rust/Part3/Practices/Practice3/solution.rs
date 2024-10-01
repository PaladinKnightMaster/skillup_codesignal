// mod secret {
//     struct SecretBox {
//         password: String,
//         secret_number: i32,
//         color: String,
//     }

//     pub impl SecretBox {
//         fn new(password: String, secret_number: i32, color: String) -> SecretBox {
//             SecretBox { password: password, secret_number: secret_number, color: color }
//         }

//         fn reveal_secret(&self, password: &str) -> i32 {
//             if self.password == password {
//                 self.secret_number
//             } else {
//                 0
//             }
//         }
//     }
// }

// fn main() {
//     let my_secret_box = SecretBox::new(String::from("Cosmo"), 42, String::from("red"));

//     println!("Secret number: {:?}", my_secret_box.secret_number); // Expected: Secret number: 42

//     println!("Box color: {}", my_secret_box.color); // Expected: Box color: red
// }

mod secret {
    pub struct SecretBox {
        password: String,
        secret_number: i32,
        pub color: String,  // Make color public so it can be accessed outside
    }

    impl SecretBox {
        pub fn new(password: String, secret_number: i32, color: String) -> SecretBox {
            SecretBox { password: password, secret_number: secret_number, color: color }
        }

        pub fn reveal_secret(&self, password: &str) -> i32 {
            if self.password == password {
                self.secret_number
            } else {
                0
            }
        }
    }
}

fn main() {
    let my_secret_box = secret::SecretBox::new(String::from("Cosmo"), 42, String::from("red"));

    // Use the reveal_secret method to access the secret number
    println!("Secret number: {:?}", my_secret_box.reveal_secret("Cosmo")); // Expected: Secret number: 42

    // Access the color field directly since it's public
    println!("Box color: {}", my_secret_box.color); // Expected: Box color: red
}
