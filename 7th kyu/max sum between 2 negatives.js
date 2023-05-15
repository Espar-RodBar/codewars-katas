function maxSumBetweenTwoNegatives(a) {
    let isBetween = false;
    let sum = 0;
    let maxSum = -1;
    for (let i = 0; i < a.length; i++) {
        if (isBetween && a[i] > 0) {
            sum += a[i];
        } else if (a[i] < 0 && isBetween) {
            // isBetween = !isBetween
            maxSum = maxSum < sum ? sum : maxSum;
            sum = 0;
        } else if (a[i] < 0 && !isBetween) {
            isBetween = !isBetween;
        }
    }
    return maxSum;
}
