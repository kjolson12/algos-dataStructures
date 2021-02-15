function averagePair(arr, target) {
    let point1 = 0;
    let point2 = arr.length - 1;

    if (arr.length === 0) return false;

    while (point1 !== point2) {
        let avg = (arr[point1] + arr[point2]) / 2;
        console.log(avg);

        if (avg === target) {
            return true
        } else if (avg < target) {
            point1++;
        } else if (avg > target) {
            point2--;
        }
    }

    return false
}

console.log(averagePair([-1, 0, 1, 2, 3, 4, 5], 4));