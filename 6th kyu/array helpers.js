// Array Helpers
// extend the built-in Array class with the
// following methods: square(), cube(), average(), sum(), even() and odd().
// res: Inheritance using prototype chanining
Array.prototype.square = function () {
    return this.map((el) => el * el);
};
Array.prototype.cube = function () {
    return this.map((el) => el * el * el);
};
Array.prototype.sum = function () {
    return this.reduce((total, el) => (total += el), 0);
};

Array.prototype.average = function () {
    return this.sum() / this.length;
};

Array.prototype.even = function () {
    return this.filter((el) => el % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((el) => el % 2 !== 0);
};
