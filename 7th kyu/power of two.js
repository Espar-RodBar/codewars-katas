function isPowerOfTwo(n) {
    //.. should return true or false ..
    if (!n % 2) return false;
    else if (n === 2) return true;
    else if (n === 1) return true;
    else return isPowerOfTwo(n / 2);
}
