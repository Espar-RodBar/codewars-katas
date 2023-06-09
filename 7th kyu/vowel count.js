// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str
        .split("")
        .reduce(
            (total, letter) => (vowels.includes(letter) ? total + 1 : total),
            0
        );
}
