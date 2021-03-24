function tribonacci(sig, n) {
    let reduceArr = [...sig];
    let count = n - 3;

    while (count > 0) {
        const sum = reduceArr.reduce((a, b) => a + b);
        console.log(`sum: ${sum}`);

        sig.push(sum);
        console.log(`sig: ${sig}`);

        reduceArr.push(sum);
        reduceArr.shift();
        console.log(`reduceArr: ${reduceArr}`);

        count--;
    }

    return sig;
}

// function tribonacci(sig, n) {
//     let returnArr = [1, 1, 1];
//     let reduceArr = [1, 1, 1];
//     let count = n - 3;

//     while (count > 0) {
//         const sum = reduceArr.reduce((a, b) => a + b);
//         console.log(`sum: ${sum}`);

//         returnArr.push(sum);
//         console.log(`returnArr: ${returnArr}`);

//         reduceArr.push(sum);
//         reduceArr.shift();
//         console.log(`reduceArr: ${reduceArr}`);

//         count--;
//     }

//     return returnArr;
// }

tribonacci([1, 1, 1], 10);