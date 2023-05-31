// Pete, the baker
// how many cakes we can make with the ingredients needed(recipe) and what we have available
// Check for every ingredient how much cakes we can do, and select the minimum
function cakes(recipe, available) {
    const maxCakes = [];
    for (const ingredient of Object.keys(recipe)) {
        if (!available[ingredient]) maxCakes.push(0);
        else
            maxCakes.push(
                Math.floor(available[ingredient] / recipe[ingredient])
            );
    }
    return Math.min(...maxCakes);
}
