// a function that takes a sorted array or string and finds the first pair of
// numbers where their sum is zero

const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -2, -1, 0, 1, 3, 5]));