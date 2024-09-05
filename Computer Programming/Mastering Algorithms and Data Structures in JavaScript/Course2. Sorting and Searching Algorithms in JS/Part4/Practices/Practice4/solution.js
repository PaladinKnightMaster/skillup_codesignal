// function partition(vehicles, low, high) {
//     let pivot = vehicles[high];
//     let i = (low - 1);
//     for (let j = low; j < high; j++) {
//         if (vehicles[j] < pivot) {
//             i++;
//             [vehicles[i], vehicles[j]] = [vehicles[j], vehicles[i]];
//         }
//     }
//     [vehicles[i + 1], vehicles[high]] = [vehicles[high], vehicles[i + 1]];
//     return i + 1;
// }

// function quickSortCars(vehicles, low, high) {
//     // TODO: implement this
// }

// let toyCars = [2, 9, 5, 1, 6, 3];
// quickSortCars(toyCars, 0, toyCars.length - 1);
// console.log(toyCars);

function partition(vehicles, low, high) {
    let pivot = vehicles[high];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
        if (vehicles[j] < pivot) {
            i++;
            [vehicles[i], vehicles[j]] = [vehicles[j], vehicles[i]];
        }
    }
    [vehicles[i + 1], vehicles[high]] = [vehicles[high], vehicles[i + 1]];
    return i + 1;
}

function quickSortCars(vehicles, low, high) {
    // TODO: implement this
    if (low < high) {
        let pi = partition(vehicles, low, high);
        quickSortCars(vehicles, low, pi - 1);
        quickSortCars(vehicles, pi + 1, high);
    }
}

let toyCars = [2, 9, 5, 1, 6, 3];
quickSortCars(toyCars, 0, toyCars.length - 1);
console.log(toyCars);