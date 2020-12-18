/**
 * Några inbyggda JS-objekt
 * 
 * Created by Mahmud Al Hakim
 * Date: 2020-12-18
 * Copyright: MIT
 */

 // Objektet String
 let myName = "Mahmud Al Hakim";
 console.log(myName);
 console.log('Antal tecken: ' + myName.length);

 console.log(myName.toLowerCase());
 console.log(myName.toUpperCase());
 myName = myName.toUpperCase();
 console.log(myName);


  // Objektet Number
  let PI = 3.14159;
  console.log( PI.toFixed(2) );

  // Objektet Math
  console.log(Math.PI);
  console.log(Math.sqrt(16));
  console.log(Math.max(3,5));
  console.log(Math.min(3,5));
  console.log(Math.round(1.4));
  console.log(Math.round(1.5));
  console.log(Math.round(Math.random() * 10));

  // Objektet Date
  let today = new Date();
  console.log(today);
  console.log(today.getFullYear()); // 2020
  console.log(today.getDate());     // 18
  console.log(today.getDay());      // 5 = Fredag
  console.log(today.getMonth());    // 11 = December
  console.log(today.getHours());    
  console.log(today.getMinutes());  
  console.log(today.getSeconds()); 
  console.log(today.toLocaleDateString());
  console.log(today.toLocaleTimeString());