const getTheTitles = function(items) {
    let titlesArray = [];
    for (let item of items) {
        titlesArray.push(item.title)
    };
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
