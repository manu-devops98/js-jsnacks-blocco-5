/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arrayOne = [1,2,3,4,5];
const arrayTwo = ['a','b','c','d','e'];

function sumArray(array1, array2) {
    let arraySum = [];
    for (let i = 0; i < array1.length; i++) {
        arraySum.push(array1[i], array2[i]); 
    }
    
    return arraySum;
}

sumArray(arrayOne, arrayTwo);
console.log(sumArray(arrayOne, arrayTwo));