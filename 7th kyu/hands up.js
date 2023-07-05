const getPositions = (s) => {
    const steps = Number(s);
    return [steps % 3, Math.floor(steps / 3) % 3, Math.floor(steps / 9) % 3];
};
