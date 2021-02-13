// add numbers up from 1 to n

const add = n => {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    };

    return total;
};

console.log(add(2));