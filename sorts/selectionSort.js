function selectionSort(arr) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    for (let j = 0; j < arr.length; j++) {
        let small = j;
        let newSmall = false;

        for (let i = j + 1; i < arr.length; i++) {
            if (arr[small] > arr[i]) {
                small = i;
                newSmall = true;
            }

            if (i === arr.length - 1 && newSmall) {
                swap(arr, j, small);
            }
        }
    }

    return arr;
}

console.log(selectionSort([5, 3, 2, 6, 7]));