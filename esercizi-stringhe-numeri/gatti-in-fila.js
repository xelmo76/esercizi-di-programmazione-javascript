/*
  Gatti in fila
  Scrivi un programma che prenda in input:
    - Un numero totale di gatti
    - Il numero dei gatti presenti in ogni fila
  Restituisca in output:
   - Il numero di file risultanti
   - Nel caso l'ultima fila risulti incompleta, il numero di gatti mancanti
  Esempio
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4
  Hint: Se vuoi usare l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su) ma utilizza Math.ceil (arrotonda sempre all'intero superiore).
  http://www.imparareaprogrammare.it
*/

/*
Problema: Calcola il numero di file occupate dai Gatti.
                    qualora i Gatti non riuscissero a completare la fila calcola il numero di Gatti mancanti.
INPUT
A - ho un numero x di gatti
B - so quanti ne dispongo su ogni fila
(se il numero risultasse float lo devo arrotondare)

OUTPUT
Quante file vengono fuori
Quanti Gatti mancano se una fila è incompleta


Pseudo Codice:

Gatti = 10
Gatti x fila (GF) = 10
Numero di file = (Gatti/ GF) va arrotondato
Gatti Mancanti = (NOG*GF)-Gatti
Stampare il risutato
*/

//PRIMA SOLUZIONE
var cats = 44;
var lines = 6;
var numberLine = Math.ceil(cats / lines); // arrotondo per eccesso con Math.ceil

var catsleft = (numberLine * lines) - cats;

console.log ('numero di file = '+numberLine,', gatti mancanti = ' + catsleft );

//SECONDA SOLUZIONE
var cats = 44;
var lines = 6;
var numberLine = Math.ceil(cats / lines);

var catsleft = (numberLine * lines) % cats;// uso il modulo per ricavare i mancanti

console.log ('numero di file = '+numberLine,', gatti mancanti = ' + catsleft );
