// count the number of unique values in a sorted list or array

const countUnique = arr => {
    const count = [];

    for (let num of arr) {
        if (!count.includes(num)) {
            count.push(num);
        }
    }

    return count.length;
}

// i believe the time complexity is O(n^2).... since includes is n and its nested
// in a for of

//console.log(countUnique([2, 3, 3, 3, 4, 5, 5, 5]));

const countUnique2 = arr => {
    let point1 = 0;
    let point2 = 1;

    while (point2 < arr.length) {
        if (arr[point1] === arr[point2]) {
            point2++
        } else if (arr[point1] < arr[point2]) {
            point1++;
            arr[point1] = arr[point2];
        }
    }

    return arr.indexOf(arr[point1]) + 1;
}

console.log(countUnique2([1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5]));
console.log(countUnique2[1, 1, 1, 1, 1, 2]);