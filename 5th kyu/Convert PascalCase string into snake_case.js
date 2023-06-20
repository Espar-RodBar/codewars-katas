// "A" 65. "Z" 90
// PascalCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If the method gets a number as
// input, it should return a string.

function toUnderscore(string) {
    const str = string.toString();
    return str
        .split("")
        .map((el, i) => {
            const charValue = el.charCodeAt(0);
            if (charValue >= 65 && charValue <= 90)
                return (i === 0 ? "" : "_") + el.toLowerCase();
            return el;
        })
        .join("");
}
