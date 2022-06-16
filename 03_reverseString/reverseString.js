const reverseString = function(string) {
    let array = [];
    for (i = 0; i < string.length; i++) {
        array.unshift(string[i]);
    }
    let newString = array.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
