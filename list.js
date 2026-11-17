// Funktion tehtävä:
// KOTITEHTÄVÄ: Selvitä listan
// - pienin luku
// - suurin luku
// - lukujen summa
// - lukujen keskiarvo (lukujen summa jaettuna lukujen määrällä)
function analyzeList(list) {
    console.log("\nLista:", list);

    // Tarkistetaan, jos lista on tyhjä niin lopetetaan
    // funktion ajaminen heti.
    if (list.length === 0) {
        console.error("Lista on tyhjä!");
        return;
    }

    let pieninLuku = list[0];
    let suurinLuku = list[0];
    let summa = 0;

    for (const luku of list) {

        if (luku < pieninLuku) {
            pieninLuku = luku;
        }

        if (luku > suurinLuku) {
            suurinLuku = luku;
        }

        summa += luku;

    }

    // Yllä oleva for-loop käytännössä sama kuin tämä:
    // for (let i = 0; i < list.length; i++) {
    //     const luku = list[i];
    // }

    console.log("Pienin:", pieninLuku);
    console.log("Suurin:", suurinLuku);
    console.log("Summa:", summa);
    console.log("Keskiarvo:", summa / list.length);
}

analyzeList([42, 7, 89, 15, 63, 91, 24, 3, -1, 78, 56, 31, 98, 12, 67, 44, 85, 19, 52, 36, 73]);
analyzeList([]);
analyzeList([0]); 
analyzeList([-50, -12, -3, -99, -1]); 
analyzeList([42, 42, 42, 42, 42]); 
analyzeList([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0, -1]); 
analyzeList([3.14, 2.718, -0.5, 100.001]);
