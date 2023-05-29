// Directions Reduction
// Directions: north, south, west , east
// if two subsequent directions are opposite, are canceled.
// recurive solution:
// so take out of the array the canceled directions, and try again until the simplified array
// is the same lrngth as the passed one

function dirReduc(arr) {
    const opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST",
    };
    for (let i = 1; i < arr.length; i++) {
        if (opposites[arr[i - 1]] === arr[i]) arr[i - 1] = arr[i] = "";
    }
    const simpleArr = arr.filter((el) => el !== "");
    return simpleArr.length === arr.length ? simpleArr : dirReduc(simpleArr);
}
