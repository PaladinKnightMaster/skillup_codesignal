// function frequentUser(visits) {
//     // implement this
//     return -1;
//   }

//   console.log(`Frequent User: ${frequentUser([1,2,3,1,2,3,1,2,3,1])}`);  // Expected output: 1
//   console.log(`Frequent User: ${frequentUser([5,0,5,0,5,0,5,0,1,1,1,1,1])}`);  // Expected output: 5
//   console.log(`Frequent User: ${frequentUser([3,2,2,1,3,2,3,0,0,1,1,4])}`);  // Expected output: -1

function frequentUser(visits) {
    const n = visits.length;
    const threshold = Math.floor(n / 4);
    const countMap = new Map();

    // Count the frequency of each identifier
    for (const visit of visits) {
        if (visit === 0) continue;  // Ignore the identifier when it is zero

        if (countMap.has(visit)) {
            countMap.set(visit, countMap.get(visit) + 1);
        } else {
            countMap.set(visit, 1);
        }
    }

    // Find the identifier that occurs more than n/4 times
    for (const [identifier, count] of countMap.entries()) {
        if (count > threshold) {
            return identifier;
        }
    }

    // If no identifier meets the condition, return -1
    return -1;
}

console.log(`Frequent User: ${frequentUser([1,2,3,1,2,3,1,2,3,1])}`);  // Expected output: 1
console.log(`Frequent User: ${frequentUser([5,0,5,0,5,0,5,0,1,1,1,1,1])}`);  // Expected output: 5
console.log(`Frequent User: ${frequentUser([3,2,2,1,3,2,3,0,0,1,1,4])}`);  // Expected output: -1

// Optimized Version
/*
function frequentUser(visits) {
    const n = visits.length;
    const threshold = Math.floor(n / 4);
    const countMap = visits.reduce((map, id) => id !== 0 ? map.set(id, (map.get(id) || 0) + 1) : map, new Map());

    return [...countMap.entries()].find(([_, count]) => count > threshold)?.[0] ?? -1;
  }

  console.log(`Frequent User: ${frequentUser([1,2,3,1,2,3,1,2,3,1])}`);  // Expected output: 1
  console.log(`Frequent User: ${frequentUser([5,0,5,0,5,0,5,0,1,1,1,1,1])}`);  // Expected output: 5
  console.log(`Frequent User: ${frequentUser([3,2,2,1,3,2,3,0,0,1,1,4])}`);  // Expected output: -1
*/