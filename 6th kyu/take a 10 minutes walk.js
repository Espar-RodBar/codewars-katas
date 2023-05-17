function isValidWalk(walk) {
    //guard clause
    if (walk.length !== 10) return false;

    const directions = {
        n: 1,
        s: -1,
        w: 1,
        e: -1,
    };

    const position = { x: 0, y: 0 };
    walk.forEach((el) => {
        if (el === "n" || el === "s") position.x += directions[el];
        if (el === "w" || el === "e") position.y += directions[el];
    });

    if (position.x === 0 && position.y === 0) return true;
    return false;
}
