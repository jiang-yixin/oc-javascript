// Le JavaScript est un langage orienté objet par prototype.

// ---------------------------------------------------------------------------------------------------------------------

// un array d'exemple
var myArray1 = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
var myArray2 = new Array('Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume');
myArray.push('Ludovic'); // Ajoute « Ludovic » à la fin du tableau

// ---------------------------------------------------------------------------------------------------------------------

// d'une bouclefor, le bloc de condition, était exécuté à chaque itération
for (var i = 0, c = myArray.length; i < c; i++) {

  alert(myArray[i]);

}

// ---------------------------------------------------------------------------------------------------------------------

// array vs object
var myArray = [];
var myObject = {};
var myObject = {
  item1: 'Texte 1',
  item2: 'Texte 2'
};

// ---------------------------------------------------------------------------------------------------------------------

family['uncle'] = 'Didier'; // « Didier » est ajouté et est accessible via l'identifiant « uncle »
family.uncle = 'Didier'; // Même opération mais d'une autre manière

// for in used in object
for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »

  alert(family[id]);

}


