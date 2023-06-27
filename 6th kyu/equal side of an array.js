// Equal Sides Of An Array
/*
find an index N where the sum of the integers to the left of N is equal to
the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

res: slice the array in two parts and check them. From index 0 up to length.
*/
function findEvenIndex(arr) {
    //Code goes here!
    const maxInd = arr.length;
    const midIndex = arr.length % 2 !== 0 ? Math.floor(arr.length / 2) : null;
    const minInd = 0;
    let indexN = null;

    for (let i = minInd; i < maxInd; i++) {
        indexN = i;

        // check if the two sides without the  middle index
        const sumLeft = arr.slice(minInd, indexN).reduce((a, b) => a + b, 0);
        const sumRight = arr
            .slice(indexN + 1, maxInd)
            .reduce((a, b) => a + b, 0);

        if (sumLeft === sumRight) return indexN;
    }
    return -1;
}
