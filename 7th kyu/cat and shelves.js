function solution(start, finish) {
    const bigJumps = Math.floor((finish - start) / 3);
    const smallJumps = (finish - start) % 3;
    return bigJumps + smallJumps;
    //Mew
}
