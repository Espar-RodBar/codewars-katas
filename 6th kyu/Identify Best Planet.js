// Identify Best Planet
/*
Filter the habitable planets with
These elements 

["H", "O", "N", "C", "P", "Ca"]

 If none  meet the requirements, then return  "".
 return the planet that is closest to the maximum possible size.
*/

const REQUIRED_ELEMENTS = ["H", "Ca", "N", "O", "P", "C"];

//
function separatePeriodicElem(elements) {
    const codeOfA = 65;
    const codeOfZ = 90;
    const lettersElAr = elements.split("");
    const output = [];
    let tempLetter = "";

    for (let i = 0; i < lettersElAr.length - 1; i++) {
        tempLetter += lettersElAr[i];
        // if the next letter is Upper push and reset to ""
        if (
            lettersElAr[i + 1].charCodeAt(0) <= codeOfZ &&
            lettersElAr[i + 1].charCodeAt(0) >= codeOfA
        ) {
            output.push(tempLetter);
            tempLetter = "";
        }

        // push last letters
        if (i === lettersElAr.length - 2) {
            if (tempLetter !== "") output.push(tempLetter + lettersElAr[i + 1]);
            else output.push(lettersElAr[i + 1]);
        }
    }
    return output;
}

function isHabitable(planet) {
    let planetElements = separatePeriodicElem(planet[0]);
    // guard clause for length, min length 7
    if (planetElements.length < 6) return false;

    let numReqEl = 6;

    // check all the requirements
    for (const reqEl of REQUIRED_ELEMENTS) {
        if (planetElements.includes(reqEl)) numReqEl--;
    }

    // if all requirements are checked return true
    if (numReqEl === 0) return true;
    return false;
}

function bestPlanet(solarSystem, maxSize) {
    const planetsAr = solarSystem.map((planet) => planet.split("_"));
    const viablePlanets = planetsAr.filter(
        (planet) => isHabitable(planet) && planet[1] <= maxSize
    );

    // order and return the planet joined or return ""
    viablePlanets.sort((a, b) => b[1] - a[1]);

    const output = viablePlanets[0] ? viablePlanets[0].join("_") : "";
    return output;
}
