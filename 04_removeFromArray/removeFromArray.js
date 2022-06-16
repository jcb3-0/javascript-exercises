const removeFromArray = function(array, ...removeArguments) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0, argumentArray = Array.from(removeArguments); j < argumentArray.length; j++) {
            if (array[i] === argumentArray[j]) {
                delete array[i];
            }
        }
    }
//removes undefined elements
    let filteredArray = array.filter(element => element !== undefined);
    return filteredArray;
}


// Do not edit below this line
module.exports = removeFromArray;
