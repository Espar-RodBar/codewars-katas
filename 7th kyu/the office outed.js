function outed(meet, boss) {
    let rating = 0;
    let size = Object.entries(meet).length;
    for (let [name, value] of Object.entries(meet)) {
        if (name === boss) rating += value * 2;
        else rating += value;
    }
    return rating / size <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
