function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let half = Math.floor((end + start) / 2);

    while (arr[half] !== value && start <= end) {
        console.log(`start: ${start}, half: ${half}, end: ${end}`);

        if (arr[half] < value) {
            start = half;
        } else {
            end = half;
        }
        half = Math.floor((end + start) / 2);
    }

    if (arr[half] === value) {
        return half;
    } else return -1;
}

console.log(binarySearch([10, 22, 30, 43, 51, 62, 777, 855, 921, 1000], 777));