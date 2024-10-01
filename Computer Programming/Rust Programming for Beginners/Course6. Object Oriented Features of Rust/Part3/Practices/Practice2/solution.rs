// mod subscription {
//   pub struct SubscriptionAccount {
//       balance: f32,
//       pub name: String,
//   }

//   impl SubscriptionAccount {
//       pub fn new(balance: f32, name: String) -> SubscriptionAccount {
//           SubscriptionAccount { balance: balance, name: name }
//       }

//       pub fn pay_subscription(&mut self, amount: f32) -> String {
//           if self.balance >= amount {
//               self.balance -= amount;
//               format!("Account balance: ${}", self.balance)
//           } else {
//               String::from("Insufficient Funds")
//           }
//       }

//       pub fn get_balance(&self) -> f32 {
//           self.balance
//       }

//       pub fn add_funds(&mut self, amount: f32) {
//           self.balance += amount;
//       }
//   }
// }

// fn main() {
//   // TODO: Create a subscription account with a balance of $100.0 and name of Cosmo
//   let mut my_account = ______

//   // TODO: Print the account name
//   println!("Account belongs to {}", _____); // Expected: Account belongs to Cosmo

//   // TODO: Add $50 to the account

//   // TODO: Print the new account balance
//   println!("Balance after adding funds: ${}", ______); // Expected: Balance after adding funds: $150.0

//   // TODO: Make a payment of $20 and print the result of the method

//   println!("{}", ________); // Expected: Account balance: $130.0

//   // TODO: Attempt to make a payment of $150 and print the result of the method
//   println!("{}", _______); // Expected: Insufficient Funds

//   // TODO: Print the final balance of the account
//   println!("Final balance: ${}", ______); // Expected: Final balance: $130.0
// }

mod subscription {
  pub struct SubscriptionAccount {
      balance: f32,
      pub name: String,
  }

  impl SubscriptionAccount {
      pub fn new(balance: f32, name: String) -> SubscriptionAccount {
          SubscriptionAccount { balance: balance, name: name }
      }

      pub fn pay_subscription(&mut self, amount: f32) -> String {
          if self.balance >= amount {
              self.balance -= amount;
              format!("Account balance: ${}", self.balance)
          } else {
              String::from("Insufficient Funds")
          }
      }

      pub fn get_balance(&self) -> f32 {
          self.balance
      }

      pub fn add_funds(&mut self, amount: f32) {
          self.balance += amount;
      }
  }
}

fn main() {
  // Create a subscription account with a balance of $100.0 and name of Cosmo
  let mut my_account = subscription::SubscriptionAccount::new(100.0, String::from("Cosmo"));

  // Print the account name
  println!("Account belongs to {}", my_account.name); // Expected: Account belongs to Cosmo

  // Add $50 to the account
  my_account.add_funds(50.0);

  // Print the new account balance
  println!("Balance after adding funds: ${}", my_account.get_balance()); // Expected: Balance after adding funds: $150.0

  // Make a payment of $20 and print the result of the method
  println!("{}", my_account.pay_subscription(20.0)); // Expected: Account balance: $130.0

  // Attempt to make a payment of $150 and print the result of the method
  println!("{}", my_account.pay_subscription(150.0)); // Expected: Insufficient Funds

  // Print the final balance of the account
  println!("Final balance: ${}", my_account.get_balance()); // Expected: Final balance: $130.0
}
