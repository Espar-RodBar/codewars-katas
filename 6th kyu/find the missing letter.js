function findMissingLetter(array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstInd = alphabet.indexOf(array[0]);
    for (let i = firstInd; i < array.length + firstInd; i++) {
        if (alphabet.indexOf(array[i - firstInd]) !== i) return alphabet[i];
    }
    return " ";
}
