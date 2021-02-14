//  a function that takes two strings and checks if they are anagrams of each other

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const str1Count = {};
    const str2Count = {};

    for (let char of str1) {
        str1Count[char] ? str1Count[char]++ : str1Count[char] = 1;
    }
    for (let char of str2) {
        str2Count[char] ? str2Count[char]++ : str2Count[char] = 1;
    }
    console.log(str1Count);
    console.log(str2Count);

    for (let key in str1Count) {
        if (str1Count[key] !== str2Count[key]) {
            return false
        }
    }
    return true
}

console.log(anagram('meats', 'teams'));