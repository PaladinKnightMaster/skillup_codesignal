/*
fn main() {
    // Variables representing the level of oxygen in the submarine and the required minimum before dive.
    let current_oxygen: i32 = 150;
    let required_oxygen: i32 = 150;
    let hull_integrity_check: bool = false;

    // Check if there is adequate oxygen AND if the pre-dive hull integrity check is complete.
    println!("{}", current_oxygen >= required_oxygen || hull_integrity_check);
}
*/
fn main() {
    // Variables representing the level of oxygen in the submarine and the required minimum before dive.
    let current_oxygen: i32 = 150;
    let required_oxygen: i32 = 150;
    let hull_integrity_check: bool = false;

    // Check if there is adequate oxygen AND if the pre-dive hull integrity check is complete.
    println!("{}", current_oxygen >= required_oxygen && hull_integrity_check);
}