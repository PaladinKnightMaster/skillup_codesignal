// function countCakeLayers(layers) {
//     if(layers === 1) {
//       return 1; // Only one layer
//     } else {
//       return 1 + countCakeLayers(layers - 1); // Count this layer plus the rest
//     }
//   }

// console.log(countCakeLayers(5)); // Should print 5

function countCakeLayers(layers) {
    console.log(layers)
    if(layers === 1) {
      return 1; // Only one layer
    } else {
      return 1 + countCakeLayers(layers - 1); // Count this layer plus the rest
    }
  }

  console.log(countCakeLayers(5)); // Should print 5