// a sliding window function that sums numbers in an array from a givin value
// so f([1, 2, 4, 2, 4], 2) returns 6
// f([3, 7, 1, 3, 4, 2, 6, 7, 2, 4, 2, 1], 4) returns 19
// looks for the highest sum of consecutive numbers for the givin value

const slide = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(slide([3, 7, 1, 3, 4, 2, 6, 7, 2, 4, 2, 1], 4));