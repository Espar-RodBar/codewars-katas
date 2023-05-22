// returns a new object, containing all of the properties of any objects passed in as parameters.
// if key exist ignore the next value. only works with objects
// ...args -> check if is object. check if exist key and add to the extended object.
var extend = function (...args) {
    const extendedObj = {};
    args.forEach((el) => {
        if (Object.getPrototypeOf(el) === Object.prototype) {
            for (const key of Object.keys(el)) {
                if (!Object.keys(extendedObj).includes(key))
                    extendedObj[`${key}`] = el[key];
            }
        }
    });
    return extendedObj;
};
