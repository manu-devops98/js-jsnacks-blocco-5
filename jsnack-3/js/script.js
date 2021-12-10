/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const zucchine = [
    {
        varieta: 'italiana',
        peso: 2,
        lunghezza: 18
    },
    {
        varieta: 'spagnola',
        peso: 3,
        lunghezza: 19
    },
    {
        varieta: 'francese',
        peso: 5,
        lunghezza: 11
    },
    {
        varieta: 'tedesca',
        peso: 1,
        lunghezza: 12
    },
    {
        varieta: 'verde',
        peso: 6,
        lunghezza: 13
    },
    {
        varieta: 'gialla',
        peso: 0.5,
        lunghezza: 15
    },
    {
        varieta: 'turchese',
        peso: 0.3,
        lunghezza: 16
    },
    {
        varieta: 'marocchina',
        peso: 0.8,
        lunghezza: 17
    },
    {
        varieta: 'egizia',
        peso: 2.2,
        lunghezza: 22
    },
    {
        varieta: 'russa',
        peso: 1.9,
        lunghezza: 23
    }
]

let minore = [];
let maggiore = [];
let minSum = 0;
let maxSum = 0;

for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i];
    if (element.lunghezza < 15) {
        minore.push(element);
        minSum += element.peso;
    } else if (element.lunghezza > 15) {
        maggiore.push(element);
        maxSum += element.peso;
    }
    
}

