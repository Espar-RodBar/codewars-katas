function twoSum(numbers, target) {
    let firstNumInd = null;
    let secondNumInd = null;
    for (let found = false, i = 0; !found && i < numbers.length; i++) {
        for (let j = 1; !found && j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                firstNumInd = i;
                secondNumInd = j;
                found = true;
            }
        }
    }
    return [firstNumInd, secondNumInd];
}
