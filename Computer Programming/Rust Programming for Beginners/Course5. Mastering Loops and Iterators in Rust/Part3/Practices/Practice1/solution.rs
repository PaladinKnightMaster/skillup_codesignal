fn main() {

    let mut num = 0;
    loop {
        if num > 10 {
            break;
        }
        if num % 2 != 0 {
            num += 1;
            continue;
        }
        println!("{} is even", num);
        num += 1;
    }
}