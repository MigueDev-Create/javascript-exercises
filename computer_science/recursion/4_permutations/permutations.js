const permutations = function (array) {

    if (array.length === 0) {
        return [[]];
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        const selected = array[i]

        const remaining = [
            ...array.slice(0, i),
            ...array.slice(i + 1)
        ];
        const smallerPermutations = permutations(remaining);

        for (const permutation of smallerPermutations) {
            result.push([selected, ...permutation])
        }
    }
    return result
};

// Do not edit below this line
module.exports = permutations;
