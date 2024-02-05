// Unos broja proizvoda
const brojProizvoda = Number(prompt("Unesite broj proizvoda:"));

const proizvodi = [];

for(let i = 0; i < brojProizvoda; i++) {
    const ime = prompt("Unesite ime proizvoda:");
    const cijena = Number(prompt("Unesite cijenu proizvoda:"));
    const dostupnost = Number(prompt("Unesite dostupnost proizvoda (1 za dostupno, 0 za nedostupno):"));
    proizvodi.push({ ime, cijena, dostupnost });
}

console.log("Indeksi nedostupnih proizvoda:");
proizvodi.forEach((proizvod, index) => {
    if(proizvod.dostupnost === 0) console.log(index);
});

const dostupnoVoce = proizvodi.filter(proizvod => proizvod.dostupnost === 1);

dostupnoVoce.sort((a, b) => {
    return a.cijena - b.cijena || a.ime.localeCompare(b.ime);
});

console.log("Sortirano dostupno voće:");
console.log(dostupnoVoce);

const ukupnaCijena = proizvodi.reduce((acc, proizvod) => acc + proizvod.cijena, 0);
const cijenaNedostupnogVoća = proizvodi.filter(proizvod => proizvod.dostupnost === 0).reduce((acc, proizvod) => acc + proizvod.cijena, 0);
const postotakNedostupnog = (cijenaNedostupnogVoća / ukupnaCijena) * 100;

console.log(`Postotak ukupne cijene koji doprinosi nedostupno voće: ${postotakNedostupnog.toFixed(2)}%`);
