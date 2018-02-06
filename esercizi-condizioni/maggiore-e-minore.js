/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/


var a = 100, b = 60, c = 96, d = 20;



if (a > b && a > c && a > d){
    console.log('La variabile A è la maggiore e vale '+ a);
}else if (a < b && a < c && a < d){
    console.log('La variabile A è la minore e vale '+ a);
}


if (b > a && b > c && b > d){
    console.log('La variabile B è la maggiore e vale '+ b);
}else if (b < a && b < c && b < d){
    console.log('La variabile B è la minore e vale '+ b);
}


if (c > a && c > b && c > d){
    console.log('La variabile C è la maggiore e vale '+ c);
}else if (c < a && c < b && c < d){
    console.log('La variabile C è la minore e vale '+ c);
}


if (d > a && d > b && d > c){
    console.log('La variabile D è la maggiore e vale '+ d);
}else if (d < a && d < b && d < c){
    console.log('La variabile D è la minore e vale '+ d);
}
