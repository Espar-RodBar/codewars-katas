// Vowels Back
/*
- consonants forward 9, vowels back 5
- If they pass 'z', start again at 'a'. If they pass 'a', start again at 'z'.
- If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
- f a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
*/
function cypher(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const special = "code";
    const vowels = "aeiou";
    let cyphLetter = null;
    let newIndex = null;

    // check if special cases and return
    if (special.includes(letter)) {
        switch (letter) {
            case "c":
                cyphLetter = "b";
                break;
            case "o":
                cyphLetter = "n";
                break;
            case "d":
                cyphLetter = "a";
                break;
            case "e":
                cyphLetter = "a";
                break;
        }
        return cyphLetter;
    }

    // calculate new index
    if (vowels.includes(letter)) {
        newIndex = (alphabet.indexOf(letter) - 5 + 26) % 26;
    } else {
        newIndex = (alphabet.indexOf(letter) + 9 + 26) % 26;
    }

    cyphLetter = alphabet[newIndex];

    // if the cypher letter is one of the special, return without cypher
    return special.includes(cyphLetter) ? letter : cyphLetter;
}

function vowelBack(s) {
    let cypheredS = "";
    for (let i = 0; i < s.length; i++) {
        cypheredS += cypher(s[i]);
    }

    return cypheredS;
}
