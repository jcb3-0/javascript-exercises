const palindromes = function (string) {
    let uppercase = string.toUpperCase();
    let stringArray = Array.from(uppercase);
    let backwardsArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        backwardsArray.unshift(stringArray[i]);
    };
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] != backwardsArray[i]) {
            console.log(stringArray[i]);
            return false;
        } else if (stringArray[i] == backwardsArray[i]){
            console.log(stringArray[i]);
            if (i == stringArray.length - 1) {
                return true;
            };
            continue;
        };
    };
};

// Do not edit below this line
module.exports = palindromes;
