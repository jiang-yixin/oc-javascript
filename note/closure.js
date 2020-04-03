// closure ? En JavaScript, il s'agit d'une fonction ayant pour but de capter des données susceptibles de changer au cours du temps,
// de les enregistrer dans son espace fonctionnel et de les fournir en cas de besoin.

var divs = document.getElementsByTagName('div'),
  divsLen = divs.length;

for (var i = 0; i < divsLen; i++) {

  (function(i) {

    setTimeout(function() {
      divs[i].style.display = 'block';
    }, 200 * i);

  })(i);

}

// ---------------------------------------------------------------------------------------------------------------------

// en langage C !!!
// Ces variables particulières sont déclarées à la première exécution de la fonction,
// mais ne sont pas supprimées à la fin des exécutions.
// Elles sont conservées pour les prochaines utilisations de la fonction.
void myFunction() {
  static int myStatic = 0;
}

// en JS
var myVar = 0;

function display(value) {

  if (typeof value != 'undefined') {
    myVar = value;
  }

  alert(myVar);

}

display(); // Affiche : 0
display(42); // Affiche : 42
display(); // Affiche : 42

// ---------------------------------------------------------------------------------------------------------------------

// Une variable peut posséder plusieurs références. Elle ne sera jamais supprimée tant qu'elle possèdera encore une référence active.

// Les closures ont été inventées dans le but de répondre à plusieurs problématiques concernant la gestion de données.

// Une closure peut être écrite de plusieurs manières différentes, à vous de choisir celle qui convient le mieux à votre code.
