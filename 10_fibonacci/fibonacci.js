const fibonacci = function(n) {
    let member = parseInt(n);
    if (member < 0) {
        return "OOPS";
    } else {
        let array = [1, 1];
        let nextNumber = 0;
        for (let i = 1; i < member; i++) {
            nextNumber = array[i] + array[i - 1];
            array.push(nextNumber);
        }
        return array[member-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
