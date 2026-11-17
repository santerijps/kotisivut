/**
 * ppkkvvynnnt
 * @param {string} hetu 
 * @returns {boolean}
 */
function validoiHetu(hetu) {
    // pilkotun arvot löytyvät esim. pilkottu.ppkkvv
    const pilkottu = pilkoHetu(hetu);
    const tarkastusMerkki = selvitäTarkastusMerkki(pilkottu.ppkkvv + pilkottu.nnn);
    // Tarkistukset:
    // 1. Hetun pituus
    // 2. Yksilönumero (nnn) välillä 2-899
    // 3. Hetun tarkistusmerkki on oikein

    return false;
}

/**
 * @param {string} hetu 
 * @returns {{ ppkkvv: string, y: string, nnn: string, t: string }}
 */
function pilkoHetu(hetu) {
    const pilkottu = { ppkkvv: "", y: "", nnn: "", t: "" };
    // Käyttäkää hetu.slice(indeksiAlku, indeksiLoppu) funktiota
    pilkottu.ppkkvv = hetu.slice(0, 6);

    return pilkottu;
}

/*
Jakojäännös -> tarkistusmerkki
0	0
1	1
2	2
3	3
4	4
5	5
6	6
7	7
8	8
9	9
10	A
11	B
12	C
13	D
14	E
15	F
16	H
17	J
18	K
19	L
20	M
21	N
22	P
23	R
24	S
25	T
26	U
27	V
28	W
29	X
30	Y
*/

/**
 * Tämä funktio antaa tarkastusmerkin luvulle
 * @param {string} luku ppkkvvnnn
 * @returns {string}
 */
function selvitäTarkastusMerkki(luku) {
    // stringin voi muuttaa luvuksi esim. Number(luku)
    // Jakojäännös: % (esim. Number(luku) % 30)
    // Tehkää 31 if-lauseketta jolla jakojäännös tarkistetaan
    // Tämän funktion pitää palauttaa tarkistusmerkki
}


console.log(validoiHetu("020596-239T"));
console.log(validoiHetu("130976-343A"));
console.log(validoiHetu("191166-8320"));
