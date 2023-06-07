// Convert string to camel case
// Convert into camelCase or PascalCase, when needed
// Pick the word, split it, and apply toUpperCase to all first letters except the first part.
function toCamelCase(str) {
    const splitStr = str
        .split("-")
        .map((word) => word.split("_"))
        .flat();
    const camelStr = splitStr
        .map((word, i) => {
            return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
        })
        .join("");
    return camelStr;
}
