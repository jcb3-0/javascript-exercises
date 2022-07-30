const findTheOldest = function(people) {
    for (let person of people) {
        person.age = 0;
        if (person.yearOfDeath == undefined) {
           let today = new Date();
           person.age = today.getFullYear() - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth
        }
    }
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > people[0].age) {
            oldest = people[i];
        }
        return oldest;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
