// Move all the zeros to the end.
// Filter the values that are not 0.
// Add the difference of length in zeros at the end
function moveZeros(arr) {
    const filteredArr = arr.filter((el) => el !== 0);
    const zeros = [];
    for (let i = 0; i < arr.length - filteredArr.length; i++) {
        zeros.push(0);
    }
    return [...filteredArr, ...zeros];
}
