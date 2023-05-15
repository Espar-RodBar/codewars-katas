function sumNoDuplicates(numList) {
    numList.sort((a, b) => a - b);
    let sum = 0;
    let lastItem = numList[0];
    for (let i = 0; i < numList.length; i++) {
        if (i == 0 && numList[i] != numList[i + 1]) sum += numList[i];
        else if (lastItem !== numList[i] && numList[i] != numList[i + 1])
            sum += numList[i];
        lastItem = numList[i];
    }

    return sum;
}
