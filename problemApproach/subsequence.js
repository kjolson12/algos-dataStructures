function isSubsequence(str1, str2) {
    let point1 = 0;
    let point2 = 0;

    if (str1.length > str2.length) return false;

    while (point1 < str1.length && point2 < str2.length) {
        if (str1[point1] === str2[point2]) {
            point1++;
            point2++;
        } else if (str1[point1] !== str2[point2]) {
            point2++;
        }
    }

    if (point1 === str1.length) {
        return true
    }
    if (point2 === str2.length) {
        return false
    }
}

console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'ahnbjduec'));
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('trains', 'training'));