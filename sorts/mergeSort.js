// first just merge two sorted arrays

function merge(arr1, arr2) {
    let arr = [];

    let point1 = 0;
    let point2 = 0;

    while (point1 < arr1.length && point2 < arr2.length) {
        if (arr1[point1] < arr2[point2]) {
            arr.push(arr1[point1]);
            point1++;
        } else {
            arr.push(arr2[point2]);
            point2++;
        }
    }

    while (point1 < arr1.length) {
        arr.push(arr1[point1]);
        point1++
    }
    while (point2 < arr2.length) {
        arr.push(arr2[point2]);
        point2++
    }

    return arr;
}

// console.log(merge([1, 4, 5, 6, 7, 11], [2, 4, 6, 8, 9]));

// recursive function that splits the array down to 1 element arrays
// then calls the merge funtion to bring it all together

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([13, 41, 15, 6, 76, 111, 2, 43, 64, 8, 19]));