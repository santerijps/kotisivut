1 + 2 - 3.14 * 4 / 5
5 / (2 * 4)

// numeroita (number)
123
3.14
-2

// tekstiä (string)
"terve"
'terve'

// totuusarvoja (boolean)
true // tosi
false // epätosi

// object (JSON -> JavaScript Object Notation, data.json)
let obj = {
    "nimi": "Santeri",
    ikä: 31,
    onkoAikuinen: true,

    name: "",
    age: 0,
    isAdult: true,
    IsAdult: false,
};

// Lista (list, array)
[123, "hehe", true, {nimi: "Santeri"}]

// muut tyypit
null
undefined

// muuttujat (variable)
let x = 0
x = x + 1

let y = 2
x = x - y

const PI = 3.14;

let etuNimi = "Santeri";
let kokoNimi = etuNimi + " Sukunimi";

let pääotsikko = "Yle.fi"
let artikkelinOtsikko = "Petteri Orpo teki tyhmästi";

let kokoOtsikko = pääotsikko + " | " + artikkelinOtsikko;




function authenticate(email, password) {
    if (email === "admin@gmail.com" && password === "1234") {
        return true;
    }
    else {
        return false;
    }
}

const emailDB = ["santeri@gmail.com"];

/**
 * 
 * @param {string} email 
 * @param {*} password 
 */
function createUser(email, password) {
    if (emailDB.includes(email)) {
        return { status: false, message: "email already exists" };
    }
    if (email.includes("@") === false) {
        return { status: false, message: "email is invalid" };
    }
    if (password.length < 4) {
        return { status: false, message: "password is too short" };
    }

    return { status: true };
}
