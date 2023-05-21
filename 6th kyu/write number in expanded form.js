// You will be given a number and you will need to return it as a string in Expanded Form
// All numbers will be whole numbers greater than 0.
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
    const numStrAr = num.toString().split("");
    const digits = numStrAr.length - 1;
    const preExpanded = numStrAr.map(
        (el, i) => Number(el) * 10 ** (digits - i)
    );
    const expanded = preExpanded.filter((el) => el !== 0).join(" + ");

    return expanded;
}
