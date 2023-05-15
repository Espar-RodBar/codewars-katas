function isOddHeavy(n) {
    const oddArr = [];
    const evenArr = [];
    let isOddH;
    n.forEach((el) => {
        if (el % 2 === 0) evenArr.push(el);
        else oddArr.push(el);
    });
    oddArr.sort((a, b) => a - b);
    evenArr.sort((a, b) => a - b);

    if (!oddArr.length || !n.length) isOddH = false;
    else if (!evenArr.length && n.length) isOddH = true;
    else if (oddArr[0] > evenArr[evenArr.length - 1]) isOddH = true;
    else isOddH = false;

    return isOddH;
}
