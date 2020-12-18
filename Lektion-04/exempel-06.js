/**
 * Events i JS
 * 
 * Created by Mahmud Al Hakim
 * Date: 2020-12-18
 * Copyright: MIT
 */

 function myFunction(){
     console.log("TEST");
     document.getElementById('demo').innerHTML =
       '<h2>Hello Events</h2>';
 }

 function showTime(){
     document.getElementById('time').innerHTML = 
        '<h2>' + new Date().toLocaleTimeString() + '</h2>';
 }
