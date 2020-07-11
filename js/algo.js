/* ÖSSZEGZÉS ALGORITMUS
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum:", sum);

/* SZÁMLÁLÁS ALGORITMUS
*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++
    }
}
console.log("Paros szamok szama:", db);

/* SZÉLSŐÉRTÉK ALGORITMUS
*/
let legnagyobb = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > legnagyobb) {
        legnagyobb = numericArray[i];
    }
}
console.log("A legnagyobb elem:", legnagyobb);

let legkisebb = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < legkisebb) {
        legkisebb = numericArray[i];
    }
}
console.log("A legkisebb elem:", legkisebb);

/* ELDÖNTÉS ALGORITMUS
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("Tartalmazza az 5-öt:", contains);







