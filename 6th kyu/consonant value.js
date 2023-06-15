// Consonant value
// filter de consonants
// get an array of each group of consonants
// get the carCodeAt score for each one and substract 96 to get the needed score
function solve(s) {
    const strAr = s.split("").map((el) => ("aeiou".includes(el) ? "" : el));
    let maxScore = 0;
    let tmpScore = 0;
    const returnMax = (a, b) => (a > b ? a : b);
    strAr.forEach((el) => {
        if (el === "") {
            maxScore = returnMax(maxScore, tmpScore);
            tmpScore = 0;
        } else tmpScore += el.charCodeAt(0) - 96;
    });
    return returnMax(maxScore, tmpScore);
}
