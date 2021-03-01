// helpers
// *****************

function getDigit(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
};

// function digitCount(num) {
//     return num.toString().length;
// };

// or

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function mostDigits(arr) {
    let most = 0;
    for (const num of arr) {
        const current = digitCount(num);
        if (current > most) most = current;
    }
    return most;
}

// *****************

function radixSort(arr) {
    const numLoops = mostDigits(arr);

    for (let k = 0; k < numLoops; k++) {
        const buckets = [[], [], [], [], [], [], [], [], [], []];

        for (const num of arr) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

console.log(radixSort([11, 121, 133, 6543, 1712, 2]));