fn main() {
    let account_balance: f32 = 13458.23; // Balance in dollars
    let is_budget_approved: bool = true; // Status of the budget
    let expense_category: char = 'T'; // Category 'T' for travel expenses
    let financial_statement = String::from("All finances are accounted for.");

    println!("Account Balance: ${:.2}", account_balance); // {:.2} ensures account_balance is printed with exactly 2 decimal points
    println!("Is the budget approved? {}", is_budget_approved);
    println!("Expense Category: {}", expense_category);
    println!("{}", financial_statement);
}