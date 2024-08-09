// use std::collections::HashSet;

// fn main() {
//     // Create new HashSet
//     let mut student_ids: HashSet<i32> = HashSet::new();

//     // Add values to HashSet
//     student_ids.insert(1);
//     student_ids.insert(2);
//     student_ids.insert(3);

//     // Remove values from HashSet
//     student_ids.remove(2);

//     // Check membership in HashSet
//     let has_id_1 = student_ids.contains(1);
//     let has_id_2 = student_ids.contains(2);
//     println!("Student 1 present: {}. Student 2 present: {}", has_id_1, has_id_2);
// }

use std::collections::HashSet;

fn main() {
    // Create new HashSet
    let mut student_ids: HashSet<i32> = HashSet::new();

    // Add values to HashSet
    student_ids.insert(1);
    student_ids.insert(2);
    student_ids.insert(3);

    // Remove values from HashSet
    student_ids.remove(&2);

    // Check membership in HashSet
    let has_id_1 = student_ids.contains(&1);
    let has_id_2 = student_ids.contains(&2);
    println!("Student 1 present: {}. Student 2 present: {}", has_id_1, has_id_2);
}