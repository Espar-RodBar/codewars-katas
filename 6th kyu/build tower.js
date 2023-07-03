/*
Build Tower

Build a pyramid-shaped tower, as an array/list of strings,
given a positive integer number of floors.
A tower block is represented with "*" character.
n=3
[
  "  *  ",
  " *** ", 
  "*****"
]

every floor to up has " "*floor at each side.
*/
function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
        const floor =
            " ".repeat(i) + "*".repeat((nFloors - i) * 2 - 1) + " ".repeat(i);
        tower.unshift(floor);
    }
    return tower;
}
