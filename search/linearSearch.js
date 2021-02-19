function linearSearch(arr, value) {
    let count = 0;

    function helper(arr, value) {
        if (arr.length === 0) {
            return -1;
        } else if (arr[0] === value) {
            return count;
        } else {
            count++;
            return helper(arr.slice(1), value)
        }
    }

    return helper(arr, value);
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));