// querySelector() et querySelectorAll() + Ce sélecteur CSS
var query = document.querySelector('#menu .item span'),
  queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"

alert(queryAll.length); // Affiche : "2"
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"

// ---------------------------------------------------------------------------------------------------------------------

// On peut penser que pour modifier l'attributclassd'un élément HTML, il suffit d'utiliserelement.class.
// Ce n'est pas possible, car le mot-cléclassest réservé en JavaScript, bien qu'il n'ait aucune utilité.
// À la place declass, il faudra utiliserclassName.

// ---------------------------------------------------------------------------------------------------------------------

// innerHTML permet de récupérer le code HTML enfant d'un élément sous forme de texte
// innerText=textContent seul le texte est récupéré, et non les balises

// ---------------------------------------------------------------------------------------------------------------------

// create an element
var newLink = document.createElement('a');

// ---------------------------------------------------------------------------------------------------------------------

// reference

// ---------------------------------------------------------------------------------------------------------------------

// On va cloner un élément créé :
// var hr1 = document.createElement('hr');
// var hr2 = hr1.cloneNode(false); // Il n'a pas d'enfants…