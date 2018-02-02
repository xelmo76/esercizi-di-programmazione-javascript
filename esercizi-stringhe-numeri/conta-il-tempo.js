/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
/*

Problema: Trasformare un numero x di secondi in Ore, Minuti e secondi.

Pseudo Codice

- A = ho il numero totale di secondi
- B = calcolo quanti minuti sono questi secondi (/60)
- C = dal risultato calcolo quante ore sono questi minuti ( /60 )
- D = calcolo il resto dei minuti con il modulo%
- E = calcolo il resto dei secondi con il modulo%
- F = stampo il risultato

*/

var time = 12560;
var minutes = Math.round(time/60);
var hours = Math.round(minutes/60);
var minleft = minutes%60;
var secleft = time%60;
console.log (hours + ' ore', minleft + ' minuti', 'e '+ secleft + ' secondi');
