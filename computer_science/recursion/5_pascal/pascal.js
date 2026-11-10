const pascal = function (n) {
    const currentLine = [1]

    if (n === 1) {
        return currentLine
    }

    const prevousLine = pascal(n - 1)

    for (let i = 0; i < prevousLine.length; i++) {
        const rightNeighbor = prevousLine[i + 1] ?? 0;

        currentLine.push(prevousLine[i] + rightNeighbor)
    }
    return currentLine
};

// Do not edit below this line
module.exports = pascal;
