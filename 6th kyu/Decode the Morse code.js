// write a simple Morse code decoder
// The Morse code table is preloaded for you as a dictionary, feel free to use it:MORSE_CODE['.--']
// each letter is separated by " ", and each word by "   ".
decodeMorse = function (morseCode) {
    const trimmedCode = morseCode.trim();
    const splittedWords = trimmedCode.split("   ");
    const decoded = splittedWords.map((word) => {
        return word
            .split(" ")
            .map((letter) => MORSE_CODE[letter])
            .join("");
    });
    return decoded.join(" ");
};
