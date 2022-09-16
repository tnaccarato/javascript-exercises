const findTheOldest = function(people) {
    // Declares a new object for storing the oldest person
    let oldestPerson = {
        name: 'Test',
        yearOfBirth: 2022,
        yearOfDeath: 2022,
    }
    for(person of people){
        // If person is still living, gets their current age and sets as deathYear
        if(typeof person.yearOfDeath === "undefined"){
            // Gets current year and assigns to current person
            person.yearOfDeath = new Date().getFullYear()
        }
        // Calculates the age of the oldest and current person
        oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
        currentPersonAge = person.yearOfDeath - person.yearOfBirth
        // If the current person is older than the current person, assigns as
        // new oldest
        if(currentPersonAge > oldestPersonAge){
            oldestPerson = person
        }
    }
    // Returns the oldest person
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
