// Define a struct
struct Employee {
    employee_id: u32,
    salary: f64,
}

// Implement methods for the struct
impl Employee {

    // Method to calculate tax
    fn calculate_tax(&self, tax_rate: f64) -> f64 {
        self.salary * (tax_rate / 100.0)
    }

    // Method to update the salary
    fn update_salary(&mut self, new_salary: f64) {
        self.salary = new_salary;
    }

    // Associated function (constructor)
    fn new(employee_id: u32, salary: f64) -> Employee {
        Employee { employee_id: employee_id, salary: salary }
    }
}

fn main() {
    // Create an instance using the associated function
    let mut emp = Employee::new(1, 50000.0);

    // Call methods on the struct
    println!("Initial Salary: ${}", emp.salary);
    let tax = emp.calculate_tax(10.0);
    println!("Tax at 10%: ${}", tax);
    emp.update_salary(60000.0);
    println!("Updated Salary: ${}", emp.salary);
}