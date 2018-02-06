/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/

/*Problema:
Ho un numero e devo far ritornare 0 se è pari o 1 se dispari

posso usare il l'operatore % 2 (modulo) .
In questo modo se il numero è pari mi restituirà 0 di resto mentre se è dispari
mi restituira 1.



*/



var input = 213721983729734;

if(input % 2 == 0)
console.log(input +': il numero in input è pari');
else
console.log(input +': il numero in input è dispari');
