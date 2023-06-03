// First non-repeating character
// Show unique char of the string, upper case and lower are considered the same, but the
// letter returned has to be in the initial case. 'sTresS' -> 'T'
// Solution: make a copy of the array and convert to Upper.
// Pick every letter and compare first in last index, if is the same position, is Unique.
// use this index found in the original string
function firstNonRepeatingLetter(s) {
    const upperS = s
        .split("")
        .map((el) =>
            "abcdefghijklmnopqrstuvwxyz".includes(el) ? el.toUpperCase() : el
        );

    for (let i = 0; i < upperS.length; i++) {
        if (upperS.indexOf(upperS[i]) === upperS.lastIndexOf(upperS[i])) {
            return s[upperS.indexOf(upperS[i])];
        }
    }
    return "";
}
