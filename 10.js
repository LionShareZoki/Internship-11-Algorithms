const fruits = [];
let continueInput = true;

while (continueInput) {
    const name = prompt("Unesite ime voća:");
    const color = prompt("Unesite boju voća:");
    const price = Number(prompt("Unesite cijenu voća:"));
    
    fruits.push({ name, color, price });
    
    continueInput = confirm("Želite li nastaviti unos?");
}

const cheapestFruitsByColor = {};

fruits.forEach(fruit => {
    if (!cheapestFruitsByColor[fruit.color] || cheapestFruitsByColor[fruit.color].price > fruit.price) {
        cheapestFruitsByColor[fruit.color] = fruit;
    }
});

const selectedFruits = Object.values(cheapestFruitsByColor).sort((a, b) => a.name.length - b.name.length);

const totalCost = selectedFruits.reduce((sum, fruit) => sum + fruit.price, 0);

console.log("Ukupna cijena za kupnju barem jednog voća svake boje:", totalCost);
selectedFruits.forEach(fruit => {
    console.log(`${fruit.name} (Boja: ${fruit.color}, Cijena: ${fruit.price})`);
});
