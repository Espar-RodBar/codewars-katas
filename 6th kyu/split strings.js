// Split Strings
// Split in an array, which every element has two letters
// if the last one it's alone, add a '_' to the end.
function solution(str) {
    let strSize = str.length;
    const lettersAr = (str + (strSize % 2 !== 0 ? "_" : "")).split("");
    strSize = lettersAr.length;
    const stringSplitted = [];
    for (let i = 0; i < strSize - 1; i += 2) {
        stringSplitted.push(lettersAr[i] + lettersAr[i + 1]);
    }
    return stringSplitted;
}
