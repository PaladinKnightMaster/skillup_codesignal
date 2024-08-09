// const processAddresses = function(addresses) {
//     // implement this
//   }

//   // Testing the function.
//   let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
//   let uniqueAddresses = processAddresses(addresses);
//   console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]

const processAddresses = function(addresses) {
    // implement this
    return [...new Set(addresses)];
  }

  // Testing the function.
  let addresses = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
  let uniqueAddresses = processAddresses(addresses);
  console.log(uniqueAddresses); // It should return [1, 2, 3, 5, 4, 6]