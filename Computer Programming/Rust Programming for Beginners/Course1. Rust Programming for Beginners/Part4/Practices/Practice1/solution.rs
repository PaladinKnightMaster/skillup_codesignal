fn main() {
    let students_present = 12;
    let seating_capacity = 15;

    let has_space_for_more = students_present < seating_capacity;
    println!("Can we fit more students in the classroom? {}", has_space_for_more);
}