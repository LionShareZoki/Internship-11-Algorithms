const people = [];
let continueInput = true;

while (continueInput) {
    const firstName = prompt("Unesite ime:");
    const lastName = prompt("Unesite prezime:");
    const occupation = prompt("Unesite zanimanje:");
    const salary = Number(prompt("Unesite plaću:"));
    
    people.push({ firstName, lastName, occupation, salary });
    
    continueInput = confirm("Želite li nastaviti unos?");
}

const occupationData = {};

people.forEach(person => {
    if (!occupationData[person.occupation]) {
        occupationData[person.occupation] = { totalSalary: 0, count: 0 };
    }
    
    occupationData[person.occupation].totalSalary += person.salary;
    occupationData[person.occupation].count++;
});

const occupationStats = Object.keys(occupationData).map(occupation => {
    return {
        occupation: occupation,
        avgSalary: occupationData[occupation].totalSalary / occupationData[occupation].count,
        count: occupationData[occupation].count
    };
});

occupationStats.sort((a, b) => b.avgSalary - a.avgSalary);

console.log("Zanimanja sortirana po prosječnoj plaći:", occupationStats);
