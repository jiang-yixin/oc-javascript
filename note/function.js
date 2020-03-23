// si le ++ est dernier, il fait d'abord l'assignation
var count = count ++;

// ---------------------------------------------------------------------------------------------------------------------

// Les fonctions anonymes
var sayHello = function() {
    alert('Bonjour !');
};

// ---------------------------------------------------------------------------------------------------------------------

// Les fonctions anonymes : isoler son code
// Code externe

(function() {

    // Code isolé

})();

// Code externe

/*
Pourquoi ces parenthèses ? Eh bien pour une raison simple : une fonction, lorsqu'elle est déclarée,
n'exécute pas immédiatement le code qu'elle contient, elle attend d'être appelée. Or, nous,
nous souhaitons exécuter ce code immédiatement ! La solution est donc d'utiliser ce couple de parenthèses.
*/

// ---------------------------------------------------------------------------------------------------------------------

// diff instruction VS structure
// il faut un ; après une instruction

// ---------------------------------------------------------------------------------------------------------------------
