// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once.
// Loop for every letter of string and change alphabet value '-'
// at the end loop alphabet and check if there a non '-' inside
function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    string
        .toLowerCase()
        .split("")
        .forEach((letter) => {
            if (letter !== " ") alphabet = alphabet.replace(letter, "-");
        });
    let isPangram = true;
    alphabet.split("").forEach((letter) => {
        if (letter !== "-") isPangram = false;
    });

    return isPangram;
}
