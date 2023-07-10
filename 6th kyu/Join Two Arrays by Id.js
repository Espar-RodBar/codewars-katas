/*
Join two arrays by id
Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input.
-The objects with unique id values from arr1 and arr2 should be included in the joinedArray without modification.
-If two objects share the same id, their properties should be merged into a single object.
The joinedArray should be sorted in ascending order based on the id key.
*/
function joinArraysById(arr1, arr2) {
    const joinedAr = [...arr1];
    arr2.forEach((elAr2) => {
        const elem1 = arr1.find((elAr1) => elAr1["id"] === elAr2["id"]);
        const elem2 = elAr2;
        if (elem1) {
            // Check data inside...
            for (const key of Object.keys(elem2)) {
                elem1[key] = elem2[key];
            }
        } else joinedAr.push(elAr2);
    });
    joinedAr.sort((a, b) => a.id - b.id);
    return joinedAr;
}
