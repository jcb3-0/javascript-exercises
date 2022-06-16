const removeFromArray = function(array, ...removed) {
    let i = 0;
    while (i < array.length) {
        if (array[i] == removed){
            array.splice(i, 1);
            return array;
        }
        i++
    }
};

// Do not edit below this line
module.exports = removeFromArray;
