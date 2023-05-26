// Rot13
// simple letter substitution cipher (like Caesar one)
// Pick a letter + 13 and get the modulus
function rot13(message) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = lowerChars.toUpperCase();
    const maxLetters = lowerChars.length;

    const cipherLetter = function (letter) {
        let newLetter = letter;
        if (lowerChars.includes(letter))
            newLetter =
                lowerChars[(lowerChars.indexOf(letter) + 13) % maxLetters];
        else if (upperChars.includes(letter))
            newLetter =
                upperChars[(upperChars.indexOf(letter) + 13) % maxLetters];
        return newLetter;
    };

    return message
        .split("")
        .map((el) => cipherLetter(el))
        .join("");
}
