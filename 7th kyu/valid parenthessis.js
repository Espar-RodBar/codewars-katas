function validParentheses(parenStr) {
    // Your code here
    let parenthesesOpen = 0;
    let isValid = true;
    const parArr = parenStr.split("");
    if (
        (parArr[0] !== "(" || parArr[parArr.length - 1] !== ")") &&
        parArr.length > 0
    )
        isValid = false;
    for (let i = 0; i < parArr.length; i++) {
        parArr[i] === "(" ? parenthesesOpen++ : parenthesesOpen--;
        if (parenthesesOpen < 0) {
            isValid = false;
            break;
        }
    }
    if (parenthesesOpen !== 0) isValid = false;
    return isValid;
}
