const getAge = (death, birth) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest =  (people) => {
    return people.reduce((old, currentP) => {
        const oldestAge = getAge(old.yearOfDeath, old.yearOfBirth);
        const currentAge = getAge(
            currentP.yearOfDeath,
            currentP.yearOfBirth
        );
        return oldestAge < currentAge ? currentP : old;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
