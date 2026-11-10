const totalIntegers = function (data) {

    if (!Array.isArray(data) && (typeof data !== "object" || data === null)) return

    const countIntegers = function (value) {
        let count = 0;

        if (Number.isInteger(value)) {
            return 1;
        }

        if (Array.isArray(value)) {
            for (const elemento of value) {
                count += countIntegers(elemento);
            }
            return count;
        }

        if (typeof value === "object" && value !== null) {
            for (const elemento of Object.values(value)) {
                count += countIntegers(elemento);
            }
            return count;
        }
        return 0;
    };
    return countIntegers(data);
};

// Do not edit below this line
module.exports = totalIntegers;