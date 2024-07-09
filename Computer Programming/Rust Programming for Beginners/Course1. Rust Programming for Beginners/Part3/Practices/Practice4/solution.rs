/*
fn main() {
    let budget_message = String::from("Budget pending approval."); // Check this line carefully
    println!("{}", budget_message);

    budget_message = "Budget approved!"; // Should budget_message be a string literal?
    println!("{}", budget_message);
}
*/
fn main() {
    let mut budget_message = String::from("Budget pending approval."); // Check this line carefully
    println!("{}", budget_message);

    budget_message = String::from("Budget approved!"); // Should budget_message be a string literal?
    println!("{}", budget_message);
}