function tribonacci(sig, n) {
    let reduceArr = [...sig];
    let count = n - 3;

    if (n <= 3) {
        return sig.slice(0, n);
    }

    while (count > 0) {
        const sum = reduceArr.reduce((a, b) => a + b);

        sig.push(sum);

        reduceArr.push(sum);
        reduceArr.shift();

        count--;
    }

    return sig;
}

tribonacci([1, 1, 1], 10);