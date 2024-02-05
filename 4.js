const fruits = [];
let continueInput = true;

while (continueInput) {
    const name = prompt("Unesite ime voća:");
    const color = prompt("Unesite boju voća:");
    const calories = Number(prompt("Unesite kalorije voća:"));
    
    fruits.push({ name, color, calories });
    
    continueInput = confirm("Želite li nastaviti unos?");
}

const fruitGroups = {};

fruits.forEach(fruit => {
    if (!fruitGroups[fruit.color]) {
        fruitGroups[fruit.color] = { totalCalories: 0, fruits: [] };
    }
    
    fruitGroups[fruit.color].totalCalories += fruit.calories;
    fruitGroups[fruit.color].fruits.push(fruit);
});

const sortedFruitGroups = Object.keys(fruitGroups).sort().map(color => {
    return {
        color: color,
        totalCalories: fruitGroups[color].totalCalories,
        fruits: fruitGroups[color].fruits
    };
});

sortedFruitGroups.forEach(group => {
    console.log(`Boja: ${group.color}, Ukupno kalorija: ${group.totalCalories}`);
    group.fruits.forEach(fruit => {
        console.log(`- ${fruit.name} (${fruit.calories} kalorija)`);
    });
});
