function insertionSort(arr) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                swap(arr, j, i);
                i--;
            }
        }
    }

    return arr;
}

console.log(insertionSort([3, 15, 6, 1, 2, 7, 13, 10]));