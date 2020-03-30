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

// ---------------------------------------------------------------------------------------------------------------------

// if we change obj2, obj1 will be changed. = between object and array is the reference. = for string it copies.
var obj1 = {'key': 1};
var obj2 = obj1;

// ---------------------------------------------------------------------------------------------------------------------

// !! Objet !!
function Person(nick, age, sex, parent, work, friends) {
  this.nick = nick;
  this.age = age;
  this.sex = sex;
  this.parent = parent;
  this.work = work;
  this.friends = friends;

  /*
  this.addFriend = function(nick, age, sex, parent, work, friends) {
    this.friends.push(new Person(nick, age, sex, parent, work, friends));
  };
   */
}

// or
Person.prototype.addFriend = function(nick, age, sex, parent, work, friends) {
  this.friends.push(new Person(nick, age, sex, parent, work, friends));
}

var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);


// prototype

// ---------------------------------------------------------------------------------------------------------------------

// namespace

var myNamespace = {
  myBestFunction: function() {
    alert('Ma meilleure fonction !');
  }
};

// On exécute la fonction :
myNamespace.myBestFunction();

// ---------------------------------------------------------------------------------------------------------------------

// une fonction est indépendante et ne fait partie d'aucun objet
// une méthode en revanche, est dépendante d'un objet

