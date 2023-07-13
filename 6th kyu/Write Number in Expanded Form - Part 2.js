// Write Number in Expanded Form - Part 2
/*
expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
*/
function expandedForm(num) {
    const [integralNum, fractionNum] = num.toString().split(".");
    let output = [];
    for (let i = 0; i < integralNum.length; i++) {
        if (integralNum[i] !== "0")
            output.push(
                integralNum[i] + "0".repeat(integralNum.length - i - 1)
            );
    }
    for (let i = 0; i < fractionNum.length; i++) {
        if (fractionNum[i] !== "0")
            output.push(fractionNum[i] + "/1" + "0".repeat(i + 1));
    }
    return output.join(" + ");
}
