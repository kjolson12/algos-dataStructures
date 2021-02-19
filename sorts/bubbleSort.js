function bubbleSort(arr) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < (i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([44, 23, 12, 45, 8, 7, 15, 43]));