/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/


var menu = ('1. Tiramisù \n2. Torta della Nonna \n3. Cheesecake alla Nutella \n4. Macedonia');

console.log(menu);

var dolci = 1;

switch (dolci){
    case 1:
    console.log('Complimenti hai scelto il Tiramisù!');
    break;
    case 2:
    console.log('Complimenti hai scelto la Torta della Nonna!');
    break;
    case 3:
    console.log('Complimenti hai scelto il Cheesecake alla Nutella!');
    break;
    case 4:
    console.log('Complimenti hai scelto la Macedonia!');
    break;
    default:
    console.log('Mi dispiace, ma il dolce scelto non risulta nel menù!')
}
