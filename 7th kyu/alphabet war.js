function alphabetWar(fight) {
    const left = ["s", "b", "p", "w"];
    const right = ["z", "d", "q", "m"];
    let leftPts = 0;
    let rightPts = 0;
    fight.split("").forEach((letter) => {
        if (left.includes(letter)) leftPts += left.indexOf(letter) + 1;
        if (right.includes(letter)) rightPts += right.indexOf(letter) + 1;
    });

    return leftPts > rightPts
        ? "Left side wins!"
        : leftPts < rightPts
        ? "Right side wins!"
        : "Let's fight again!";
}
