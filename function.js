// Funktioiden hyödyt:
// 1. Uudelleenkäytettyys
// 2. Parametrisointi (muuttujat funktiossa)
// 3. Palautuvat arvot (return values)

function tervehdi(nimi) {
    console.log("Moi!", nimi);
    console.log("Terve!", nimi);
}

// tervehdi("Matti");
// tervehdi("Teppo");

function onParillinen(luku) {
    if (luku % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// let x = onParillinen(123);

// if (onParillinen(123)) {
//     console.log("123 on parillinen!");
// }
// else {
//     console.log("123 on pariton");
// }

/**
 * fibonacci luvut
 * 1 1 2 3 5 8 13 21 34 55 89 ... loputtomiin
 * Voidaan toteuttaa rekursiivisenä funktiona
 * @param {number} n Luvun sija/position lukujanalla
 */
function fib(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }

    return fib(n - 2) + fib(n - 1);
}

// console.log(fib(1) === 1);
// console.log(fib(2) === 1);
// console.log(fib(3) === 2);
// console.log(fib(10) === 55);

function ajoita(fn) {
    return function (...args) {
        console.time("ajoitus");
        const returnValue = fn(...args);
        console.timeEnd("ajoitus");
        return returnValue;
    };
}

const f = ajoita(function() {
    console.log("Terve!");
});

f();
