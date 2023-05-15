function findHack(arr) {
    const hackers = [];
    const score = {
        A: 30,
        B: 20,
        C: 10,
        D: 5,
    };

    function getPoints(scores) {
        return scores.reduce(
            (sum, sc) => (sum += score[sc] ? +score[sc] : 0),
            0
        );
    }

    function isTop5Courses(scores) {
        return (
            scores.length >= 5 && scores.every((sc) => sc === "A" || sc === "B")
        );
    }

    arr.forEach((student) => {
        let realSc = getPoints(student[2]);
        realSc += isTop5Courses(student[2]) ? 20 : 0;

        if (realSc > 200) realSc = 200;
        console.log(student[0], "real points: ", realSc);
        if (realSc !== student[1]) hackers.push(student[0]);
    });

    return hackers;
}
