let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
  ];

  products.sort((a, b) => a.price - b.price); // Sort by price in ascending order
  console.log(products);