const brojVoća = Number(prompt("Unesite broj voća:"));

const voće = [];

for(let i = 0; i < brojVoća; i++) {
    const ime = prompt("Unesite ime voća:");
    const cijena = Number(prompt("Unesite cijenu voća:"));
    const dostupnost = Number(prompt("Unesite dostupnost voća (1 za dostupno, 0 za nedostupno):"));
    const boja = dostupnost === 1 ? 'crvena' : 'žuta';
    voće.push({ ime, cijena, dostupnost, boja });
}

voće.sort((a, b) => {
    if (a.boja === b.boja) {
        if (a.ime < b.ime) return -1;
        if (a.ime > b.ime) return 1;
        return 0;
    }
    if (a.boja < b.boja) return -1;
    if (a.boja > b.boja) return 1;
    return 0;
});

console.log("Sortirano voće po boji pa po imenu:");
console.log(voće);
