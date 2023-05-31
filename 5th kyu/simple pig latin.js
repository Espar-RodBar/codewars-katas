// Simple pig Latin
// Move first letter of each word to the end, and add 'ay'. Only letters.
// string -> array. transform every word, slicing the first letter, and adding to the end
// plus 'ay'. Join the array again.

function pigIt(str) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const convertedStr = str
        .split(" ")
        .map((word) => {
            // guard clause: if is a punctuation mark skip it
            if (!letters.includes(word[0])) return word;
            return word.slice(0, 1) + word.slice(1) + "ay";
        })
        .join(" ");
    return convertedStr;
}
