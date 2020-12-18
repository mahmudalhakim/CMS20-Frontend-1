/**
 * BOM - Objektet window
 * 
 * Created by Mahmud Al Hakim
 * Date: 2020-12-18
 * Copyright: MIT
 */

// window.alert('alert är en metod som finns i objektet window');
// alert('Du kan anropa alert direkt');

let myName = prompt('Vad heter du?');
// alert('Hello ' + myName);
console.log('Hello ' + myName);

let num1 = prompt('Ange tal 1'); // 12
let num2 = prompt('Ange tal 2'); // 13
// alert('Summa: ' + (num1+num2) ); // 1213 (Konkatenering)
console.log('Summa: ' + (num1+num2));
console.error("You made a mistake");

// Vi måste konvertera stängar till tal
alert('Summa: ' + (Number(num1) + Number(num2)) ); // 25