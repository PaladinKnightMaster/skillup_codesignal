// Define a trait named `Shape`
trait Shape {
    fn area(&self) -> f32;
    fn print(&self) { println!("This is the default shape method");}
}

// Define a struct for Circle
struct Circle {
    radius: f32,
}

// Define a struct for Rectangle
struct Rectangle {
    width: f32,
    height: f32,
}

// Implement the Shape trait for Circle
impl Shape for Circle {
    fn area(&self) -> f32 {
        3.14159 * self.radius * self.radius
    }
}

// Implement the Shape trait for Rectangle
impl Shape for Rectangle {
    fn area(&self) -> f32 {
        self.width * self.height
    }

    fn print(&self) {
        println!("Rectangle with width = {} and height = {}", self.width, self.height);
    }
}

fn get_area<T: Shape>(shape: &T) -> f32 {
    shape.area()
}

fn main() {
    let circle = Circle { radius: 10.0 };
    let rectangle = Rectangle { width: 10.0, height: 20.0 };

    circle.print();
    rectangle.print();
    let circle_area = get_area(&circle);
    let rectangle_area = get_area(&rectangle);
    println!("Circle area = {}", circle_area);
    println!("Rectangle area = {}", rectangle_area);
}