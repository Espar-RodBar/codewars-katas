function isItANum(str) {
    // your code here;
    const numbers = "0123456789";
    const number = str
        .split("")
        .filter((el) => numbers.includes(el))
        .join("");
    return number && number.slice(0, 1) === "0" && number.length === 11
        ? number
        : "Not a phone number";
}
