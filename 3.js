const people = [];
let continueInput = true;

while (continueInput) {
    const name = prompt("Unesite ime i prezime:");
    const occupation = prompt("Unesite zanimanje:");
    const salary = Number(prompt("Unesite plaću:"));
    
    people.push({ name, occupation, salary });
    
    continueInput = confirm("Želite li nastaviti unos?");
}

let totalSalary = 0;
const occupationData = {};

people.forEach(person => {
    totalSalary += person.salary;
    
    if (!occupationData[person.occupation]) {
        occupationData[person.occupation] = { totalSalary: 0, people: [] };
    }
    
    occupationData[person.occupation].totalSalary += person.salary;
    occupationData[person.occupation].people.push(person);
});

const result = Object.keys(occupationData).map(occupation => {
    const occupationTotalSalary = occupationData[occupation].totalSalary;
    const occupationContributionPercentage = (occupationTotalSalary / totalSalary * 100).toFixed(2);
    
    const peopleContributions = occupationData[occupation].people.map(person => {
        const personContributionPercentage = (person.salary / occupationTotalSalary * 100).toFixed(2);
        return { name: person.name, contributionPercentage: personContributionPercentage };
    });
    
    return {
        occupation: occupation,
        contributionPercentage: occupationContributionPercentage,
        people: peopleContributions
    };
});

console.log(result);
