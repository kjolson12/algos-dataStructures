function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400, 500], 2));
