// let products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 500 },
//     { name: "Earbuds", price: 300 }
//   ];

//   // TODO: Sort products alphabetically by name in ascending order
//   products.sort((a, b) => a.price - b.price);
//   console.log(products);

let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 500 },
    { name: "Earbuds", price: 300 }
  ];

  // TODO: Sort products alphabetically by name in ascending order
  products.sort((a, b) => a.name.localeCompare(b.name));
  console.log(products);
