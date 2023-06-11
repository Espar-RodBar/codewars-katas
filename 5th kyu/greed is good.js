function score(dice) {
    const rolls = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };
    dice.forEach((rol) => (rolls[rol] += 1));
    let points = 0;
    for (const roll of Object.keys(rolls)) {
        for (let i = rolls[roll]; i > 0; i--) {
            if (i >= 3) {
                i -= 3;

                if (roll === "1") points += roll * 1000;
                else points += roll * 100;
            }
            if (i) {
                if (roll === "1") points += 100;
                if (roll === "5") points += 50;
            }
        }
    }
    return points;
}
