// first is the pivot function that moves all values less than the pivot
// to the left of the pivot and all values greater to the right

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    const pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);

    return swapIdx;
}

//console.log(pivot([3, 2, 1, 32, 17, 7, 8, 19]));

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}

console.log(quickSort([100, -1, 3, 2, 1, 32, 17, 7, 8, 19]));