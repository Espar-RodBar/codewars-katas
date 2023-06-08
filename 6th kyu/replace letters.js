function replaceLetters(word) {
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const consonants = [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const vowels = ["a", "e", "i", "o", "u"];
    function findRightVowel(letter) {
        const actualIndex = alphabet.indexOf(letter);
        let newIndex = null;
        for (let i = actualIndex; consonants.includes(alphabet[i]); i++) {
            newIndex = i;
        }
        return newIndex + 1 === alphabet.length
            ? alphabet[0]
            : alphabet[newIndex + 1];
    }
    function findLeftConsonant(letter) {
        const actualIndex = alphabet.indexOf(letter);
        if (actualIndex !== 0) return alphabet[actualIndex - 1];
        return alphabet[alphabet.length - 1];
    }
    return word
        .split("")
        .map((el) =>
            consonants.includes(el) ? findRightVowel(el) : findLeftConsonant(el)
        )
        .join("");
}
