Array.prototype.remove_ = function (integer_list, values_list) {
    //your code here
    return integer_list.filter((el) => !values_list.includes(el));
};
