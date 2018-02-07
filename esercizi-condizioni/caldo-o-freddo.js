/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/


var lun = 15;
var mar = 24;
var mer = 22;
var gio = 23;
var ven = 24;
var sab = 26;
var dom = 32;

console.log(Math.max(lun,mar,mer,gio,ven,sab,dom));
console.log(Math.min(lun,mar,mer,gio,ven,sab,dom));


/*
if (lun > mar && lun > mer && lun > gio && lun > ven && lun > sab && lun > dom) {
    console.log('Lunedi è stato il giorno più caldo della settimana!');
} else if (lun < mar && lun < mer && lun < gio && lun < ven && lun < sab && lun < dom) {
    console.log('Lunedi è stato il giorno più freddo della settimana!');
}

if (mar > lun && mar > mer && mar > gio && mar > ven && mar > sab && mar > dom) {
    console.log('Martedì è stato il giorno più caldo della settimana!');
} else if (mar < lun && mar < mer && mar < gio && mar < ven && mar < sab && mar < dom) {
    console.log('Martedì è stato il giorno più freddo della settimana!');
}

if (mer > lun && mer > mar && mer > gio && mer > ven && mer > sab && mer > dom) {
    console.log('Mercoledì è stato il giorno più caldo della settimana!');
} else if (mer < lun && mer < mar && mer < gio && mer < ven && mer < sab && mer < dom) {
    console.log('Mercoledì è stato il giorno più freddo della settimana!');
}

if (gio > lun && gio > mar && gio > mer && gio > ven && gio > sab && gio > dom) {
    console.log('Giovedì è stato il giorno più caldo della settimana!');
} else if (gio < lun && gio < mar && gio < mer && gio < ven && gio < sab && gio < dom) {

    console.log('Giovedì è stato il giorno più freddo della settimana!');
}

if (ven > lun && ven > mar && ven > mer && ven > gio && ven > sab && ven > dom) {
    console.log('Venerdì è stato il giorno più caldo della settimana!');
} else if (ven < lun && ven < mar && ven < mer && ven < gio && ven < sab && ven < dom) {
    console.log('Venerdì è stato il giorno più freddo della settimana!');
}

if (sab > lun && sab > mar && sab > mer && sab > gio && sab > ven && ven > dom) {
    console.log('Sabato è stato il giorno più caldo della settimana!');
} else if (sab < lun && sab < mar && sab < mer && sab < gio && sab < ven && ven < dom) {
    console.log('Sabato è stato il giorno più freddo della settimana!');
}

if (dom > lun && dom > mar && dom > mer && dom > gio && dom > ven && dom > sab) {
    console.log('Domenica è stato il giorno più caldo della settimana!');
} else if (dom < lun && dom < mar && dom < mer && dom < gio && dom < ven && dom < sab) {
    console.log('Domenica è stato il giorno più freddo della settimana!');
}
*/
