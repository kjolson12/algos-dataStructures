function sameFrequency(num1, num2) {
    const arr1 = num1.toString();
    const arr2 = num2.toString();

    const arr1Count = {};
    const arr2Count = {};

    for (let num of arr1) {
        arr1Count[num] ? arr1Count[num]++ : arr1Count[num] = 1;
    }
    for (let num of arr2) {
        arr2Count[num] ? arr2Count[num]++ : arr2Count[num] = 1;
    }

    console.log(arr1Count);
    console.log(arr2Count);


    if (arr1.length !== arr2.length) {
        return false
    }

    for (let key in arr1Count) {
        if (arr1Count[key] !== arr2Count[key]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(124344443, 444432431));