mod bank {
    pub struct BankAccount {
        balance: f32,
        pub name: String,
    }

    impl BankAccount {
        pub fn new(balance: f32, name: String) -> BankAccount {
            BankAccount { balance: balance, name: name }
        }

        pub fn deposit(&mut self, amount: f32) {
            self.balance += amount;
        }

        pub fn get_balance(&self) -> f32 {
            self.balance
        }

        pub fn withdraw(&mut self, amount: f32) -> String {
            if self.balance >= amount {
                self.balance -= amount;
                String::from("Account balance: $") + &self.balance.to_string()
            } else {
                String::from("Insufficient Funds")
            }
        }
    }
}

fn main() {
    let mut my_account = bank::BankAccount::new(1000.0, String::from("Cosmo"));

    my_account.deposit(500.0);

    println!("{}", my_account.withdraw(300.5)); // Prints: Account balance: $1199.5
    println!("{}", my_account.withdraw(2000.0)); // Prints: Insufficient Funds

    // my_account.balance -= 2000.0 // Causes error since `balance` is private

    println!("Final balance: ${}", my_account.get_balance()); // Prints: Final balance: $1199.5

    println!("Account belongs to {}", my_account.name); // Prints: Account belongs to Cosmo
}