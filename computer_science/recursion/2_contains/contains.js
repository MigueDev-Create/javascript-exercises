const contains = function (object, searchValue) {
    const values = Object.values(object)
    if (values.includes(searchValue)) return true

    return values
        .filter((value) => typeof value === 'object' && value !== null)
        .some((nestedValue) => contains(nestedValue, searchValue))
};

// Do not edit below this line
module.exports = contains;

