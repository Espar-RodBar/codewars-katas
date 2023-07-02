/* SCRAMBLIES
 function scramble(str1, str2) that returns true
  if a portion of str1 characters can be rearranged to match str2,
   otherwise returns false.
*/

// function to convert a string in a map with the repetitions of the words
function countLetters(string) {
    const lettersMap = new Map();
    string.split("").forEach((letter) => {
        if (lettersMap.has(letter)) {
            lettersMap.set(letter, lettersMap.get(letter) + 1);
        } else lettersMap.set(letter, 1);
    });
    return lettersMap;
}

function scramble(str1, str2) {
    const lettersPool = countLetters(str1);
    const lettersToSeek = countLetters(str2);

    for (const letter of lettersToSeek.keys()) {
        // check if a letter is not found
        if (!lettersPool.has(letter)) return false;
        // check if not enough letters
        if (lettersPool.get(letter) < lettersToSeek.get(letter)) return false;
    }
    return true;
}
