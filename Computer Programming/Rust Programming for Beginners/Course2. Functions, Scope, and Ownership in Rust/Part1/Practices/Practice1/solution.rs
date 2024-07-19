fn display_brewing_result(num_of_potions: i32) {
    println!("We concocted {} potent health potions!", num_of_potions);
}

fn brew_health_potions(vial_count: i32, health_per_vial: i32) -> i32 {
    vial_count * health_per_vial // No semicolon because this value should be returned
}

fn main() {
    display_brewing_result(7);
    let total_health = brew_health_potions(7, 20);
    println!("We brewed health potions with a total of {} health points!", total_health);
}