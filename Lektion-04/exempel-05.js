/**
 * Funktioner i JS
 * 
 * Created by Mahmud Al Hakim
 * Date: 2020-12-18
 * Copyright: MIT
 */

 // En parameterlös funktion
 function hej(){
     //alert('Hello from a function');
     console.log('Hello from a function');
 }

 // Funktionsanrop
 hej();

 // En funktion med en parameter
 function print(message){
     console.log(message);
 }

 // Anropa funktionen print med olika argument
 print("Funktionen print - test 1");
 print("Funktionen print - test 2");
 print("Funktionen print - test 3");

 // En funktion med två parametrar
 function add(num1 , num2){
     console.log(num1+num2);
 }
 add(1,2);   // 3 
 add(11,12); // 23 


 // En funktion med ett returvärde
 function fullName(firstName, lastName){
     return firstName + ' ' + lastName;
 }

 let myName = fullName('Mahmud' , 'Al Hakim');
 console.log(myName);
