// mod company {
//     pub struct Employee {
//         salary: f32,
//         pub name: String,
//         is_great: bool,
//     }

//     impl Employee {
//         pub fn new(salary: f32, name: String, is_great: bool) -> Employee {
//             Employee { salary: salary, name: name, is_great: is_great }
//         }

//         // TODO: Implement a public method request_raise
//             // The method takes in &mut self and amount
//             // If the employee is_great field is true, call update_salary and print the new salary
//             // If not, print "Raise denied."
//             // Don't return anything


//         // TODO: Implement a private method update_salary
//             // The method takes in &mut self and amount (f32)
//             // Increase the salary by amount
//             // Don't return anything

//     }
// }

// fn main() {
//     let mut employee = company::Employee::new(50000.0, String::from("Cosmo"), true);

//     println!("Employee name: {}", employee.name); // Prints: Employee name: Cosmo

//     employee.request_raise(5000.0); // Expected: Raise approved! Salary is now $55000
// }

mod company {
    pub struct Employee {
        salary: f32,
        pub name: String,
        is_great: bool,
    }

    impl Employee {
        pub fn new(salary: f32, name: String, is_great: bool) -> Employee {
            Employee {
                salary,
                name,
                is_great,
            }
        }

        // Public method to request a raise
        pub fn request_raise(&mut self, amount: f32) {
            if self.is_great {
                self.update_salary(amount);
                println!("Raise approved! Salary is now ${}", self.salary);
            } else {
                println!("Raise denied.");
            }
        }

        // Private method to update the salary
        fn update_salary(&mut self, amount: f32) {
            self.salary += amount;
        }
    }
}

fn main() {
    let mut employee = company::Employee::new(50000.0, String::from("Cosmo"), true);

    println!("Employee name: {}", employee.name); // Prints: Employee name: Cosmo

    employee.request_raise(5000.0); // Expected: Raise approved! Salary is now $55000
}
