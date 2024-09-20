// let products = [
//     { category: "Electronics", price: 299 },
//     { category: "Books", price: 19 },
//     { category: "Electronics", price: 199 },
//     { category: "Books", price: 29 }
//   ];

//   products.sort((a, b) => {
//     // TODO: sort by category first, and then by price in case of a tie
//   });

//   console.log(products);

let products = [
    { category: "Electronics", price: 299 },
    { category: "Books", price: 19 },
    { category: "Electronics", price: 199 },
    { category: "Books", price: 29 }
  ];

  products.sort((a, b) => {
    // TODO: sort by category first, and then by price in case of a tie
    if (a.category < b.category) {
      return -1;
    } else if (a.category > b.category) {
      return 1;
    } else {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  console.log(products);