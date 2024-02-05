let imena = [];

while(true) {
    let unos = prompt("Unesite ime osobe (ili 'kraj' za završetak):");
    if(unos.toLowerCase() === 'kraj' || unos === "") break;
    imena.push(unos);
}

imena.sort();

let filtriranaImena = imena.filter(ime => ime.length > 5);

let csvFormat = filtriranaImena.join(",");

console.log("Imena u CSV formatu:", csvFormat);
