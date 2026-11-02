// BMI laskukaava:
// - Paino
// - Pituus
// - Kaava: Paino / Pituus^2

function laskeBMI(paino, pituus) {
    const bmi = paino / (pituus * pituus);
    return bmi;
}

function arvioiBMI(bmi) {
    // jos bmi <= 18.5 niin alipaino
    // jos bmi <  25   niin normaali
    // jos bmi >= 25   niin ylipaino

    if (bmi <= 18.5) {
        return "alipaino";
    }
    else if (bmi < 25) {
        return "normaali";
    }
    else {
        return "ylipaino";
    }
}

function selvitäBMIRajat(pituus) {
    // Tulosta alipainon, normaalipainon ja ylipainon rajat
    let alipainonRaja = 0; // kg
    let ylipainonRaja = 0; // kg
    
    // koodia
    for (let paino = 0; paino < 1000; paino++) {

    }

    console.log(pituus, alipainonRaja, ylipainonRaja);
}

selvitäBMIRajat(1.87);
