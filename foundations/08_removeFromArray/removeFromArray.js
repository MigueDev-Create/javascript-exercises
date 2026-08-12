const removeFromArray = function(array, ...argumentos) {
 return array.filter((value) => !argumentos.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
