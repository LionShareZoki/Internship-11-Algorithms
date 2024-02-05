const products = [];

let continueInput = true;

while (continueInput) {
    const name = prompt("Unesite ime proizvoda:");
    const price = Number(prompt("Unesite cijenu proizvoda:"));
    const color = prompt("Unesite boju proizvoda:");
    
    products.push({ name, price, color });
    
    continueInput = confirm("Želite li nastaviti sa unosom?");
}

let totalPrice = 0;

products.forEach(product => {
    totalPrice += product.price;
});

const avgPrice = totalPrice / products.length;

let maxDeviation = 0;
let mostDeviatingProduct = null;

products.forEach(product => {
    const deviation = Math.abs(product.price - avgPrice);
    if (deviation > maxDeviation) {
        maxDeviation = deviation;
        mostDeviatingProduct = product;
    }
});

console.log("Proizvod koji najviše odstupa od prosječne cijene:", mostDeviatingProduct);
