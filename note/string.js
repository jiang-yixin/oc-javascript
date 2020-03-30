// type primitif
var myString = "Chaîne de caractères primitive"; // primitif, n'est pas un string, typeof myString => 'string'
var myRealString = new String("Chaîne"); // instancier string, typeof myString => object

var myArray = []; // Tableau primitif
var myRealArray = new Array();

// ---------------------------------------------------------------------------------------------------------------------

// le tilde incrémente la valeur qui le suit et y ajouter une négation
alert(~2);  // Affiche : « -3 »
alert(~3);  // Affiche : « -4 »
alert(~-2); // Affiche : « 1 »