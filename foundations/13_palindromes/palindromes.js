const palindromes = function (string) {
    const normalized = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const reverseString = normalized.split('').reverse().join('')
    
    if (normalized === reverseString ) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
