/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

/*
Pseudo Codice

Input 1 = anno attuale;
Input 2 = anno di nascita;
Input 3 = 100 anni;

risultati
input 4 = input 1- input 2;
input 5 = input 3 - input 4;
*/

var date = 2018;
var birth = 1976;
var century = 100;

var age = date - birth;
var rest = century - age;
 console.log (age, rest);
