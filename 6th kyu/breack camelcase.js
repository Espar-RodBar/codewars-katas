// Break camelCase
// break up camel casing, using a space between words.
// Loop for every letter checking if is upperCase.
function solution(string) {
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const breackString = [];
    string.split("").forEach((letter) => {
        breackString.push((upperLetters.includes(letter) ? " " : "") + letter);
    });
    return breackString.join("");
}
