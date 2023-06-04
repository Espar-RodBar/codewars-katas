// Create Phone Number
// array of 10 integers -> "(123) 456-7890"
// get the array, and join the first 3 digits between () and the last 7 with a -
function createPhoneNumber(n) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}
