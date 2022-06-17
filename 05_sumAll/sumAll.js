const sumAll = function(begin, end) {
    let sum = 0;
    if (typeof begin === 'string' || typeof end === 'string') {
        return "ERROR";
    } if (begin < 0 || end < 0) {
        return "ERROR";
    } else if (begin < end) {
        for (let i = begin; i <= end; i++) {
            sum += i;
        }
        return sum;
    } else if (begin > end) {
        for (let i = end; i <= begin; i++) {
            sum += i;
        }
        return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
