/**
 * DOM (Document Object Model)
 * 
 * Created by Mahmud Al Hakim
 * Date: 2020-12-18
 * Copyright: MIT
 */

 document.write("Hello DOM");

 // Hämta ett element med DOM
 let divElement = document.getElementById('demo');
 let h1Element = document.getElementById('one');

 // Arbeta med objekttypen element

 // Ändra innehåll
 divElement.innerHTML = '<h3>Lite text i JavaScript</h3>';
 h1Element.textContent = 'Ny Rubrik via JS';

 // Ändra utseende (CSS)
 h1Element.style.backgroundColor = 'gold';
 h1Element.style.fontSize = '3em';

 // Dölja ett element
 divElement.style.display = 'none';

 
