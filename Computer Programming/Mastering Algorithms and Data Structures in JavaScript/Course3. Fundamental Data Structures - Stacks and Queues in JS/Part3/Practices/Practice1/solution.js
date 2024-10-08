// function findPrecedingBiggerPlanets(arr) {
//     let stack = [];
//     let result = new Array(arr.length).fill(-1);

//     for (let i = 0; i < arr.length; i++) {
//         // TODO: implement this
//     }
//     return result;
// }


// console.log(findPrecedingBiggerPlanets([1, 3, 2, 5, 4, 7]));
// // Output: [ -1, -1, 3, -1, 5, -1 ]
// console.log(findPrecedingBiggerPlanets([1, 2, 3, 4]));
// // Output: [ -1, -1, -1, -1 ]

function findPrecedingBiggerPlanets(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        // TODO: implement this
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
}

console.log(findPrecedingBiggerPlanets([1, 3, 2, 5, 4, 7]));
// Output: [ -1, -1, 3, -1, 5, -1 ]
console.log(findPrecedingBiggerPlanets([1, 2, 3, 4]));
// Output: [ -1, -1, -1, -1 ]