// String incrementer
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(strng) {
    const numbers = "0123456789";
    let isNumber = true;
    let i = strng.length - 1;

    while (isNumber || i === 0) {
        if (!numbers.includes(strng[i])) {
            isNumber = false;
            break;
        } else i--;
    }
    const newStrAr = [strng.slice(0, i + 1), strng.slice(i + 1)];
    const numLength = newStrAr[1].length;
    newStrAr[1] = (Number(newStrAr[1]) + 1).toString().padStart(numLength, "0");
    return newStrAr.join("");
}
