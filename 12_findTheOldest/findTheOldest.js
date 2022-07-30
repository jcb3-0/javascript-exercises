const findTheOldest = function(people) {
    let oldest = people[0].yearOfDeath - people[0].yearOfBirth;
    for (let i = 1; i < people.length; i++) {
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest) {
            oldest = people[i];
        }
        return oldest;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
