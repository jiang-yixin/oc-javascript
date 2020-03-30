// un polyfill est un script qui a pour but de fournir une technologie à tous les navigateurs existants

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// wrapper: Un wrapper est un code qui a pour but d'encadrer l'utilisation de certains éléments du JavaScript

function Img(src) {

  var obj = this; // Nous faisons une petite référence vers notre objet Img. Cela nous facilitera la tâche.

  this.originalImg = new Image(); // On instancie l'objet original, le wrapper servira alors d'intermédiaire

  this.complete = false;
  this.onload = function() {}; // Voici l'événement que les développeurs pourront modifier

  this.originalImg.onload = function() {

    obj.complete = true; // L'image est chargée !
    obj.onload(); // On exécute l'événement éventuellement spécifié par le développeur

  };

  if (src) {
    this.originalImg.src = src; // Si elle est spécifiée, on défini alors la propriété src
  }

}

Img.prototype.set = function(name, value) {

  var allowed = ['width', 'height', 'src'], // On spécifie les propriétés dont on autorise la modification
    wrapperProperties = ['complete', 'onload'];

  if (allowed.indexOf(name) != -1) {
    this.originalImg[name] = value; // Si la propriété est autorisée alors on la modifie
  } else if (wrapperProperties.indexOf(name) != -1) {
    this[name] = value; // Ici, la propriété appartient au wrapper et non pas à l'objet original
  }

};

Img.prototype.get = function(name) {

  // Si la propriété n'existe pas sur le wrapper, on essaye alors sur l'objet original :
  return typeof this[name] != 'undefined' ? this[name] : this.originalImg[name];

};