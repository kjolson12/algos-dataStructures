// a function that takes two arrays and checks if the second includes each of
// the values that are in the first but squared, order doesnt matter

// [1, 3, 2, 5] and [4, 25, 9, 1] true
// [5, 8, 2] and [64, 25, 4] true

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const arr1Count = {};
    const arr2Count = {};

    for (let val of arr1) {
        arr1Count[val] ? arr1Count[val]++ : arr1Count[val] = 1;
        // or arr1Count = (arr1Count || 0) + 1;
    }
    for (let val of arr2) {
        arr2Count[val] ? arr2Count[val]++ : arr2Count[val] = 1;
        // or arr2Count = (arr2Count || 0) + 1;
    }

    console.log(arr1Count);
    console.log(arr2Count);

    for (let key in arr1Count) {
        if (!(key ** 2 in arr2Count)) {
            return false;
        }
        if (arr1Count[key] !== arr2Count[key ** 2]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 4, 2, 5, 4], [4, 25, 16, 1, 16]));