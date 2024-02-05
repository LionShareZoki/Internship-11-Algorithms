const athletes = [];
let continueInput = true;

while (continueInput) {
    const firstName = prompt("Unesite ime sportaša:");
    const lastName = prompt("Unesite prezime sportaša:");
    const points = Number(prompt("Unesite bodove sportaša:"));
    
    athletes.push({ firstName, lastName, points });
    
    continueInput = confirm("Želite li nastaviti unos?");
}

const maxPoints = Math.max(...athletes.map(athlete => athlete.points));

const categories = {
    '0-25%': [],
    '25-50%': [],
    '50-75%': [],
    '75-100%': []
};

athletes.forEach(athlete => {
  const percentage = (athlete.points / maxPoints) * 100;
  
  if (percentage > 75) {
      categories['0-25%'].push(athlete);
  } else if (percentage > 50) {
      categories['25-50%'].push(athlete);
  } else if (percentage > 25) {
      categories['50-75%'].push(athlete);
  } else {
      categories['75-100%'].push(athlete);
  }
});


Object.keys(categories).forEach(category => {
    console.log(`Kategorija: ${category}`);
    categories[category]
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .forEach(athlete => console.log(`${athlete.lastName} ${athlete.firstName}`));
});
